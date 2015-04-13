 # virtual-dom

자바스크립트를 이용해 DOM 객체의 생성, 비교, 패치 작업을 할 수 있도록 한 라이브러리 입니다.

수동으로는 DOM의 변화에 대해 추적하기가 쉽지 않지만 이 라이브러리를 이용하면 좀 더 간편하게 수행할수 있는 장점이 있습니다.

예제 코드를 먼저 보시죠.
```javascript
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

// 1: Create a function that declares what the DOM should look like
function render(count)  {
  return h('div', {
    style: {
      textAlign: 'center',
      lineHeight: (100 + count) + 'px',
      border: '1px solid red',
      width: (100 + count) + 'px',
      height: (100 + count) + 'px'
    }
  }, [String(count)]);
}

// 2: Initialise the document
var count = 0;      // We need some app data. Here we just store a count.

var tree = render(count);               // We need an initial tree
var rootNode = createElement(tree);     // Create an initial root DOM node ...
document.body.appendChild(rootNode);    // ... and it should be in the document

// 3: Wire up the update logic
setInterval(function () {
  count++;

  var newTree = render(count);
  var patches = diff(tree, newTree);
  rootNode = patch(rootNode, patches);
  tree = newTree;
}, 1000);
```
 - 페이지 링크: [virtual-dom](https://github.com/Matt-Esch/virtual-dom)
