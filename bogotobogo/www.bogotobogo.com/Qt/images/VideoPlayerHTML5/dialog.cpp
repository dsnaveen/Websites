// dialog.cpp

#include "dialog.h"
#include "ui_dialog.h"
#include <QDebug>
#include <QString>
#include <QProcess>
#include <QScrollBar>
#include <QMessageBox>
#include <QFileInfo>
#include <QFileDialog>
#include <QWebView>
#include <QTextStream>
#include <QMimeDatabase>
#include <QMimeType>

QString mimeReturn(const QFile&);

Dialog::Dialog(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::Dialog)
{
    ui->setupUi(this);

    // Play button for output - initially disabled
    ui->playOutputButton->setEnabled(false);

    // Create three processes
    // 1.transcoding, 2.input play 3.output play
    mTranscodingProcess = new QProcess(this);
    mInputPlayProcess = new QProcess(this);
    mOutputPlayProcess = new QProcess(this);

    connect(mTranscodingProcess, SIGNAL(started()), this, SLOT(processStarted()));

    connect(mTranscodingProcess,SIGNAL(readyReadStandardOutput()),this,SLOT(readyReadStandardOutput()));
    connect(mTranscodingProcess, SIGNAL(finished(int)), this, SLOT(encodingFinished()));
}

Dialog::~Dialog()
{
    delete ui;
}

void Dialog::processStarted()
{
    qDebug() << "processStarted()";
}

// conversion start
void Dialog::on_startButton_clicked()
{
    QString program = "C:/FFmpeg/bin/ffmpeg";

    QStringList arguments;
    QString input = ui->fromLineEdit->text();
    if(input.isEmpty()) {
        qDebug() << "No input";
        QMessageBox::information(this,
                     tr("ffmpeg"),tr("Input file not specified"));
        return;
    }
    QString output = ui->toLineEdit->text();
    if(output.isEmpty()) {
        qDebug() << "No output";
        QMessageBox::information(this,
                     tr("ffmpeg"),tr("Output file not specified"));
        return;
    }

    QString fileName = ui->toLineEdit->text();
    qDebug() << "output file check " << fileName;
    qDebug() << "QFile::exists(fileName) = " << QFile::exists(fileName);
    if (QFile::exists(fileName)) {
         if (QMessageBox::question(this, tr("ffmpeg"),
                    tr("There already exists a file called %1 in "
                    "the current directory. Overwrite?").arg(fileName),
                    QMessageBox::Yes|QMessageBox::No, QMessageBox::No)
             == QMessageBox::No)
             return;
         QFile::remove(fileName);
         while(QFile::exists(fileName)) {
             qDebug() << "output file still there";
         }
     }

    arguments << "-i" << input << output;

    qDebug() << arguments;

    mTranscodingProcess->setProcessChannelMode(QProcess::MergedChannels);
    mTranscodingProcess->start(program, arguments);
}

void Dialog::readyReadStandardOutput()
{
    mOutputString.append(mTranscodingProcess->readAllStandardOutput());
    ui->textEdit->setText(mOutputString);

    // put the slider at the bottom
    ui->textEdit->verticalScrollBar()
            ->setSliderPosition(
                ui->textEdit->verticalScrollBar()->maximum());
}

void Dialog::encodingFinished()
{
    // Set the encoding status by checking output file's existence
    QString fileName = ui->toLineEdit->text();

    if (QFile::exists(fileName)) {
        ui->transcodingStatusLabel
                ->setText("Transcoding Status: Successful!");
        ui->playOutputButton->setEnabled(true);
    }
    else {
        ui->transcodingStatusLabel
                ->setText("Transcoding Status: Failed!");
    }
}

// Browse... button clicked - this is for input file
void Dialog::on_fileOpenButton_clicked()
{
    QString fileName =
        QFileDialog::getOpenFileName(
                this,
                tr("Open File"),
                "C:/TEST",
                tr("videoss (*.mp4 *.mov *.avi *webm)"));
    if (!fileName.isEmpty()) {
        ui->fromLineEdit->setText(fileName);
    }
}

// ffplay with input video
void Dialog::on_playInputButton_clicked()
{
    QString program = "C:/FFmpeg/bin/ffplay";
    QStringList arguments;
    QString input = ui->fromLineEdit->text();
    arguments << input;
    mInputPlayProcess->start(program, arguments);
}

// ffplay with output video
void Dialog::on_playOutputButton_clicked()
{
    QString program = "C:/FFmpeg/bin/ffplay";
    QStringList arguments;
    QString output = ui->toLineEdit->text();
    arguments << output;
    mInputPlayProcess->start(program, arguments);
}

// Make a new html file using video tag
// after getting the mimetype from the video file.
// The html file name will be put into url.
void Dialog::on_playOnBrowserButton_clicked()
{
    QString videoFilePath = ui->urlEdit->text();
    QString htmlFilePath = "C:/TEST/t.html";

    QFile file(htmlFilePath);
    if (!file.open(QIODevice::WriteOnly | QIODevice::Text)) {
        return;
    }

    QString mimetype = mimeReturn(videoFilePath);
    QTextStream stream(&file);

    stream << "<html>"<< "\n";
    stream << "<video width=\"480\" height=\"270\" controls autoplay>"<< "\n";
    stream << "<source src="
           << "\"" << videoFilePath << "\" " << "type=\""
           << mimetype << "\"> \n";
    stream << "</video>"<< "\n";
    stream << "</html>"<< "\n";

    QString htmlUrl = "file:///" + htmlFilePath;

    mPlayer = new Player(htmlUrl, this);
    mPlayer->setWindowTitle("WebKit HTML5 Video Player");
    mPlayer->show();
}

// Browse button for HTML5 clicked.
// Media file name will be put into the lineEdit
void Dialog::on_webBrowserButton_clicked()
{
    QString fileName =
        QFileDialog::getOpenFileName(
                this,
                tr("Open File"),
                "C:/TEST",
                tr("videoss (*.mp4 *.mov *.avi *webm)"));
    if (!fileName.isEmpty()) {
        ui->urlEdit->setText(fileName);
    }
}

// Returning a mimetype for a given QFile
QString mimeReturn(const QFile& file)
{
    QMimeDatabase mimeDatabase;
    QMimeType mimeType;

    mimeType = mimeDatabase.mimeTypeForFile(QFileInfo(file));

    // mp4 mpg4
    if(mimeType.inherits("video/mp4"))
        return "video/mp4";

    // mpeg mpg mpe
    else if(mimeType.inherits("video/mpeg"))
        return "video/mpeg";

    // ogv
    else if(mimeType.inherits("video/ogg"))
        return "video/ogg";

    // qt, mov
    else if(mimeType.inherits("video/quicktime"))
        return "video/quicktime";

    // avi
    else if(mimeType.inherits("video/x-msvideo"))
        return "video/x-msvideo";

    // flv
    else if (mimeType.inherits("video/x-flv"))
        return "video/x-flv";

    // webm
    else if (mimeType.inherits("video/webm"))
        return "video/webm";

    // text
    else if (mimeType.inherits("text/plain"))
        return "text";

    else
        return "";
}
