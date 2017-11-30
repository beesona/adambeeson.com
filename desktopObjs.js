var desktopObjs = [
    {
        id: 'icoTrash',
        name: 'Trash',
        src: 'icoTrash.png',
        type: 'folder',
        level: 'system',
        x: 50,
        y: 50,
        width: 500,
        height: 300,
        contents: [],
    },
    {
        id: 'icoDocResume',
        name: 'Resume READ-ONLY',
        src: 'icoDoc.png',
        type: 'doc',
        level: 'system',
        x: 50,
        y: 50,
        width: 700,
        height: 900,
        contents: ReturnResume(),
    },
    {
        id: 'icoDocBackground',
        name: 'Adams Background',
        src: 'icoDoc.png',
        type: 'doc',
        level: 'system',
        x: 50,
        y: 50,
        width: 600,
        height: 800,
        contents: ReturnBackground(),
    },
    {
        id: 'icoImgSanFran',
        name: 'San_Francisco',
        src: 'icoPic.png',
        type: 'doc',
        level: 'system',
        x: 50,
        y: 50,
        width: 640,
        height: 480,
        contents: ReturnSanFranImage(),
    },
    {
        id: 'icoWolf',
        name: 'Wolfenstein 3D',
        src: 'icoDoc.png',
        type: 'doc',
        level: 'system',
        x: 50,
        y: 50,
        width: 950,
        height: 900,
        contents: ReturnWolf(),
    },
    {
        id: 'icoBar',
        name: '2d Demo',
        src: 'icoDoc.png',
        type: 'doc',
        level: 'system',
        x: 50,
        y: 50,
        width: 1000,
        height: 680,
        contents: ReturnBar(),
    }    
];
