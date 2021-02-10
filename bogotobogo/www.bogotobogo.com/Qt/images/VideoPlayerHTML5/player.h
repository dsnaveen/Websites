#ifndef PLAYER_H
#define PLAYER_H

#include <QDialog>

namespace Ui {
class Player;
}

class Player : public QDialog
{
    Q_OBJECT

public:
    explicit Player(QString &str, QWidget *parent = 0);
    ~Player();

private slots:
    void on_replayButton_clicked();

private:
    Ui::Player *ui;
    QString url;
};

#endif // PLAYER_H
