#include "player.h"
#include "ui_player.h"
#include <QDebug>

Player::Player(QString &s, QWidget *parent) :
    QDialog(parent),
    ui(new Ui::Player), url(s)
{
    ui->setupUi(this);
    qDebug() << "Player::Player() url=" << url;
    ui->playerEdit->setText(url);
    ui->webView->load(url);
}

Player::~Player()
{
    delete ui;
}

void Player::on_replayButton_clicked()
{
    url = ui->playerEdit->text();
    ui->webView->load(url);
}
