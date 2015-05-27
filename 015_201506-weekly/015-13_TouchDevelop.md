
![015-13_touchDev.png](https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/015-13_touchDev.png)

# [TouchDevelop](https://github.com/Microsoft/TouchDevelop)

TouchDevelop는 Touch에 친화적이고 cross-platform이고, 모바일에서도 개발이 가능한
프로그램이라고 설명하고 있다. 실제 모바일에서 아래 link들을 들어갔을때 PC 브라우져와도
동일한 화면을 확인 할 수 있다.

`touchdevelop.com`:
* **stable:** https://www.touchdevelop.com/app/
* **beta:** https://www.touchdevelop.com/app/beta
* **latest:** https://www.touchdevelop.com/app/latest

사실 실제 tutorials 를 따라서 해본소감은 아이들 교육용이나 코딩을 처음 하는 사람들을
위한 교육용 프로그램처럼 보인다. 이 글을 쓰기 위해서 이것저것 해보고 있으니 도움을 주던
Jump(English Name)의 말에 따르면 MIT에서 만든 [Scratch](http://ko.wikipedia.org/wiki/%EC%8A%A4%ED%81%AC%EB%9E%98%EC%B9%98)와 비슷해보인다고 한다.
그래서 이것저것 들어가서 확인해보고자 했으나.. 회사에서는 막혀있고...모바일은 flash player의 압박에

그냥 Google에서 이미지로 확인해보니 정말 많이 비슷하다. 화면 구성이나 기능을 하나씩 추가하는
코딩 부분도 그렇고.. 많이 유사하다.

하지만 TouchDevelop이 더 괜찮은 점은 뭘까? 늦게 나온만큼 Scratch보다 더 나은 점이 있어야되지 않을까?

첫번째는 모바일 환경에서도 별다른 설치 없이 바로 들어가서 사용할 수 있다는 장점을 들 수 있다.

두번째는 한글이 지원이 된다는 점이다. 이해하기 쉬워서 감사합니다.

세번째는 동영상등으로 설명을 단계별로 만들어 놓고, Step By Step으로 개발을 진행하기 때문에 쉽게
따라할 수 있다는 점이다.

그러나 동영상등에서는 한국인이 음성녹음을 하여서 좋은 점도 있지만,
한글은 번역기 수준으로 올려 놓은 것도 종종 볼 수 있었다.
그래서 인지 아래와 같이 contribute 외에 translate도 지원 요청을 하고 있다.


There are many ways to [contribute](https://github.com/Microsoft/TouchDevelop/blob/master/CONTRIBUTING.md) to TouchDevelop.

* [submit bugs](https://github.com/Microsoft/TouchDevelop/issues) and help us verify fixes as they are checked in.
* review the [source code changes](https://github.com/Microsoft/TouchDevelop/pulls)
* [contribute bug fixes or features](https://github.com/Microsoft/TouchDevelop/blob/master/CONTRIBUTING.md).

If you're not a developer but still would like to help, we've got more tasks for you!

* [help translate the user inferface](https://touchdeveloptranslator.azurewebsites.net): do you use TouchDevelop and speak a foreign language? You can help!

## 설치 해볼까요?

In order to build TouchDevelop, ensure that you have [Git](http://git-scm.com/downloads) and [Node.js](http://nodejs.org/) installed.

 Git과 Node는 깔고 있어야한단다. 난 다 깔려있지롱! 하고 쉽게 생각했으나..산너머 산이었다.
설명이 쉽게 되어 있어서 따라해보기로 했다.

먼저 아래 명령으로 Clone을 한다.

````
git clone https://github.com/Microsoft/TouchDevelop.git
````

해당 directory로 들어간다.

````
cd TouchDevelop
````

npm을 이용해서 dependency들을 install한다.
여기서 부터 막히더라..

jake는 빌드를 위해서 설치하다.

tsd는 TypeScript install하기 위한 manager라고 한다.
혹시 TypeScript가 궁금하시다면 아래 링크를 확인해보시길 바랍니다.
* http://www.iamday.net/apps/article/talk/1758/view.iamday
* http://www.typescriptlang.org/

여기서 부터 문제가 발생한다.
tsd를 reinstall 하는 순간 proxy 문제로 더 이상 진행이 되지 않는다.
그래서 한참을 찾았다..

````
npm install jake -g
npm install tsd@next -g
tsd reinstall
npm install
````

프로젝트 내에 보면 .tsdrc라는 파일이 있다. 해당 파일에

````
"proxy" :"http://ip:port/",
"https-proxy" :"http://ip:port/",
"strict-ssl": false
````

위와 같은 설정을 추가 했더니 잘된다.

마지막으로 남아있는 project dependency install...

아 또 안된다.. 뭐지???

여기서 포기하고 다른 방법이 있으니 아래 방법으로 해보자

### Quick windows setup

Chocolatey... 이건 또 뭐지..하며 또 아래 링크들 들어가봤더니. package manager..

* install [Chocolatey](https://chocolatey.org/)
* install nodejs, Visual Studio Code
````
choco install -y nodejs git visualstudiocode arduino python2 pip
````

이건 쉽게 쉽게 proxy는 window환경변수 잡아준걸로 알아서 타고...근데..이건 뭐지 급 arduino를 설치한다.

다시 오류..설명에 (+ extras to handle the Arduino compilation scenarios) 이러한 문구가 있다.

Arduino설치 부분에서 문제가 있더라도 크게 문제가 되지는 않는 것 같다.


## 이제 실행이다.

이것도 여러가지 방법이 있는데, jake local로 실행시키니 잘된다.
tutorial들에 대해서는 cloud 서버에서 받아서 로컬로 오는 것으로 보이며,
실행을 시키면 개발자 코드가 부여되어서 port와 함께 개발자 코드도 함께 붙여줘야 TouchDevelop을
LOCAL에서 확인할 수 있다.

## LICENSE

The MIT License (MIT)

Copyright (c) 2015 Microsoft

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
