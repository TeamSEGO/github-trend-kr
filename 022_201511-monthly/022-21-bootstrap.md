# bootstrap

- 페이지 링크: https://github.com/twbs/bootstrap

깃헙 트렌드 All time No1 트렌드는 어디일까요? 네 그렇습니다! bootstrap 이죠..

그런데 왜 이번 달에 이렇게 이슈가 다시 되었을까요?

아마도 [bootstrap4](http://blog.getbootstrap.com/2015/08/19/bootstrap-4-alpha/) 때문일 거라 감히 추측을 해 봅니다.

Major 버전이 업데이트 되는 것에 대해서는 늘 조심스러운데요 한번 will be changed log? 를 확인해 볼까요?

* Moved from Less to Sass.
  - 일단 css 컴파일러가 less에서 sass 로 바뀌었네요. 컴파일 속도에서 차이가 난다고 합니다.
* Improved grid system.
  - 그리드가 모바일에 맞춰 향상이 된다고 하네요. (윽, 또 바뀌는 건가? 2->3으로 바뀔 때 가장 번거로운 부분이었던 거 같아요 . T.T )
* Opt-in flexbox support is here.
  - flexbox를 이제 지원하는데 지원 여부는 yes or no를 하나 바꾸고 재컴파일만 하면 빌드가 될 수준으로 만든다고 하네요.
  - [flexbox란?](http://ko.learnlayout.com/flexbox.html) 레이아웃 정의를 좀 더 손 쉽게 할 수 있는 표준으로 최근 활발하게 업데이트가 되고 있다고 합니다! CSS 만세!
* Dropped wells, thumbnails, and panels for cards.
  -  네 해당하는 컴포넌트들이 없어질 거라고 하네요.
* Consolidated all our HTML resets into a new module, Reboot.
  - [Normalize.css](http://hmmim.tistory.com/26) 같은 라이브러리를 쓰면, 각 브라우저들마다 다른 css의  default값들을 똑같이 맞춰 줍니다.
    이게 중요한 것은 아무래도 모던 웹 브라우저들이 혼재하는 과정에 페이지가 똑같아 보이게 하기 위해 사용하는 걸 것이구요.
    아까 얘기한 SASS같은 모듈로 변환을 하는 과정들이 여기에 포함 되겠네요.
* Brand new customization options.
  - 부트스트랩을 커스터마이징하는데 사용되는 옵션들을 SASS기준으로 바꾼다! 인거 같네요
* Dropped IE8 support and moved to rem and em units.
  - 안녕 IE8!
* Rewrote all our JavaScript plugins.
  - ES6로 만들어서 babel 같은 녀석으로 컴파일한다는 거 같습니다. 이게 큰 변화인게 앞으로 만들게 되는 모든 플러그인 모듈도 죄다 ES6로 변경되어서 바뀐다는 이야기로 들리구요.
  개발자들은 당연히 이제 ES6로 이동을 해야할 거 같습니다.
* Improved auto-placement of tooltips and popovers
 - tooltips 랑 popovers같은 모듈의 위치 선정을 위해 [Tether](http://github.hubspot.com/tether/) 를 사용했다고 합니다.
* Improved documentation.
 - 문서가 bootstrap 처럼 잘 되어 있는 곳은 보기 힘들지만 더 좋아지겠다고 합니다. wow!
* And tons more! Custom form controls, margin and padding classes, new utility classes, and more have also been included.
 - 뭐가 더 많다고 하네요.


 크게 최근에 프론트엔드쪽의 큰 변화를 주도한 ES6라던지 SASS등을 쓰겠다는 피드백들을 잘 수용한 듯 합니다.

 이렇게 커지고 주목 받는 오픈 소스가 이렇게 잘 대처하니, 사람들이 많이 쓰게 되는 거 같습니다.

 그리고 IE8사요나라~
