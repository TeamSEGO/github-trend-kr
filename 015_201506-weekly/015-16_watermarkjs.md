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

ES6을 사용하기 위해서, Babel은 현재 브라우저에서 동작할 수 있게 하는 pollyfill을 제공합니다.

프로젝트에 컴파일된 여러개의 Babel을 사용하고 하나의 polyfill을 사용한다면, `dist/watermark.js`나 `dist/watermark.min.js`를 사용하세요.

ES6라이브러리를 사용할수 없다면, `dist/watermark-polyfill.js`나 `dist/watermark-polyfill.min.js`를 사용할 수 있습니다. 
##설치

watermark.js는 npm이나 bower를 사용해서 설치할 수 있습니다.:

```
# install via npm
$ npm install watermarkjs

# install via bower
$ bower install watermarkjs
```

##빌드

설치
```
npm i
```

빌드
```
npm run build
```

##실행

실행

```
$ npm run server
```

git clone https://github.com/brianium/watermarkjs.git

깃 클론후 위의 빌드와 실행과정을 진행하면 로컬에서 아래와 같은 화면을 볼 수 있습니다.
깃헙에서 제공하는 샘플에서는 watermarkjs를 적용한 예제들을 볼 수 있습니다.
![image]https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/015-16.PNG
[http://brianium.github.io/watermarkjs/](http://brianium.github.io/watermarkjs/)
.

##Motivation

* 모든 서버는 이미지 라이브러리를 가지고 있지 않습니다.
* 모든 서버는 효율적인 업로드를 위한 믿을수 있는 실행 라이브러리를 가지고 있지 않습니다.
* 자바스크립트는 훌륭합니다. - ES6을 사용하면 더 그렇습니다.

watermart.js는 워터마크를 하기 위한 소스로써 파일의 입력을 받아들일 수 있습니다.  미리보기, 워터마크, 업로드를 쉽게 만들어 줍니다. 아래 데모페이지에서 확인해보세요.
 [uploading](http://brianium.github.io/watermarkjs/uploading.html) 

