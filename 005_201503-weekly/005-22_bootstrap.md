## Bootstrap

![img_1](https://camo.githubusercontent.com/3e0aa93ee06f55b9d19d2209bd12bec39cc40cec/68747470733a2f2f73617563656c6162732e636f6d2f62726f777365722d6d61747269782f626f6f7473747261702e737667)
- Bootstrap은 빠르고 쉽게 웹 개발을 하기위한 세련되고 직관적인 강력한 Front-end 프레임워크입니다. [Mark Otto](https://twitter.com/mdo)와 [Jacob Thornton](https://twitter.com/fat)가 만들었고 [core team](https://github.com/orgs/twbs/people)과 지역 사회의 참여로 유지보수 하고 있습니다. 

- 시작하려면 http://getbootstrap.com/ 여기로 체크아웃 하세요. 

- Bootstrap은 반응형 웹과 모바일 제작을 위한 HTML, CSS, 자바스크립트 프레임워크 입니다.  
- [Bootstrap 바로가기](http://getbootstrap.com)

- 참고로 부트스트랩2 에서는 모바일 친화적인 스타일을 프레임워크의 중요한 부분으로 추가했고 부트스트랩3 에서는 시작부터 모바일 친화적으로 다시 만들었답니다. 모바일은 부가적인 부분이 아닌 핵심적인 부분으로 만들어졌습니다. 이제 부트스트랩은 모바일 우선입니다. 모바일 우선 스타일은 전 독립된 파일들이 아닌 전 영역을 걸쳐 확인할 수 있습니다


------------------------------
#### 빠른 시작

4가지의 시작 옵션이 가능합니다.

- [최신버전 다운로드 하기](https://github.com/twbs/bootstrap/archive/v3.3.2.zip)
- 저장소 클론하기: `git clone https://github.com/twbs/bootstrap.git` 

- [Bower](http://bower.io/) 설치하기 `bower install bootstrap`

- [npm](https://www.npmjs.com/) 설치하기 `npm install bootstrap`
- [Meteor](https://www.meteor.com/) 설치하기`meteor add twbs:bootstrap`

더 자세한 사항은 [Getting started page](http://getbootstrap.com/getting-started/)에서 프레임워크 컨텐츠와 템플릿 및 예제 등을 제공하오니 확인하시길 바랍니다. 

#### 어떤것이 있나 

다운로드를 하시면 아래와 같은 파일 구조를 보실 수 있습니다. 


```
bootstrap/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap-theme.css
│   ├── bootstrap-theme.css.map
│   └── bootstrap-theme.min.css
├── js/
│   ├── bootstrap.js
│   └── bootstrap.min.js
└── fonts/
    ├── glyphicons-halflings-regular.eot
    ├── glyphicons-halflings-regular.svg
    ├── glyphicons-halflings-regular.ttf
    ├── glyphicons-halflings-regular.woff
    └── glyphicons-halflings-regular.woff2
```

- 컴파일 된 CSS와  JS( `bootstrap.*` ) 뿐 아니라 압축된 CSS와 JS(`bootstrap.min.*`)를 제공하며 CSS 소스맵(`bootstrap.*.map`)을 이용하여 특정브라우저에서 개발자 도구로 사용할 수 있습니다. Glyphicons글꼴이 포함되어 있어 옵션 테마로 이용할 수도 있습니다.  


#### 버그 및 기능 요청

버그나 기능요청이 있으시면 이슈의 가이드라인을 읽고 기존의 Closed된 이슈로 먼저 검색하신 뒤 해결되지 않은 아이디어나 문제가 있으면 새 Issue를 Open하십시오.  

