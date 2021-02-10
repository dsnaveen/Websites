#include <QtCore>
#include <QtXML>
#include <QDebug>

void retrievElements(QDomElement root, QString tag, QString att)
{
    QDomNodeList nodes = root.elementsByTagName(tag);

    qDebug() << "# nodes = " << nodes.count();
    for(int i = 0; i < nodes.count(); i++)
    {
        QDomNode elm = nodes.at(i);
        if(elm.isElement())
        {
            QDomElement e = elm.toElement();
            qDebug() << e.attribute(att);
        }
    }
}

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    // Create a document to write XML
    QDomDocument document;

    // Open a file for reading
    QFile file("C:/Test/myXLM.xml");
    if(!file.open(QIODevice::ReadOnly | QIODevice::Text))
    {
        qDebug() << "Failed to open the file for reading.";
        return -1;
    }
    else
    {
        // loading
        if(!document.setContent(&file))
        {
            qDebug() << "Failed to load the file for reading.";
            return -1;
        }
        file.close();
    }

    // Getting root element
    QDomElement root = document.firstChildElement();

    // retrievelements(QDomElement root, QString tag, QString att)
    retrievElements(root, "Dorm", "Name");

    qDebug() << "\nGoing deeper level - getting the 'Room'";
    QDomNodeList dorms = root.elementsByTagName("Dorm");
    // Looping through each dorm
    for(int i = 0; i < dorms.count(); i++)
    {
        QDomNode dormnode = dorms.at(i);
        if(dormnode.isElement())
        {
            QDomElement dorm = dormnode.toElement();
            qDebug() << "Rooms in " << dorm.attribute("Name");
            /*
             *-<Dorm Name="Dorm Building 0" ID="0">
             *   <Room Name="Room 0" ID="0"/>
             *   <Room Name="Room 1" ID="1"/>
             *   <Room Name="Room 2" ID="2"/>
             */
            retrievElements(dorm, "Room", "Name");
        }
    }

    qDebug() << "Reading finished";

    return a.exec();
}
