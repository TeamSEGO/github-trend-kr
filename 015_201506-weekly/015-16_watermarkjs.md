#watermark.js 

- 페이지 링크 - https://github.com/brianium/watermarkjs

브라우저에서 이미지에 워터마크를 찍기위한 라이브러리입니다.

##지원되는 브라우저

* IE10 (Windows 7)
* Chrome 42 (OS X 10.10.3)
* Firefox 38 (OS X 10.10.3)
* Safari 8.0.6 (OS X 10.10.3)
* Opera 29.0 (OS X 10.10.3)

##watermark.js vs watermark-polyfill.js

In order to use some of the ES6 features like promises, Babel provides a polyfill to enable functionality in current browsers. If you are using multiple Babel compiled projects and include
a single polyfill, then use `dist/watermark.js` or `dist/watermark.min.js`.

If you are unsure or know you are not using any other ES6 libraries, then you should use `dist/watermark-polyfill.js` or `dist/watermark-polyfill.min.js`. This file includes the polyfill
and is ready to be dropped in.

##설치

watermark.js는 npm이나 bower를 사용해서 설치할 수 있습니다.:

```
# install via npm
$ npm install watermarkjs

# install via bower
$ bower install watermarkjs
```

##빌드

Before building or testing, install all the deps:

```
npm i
```

빌드시키는 명령어입니다.:

```
npm run build
```

Or to kick off the file watcher and build as you make changes, run the start task:

```
$ npm start
```

##Testing

There is an npm script for that too!:

```
$ npm test
```

This library uses the [Jest](https://facebook.github.io/jest/) testing framework. Due to some current
issues with Jest, Node 0.10.x is required to run the tests.

##Examples

서버를 작동시키면 예제와 문서를 볼 수 있습니다.

```
$ npm run server
```

The examples demonstrate using watermark images and text, as well as a demonstration
of uploading a watermarked image to Amazon S3. It is the same content hosted at
[http://brianium.github.io/watermarkjs/](http://brianium.github.io/watermarkjs/).

##Motivation

* Not every server has image libraries (shared hosting anyone?)
* Not every server has reliable concurrency libs for efficient uploading (shared hosting anyone?)
* JavaScript is fun and cool - more so with ES6

Clearly watermarking on the client has some limitations when watermarking urls and on-page elements. The curious can find urls for non-watermarked images, but it is likely that most average users won't go down this path - keeping this soft barrier useful. However!...

watermark.js has the ability to accept file inputs as a source for watermarking. This makes it easy to preview, watermark, and upload without the non-watermarked image ever becoming public. Check out the [uploading](http://brianium.github.io/watermarkjs/uploading.html) demo to see this in action.

This tool certainly shines in admin or CMS environments where you want to generate watermarks and upload them asynchronously where it would not be possible or preferable on the server. One less thing the server has to do can be a good thing :)

