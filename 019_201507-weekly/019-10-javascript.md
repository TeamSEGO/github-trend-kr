# javascript

- 페이지 링크: https://github.com/airbnb/javascript

이번에 살펴볼 프로젝트는 Airbnb 의 javascript style guide입니다.

Javascript 의 스타일 가이드가 갑자기 왜 깃헙 트렌드에 올라왔을까 생각하시는 분들 많을 겁니다.

각 회사별로 개발 스타일 가이드들이 있을텐데요.

예) [구글의 스타일 가이드](http://google.github.io/styleguide/javascriptguide.xml)

이 프로젝트의 무엇보다 쿨한 부분은 ES6 기준으로 작성이 되어 있다는 것인데요. ES6를 이해하는데에도 도움이 될 거 같습니다.

Reference 에 대한 스타일 가이드를 한번 살펴 보겠습니다

일단 Reference 는 var 보다는 const를 쓰라고 하는군요. 이유는 선언하고 변경을 하지 않기 위함이라고 하네요
```
  // bad
  var a = 1;
  var b = 2;

  // good
  const a = 1;
  const b = 2;
```

하지만 어쩔 수 없이 값을 변경해야하는 상황이 생긴다면 let을 쓰라고 하는군요. 그 이유는 let 은 블럭 스코프 안에서 작송하기 때문이라는 군요
```
// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}
```

마지막으로 let 과 const 는 둘다 블럭 스코프 안에서만 작동한다고 합니다. 이 내용은 전역 변수 혼동으로부터 개발자를 자유롭게 해 주는 영역이겠네요
