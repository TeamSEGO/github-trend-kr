# React.js Deep Dive!

참조 링크 : http://facebook.github.io/react/

예전에 말씀드린데로 특집기획으로 React.js에 대해서 다뤄보겠습니다.

들어가기 전에 React에 대한 좋은 이해를 위한 글을 먼저 하나 소개하고자 합니다.

[REACTJS 둘러보기 ](http://taegon.kim/archives/5097)

링크를 읽어보기 귀찮으실 분들을 위해 요약을 하겠습니다.

```
  1. React 가 어떻게 나왔나?
    * facebook은 PHP 기반
    * PHP의 한계를 극복하기 위한 여러가지 작업시도
      1. C++로 다시 컴파일 하는 hiphop for PHP
      2. HHVM ( PHP 엔진 수정)
      3. HACK, XHP ( 새로운 언어 for PHP)
    * 이 중 주목할 내용은 XHP
  2. XHP -> ReactJS
    * 언어 상으로는 상관이 없음
    * DOM을 다루는 방법
    * PHP 내에서 DOM 작성에 따옴표등을 전부 제거하던 방법이 그대로 ReactJS에 반영됨
    * XHP의 문법을 브라우저로 옮기는 시도로 ReactJS 가 됨
  3. ReactJS
    * MVC 중 View에만 집중함.( AngularJs, Backbone 이 아니다. 우리는!!)
    * Isomorphic JavaScript 지원
      * 동형 자바스크립트.
      * 서버사이드와 클라이언트 사이드 모두 Javascript를 사용.
        * 서버에서도 HTML 코드를 만들어 냄(PHP)
        * 실제로 Node.js를 대부분 이용.
        * 폼에서 전달되는 데이터에 대해 같은 코드를 사용용해서  validation
        * Meteor 와 비슷.
  4.React Native
    * 모바일 앱을 React 로 만들 수 있음
```

와우 깔끔하게 정리가 되어 있습니다.

이런 일련의 내용들을 모르고 그냥 React를 시작해서 튜토리얼을 읽다보면 멘붕에 빠지기 쉽습니다.

처음엔 view라고 하더니, 정신이 없어서 JSX적응 할 때 쯤 되면 실행 시키는 코드는 전부 노드에서 시작되고, 갑자기 튀어나오는 Flux아키텍쳐... 등등.

앞으로 살펴볼 순서는 다음과 같습니다.

1. [초간단 ReactJs application 만들어 보기](#/deep-dive-reactJs-01)
2. JSX Transformation 분석
  * JSX 가 어떻게 작동하는지
  * 선택! 서버사이트 Transformation, 클라이언트 Transformation
  * 성능 이슈
3. Flux 아키텍처
4. Virtual DOM
5. 실전 React
6. React 하부 프로젝트
7. React Native
