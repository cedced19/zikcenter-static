# ZikCenter Static

A static software to play random music.

[![Build Status](https://travis-ci.org/cedced19/zikcenter-static.svg)](https://travis-ci.org/cedced19/zikcenter-static)

![Demo](https://raw.githubusercontent.com/cedced19/zikcenter-static/master/demo.png)


## Installation

__Required:__ Node.js, and git

```bash
$ git clone --depth=1 --branch=master https://github.com/cedced19/zikcenter-static
$ npm install
$ npm start
```

Host all the `/dist/` and the `/musics/` folders in Nginx, Apache or other http server.

It should be like this:
```
├── index.html
├── favicon.ico
├── musics
└─┬ vendor
  ├─┬ css
  │ └── styles.css
  └─┬ js
    └── scripts.js
```
