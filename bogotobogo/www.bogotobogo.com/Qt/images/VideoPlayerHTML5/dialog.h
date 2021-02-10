// dialog.h

#ifndef DIALOG_H
#define DIALOG_H

#include <QDialog>
#include <QProcess>
#include <QFile>
#include <QTextEdit>
#include "player.h"

namespace Ui {
class Dialog;
}

class Dialog : public QDialog
{
    Q_OBJECT

public:
    explicit Dialog(QWidget *parent = 0);
    ~Dialog();

public slots:

public:

private slots:
     void on_startButton_clicked();
     void readyReadStandardOutput();
     void processStarted();
     void encodingFinished();
     void on_fileOpenButton_clicked();
     void on_playInputButton_clicked();
     void on_playOutputButton_clicked();
     void on_playOnBrowserButton_clicked();
     void on_webBrowserButton_clicked();

private:
    Ui::Dialog *ui;
    QProcess *mTranscodingProcess;
    QProcess *mInputPlayProcess;
    QProcess *mOutputPlayProcess;
    QString mOutputString;
    QString playerUrl;
    Player *mPlayer;
};

#endif // DIALOG_H
