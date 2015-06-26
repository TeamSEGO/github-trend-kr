# exercises

- 페이지 링크: https://github.com/kolodny/exercises

이번에 소개할 프로젝트는 javascript 코드 챌린지들과 인터뷰 질문들을 모아두었다고 하는데 방식이 흥미롭습니다.

예를 들어 javascript 커리에 대해서 작성하고 싶다고 할 때에

curry 라는 폴더를 만들고 test.js 와 package.json 을 아래와 같이 등록합니다.

test.js
```
var curry = require('./') // <- this is the file you make;

function add(a, b) {
  return a + b;
}

var curried = curry(add);
console.log(  curried(1)(2)  );
```

package.json
```
{
  "private": true,
  "scripts": {
    "test": "node ../node_modules/mocha/bin/mocha"
  }
}
```
보시다시피, curry 가 어떻게 실행될 것인지, 테스트 코드가 주어져 있고
curry 라는 함수는 만들어야 합니다.

답을 넣는 공간은 없다는게 더 재미있네요.

curry 함수에 대해서는
[dogfeet 블로그의 Partial Application in JavaScript](http://dogfeet.github.io/articles/2011/1317088260.html)
를 참조하시면 좋을 듯 합니다.

javascript 공부를 하는데에 재미는 있을거 같은 프로젝트 입니다~
