#-------------------------------------------------
#
# Project created by QtCreator 2013-10-03T22:30:49
#
#-------------------------------------------------

QT       += core gui
QT       += webkitwidgets

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = ffmpeg
TEMPLATE = app


SOURCES += main.cpp\
        dialog.cpp \
    player.cpp

HEADERS  += dialog.h \
    player.h

FORMS    += dialog.ui \
    player.ui
