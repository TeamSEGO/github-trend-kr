# awesomplete

페이지 링크: https://github.com/LeaVerou/awesomplete

Awesomplete은 매우 가볍고 dependency도 없는 자바스크립트 라이브러리 입니다.

단순히 **자동완성 기능**만 사용하실 경우, 추가적인 자바스크립트 코드가 필요 없다는 장점이 있습니다.

사용자는 추천할 수 있는 단어들을 html 태그 안에 입력해서 자동완성 값에 들어갈 내용을 적어서 조절할 수 있습니다.

HTML attribute와 JavaScript property를 이용하여 사용하시는 목적에 맞추어 customize가 가능합니다. 추가적으로 filter나 sort 같은 기능도 제공하는군요!

사용하기에 가볍고, 문서를 참조하면 customize하기도 어렵지 않아 좀 더 많은 개발자들이 이용하게 되지 않을까 하는 생각이 듭니다. : )

데모 사이트에 들어가시면 몇가지 기본적인 예제와 가이드를 볼 수 있습니다.

![이미지](../img/004-06.png)

 * [demo](http://leaverou.github.io/awesomplete/)

### 기본 사용법

head태그 내부에 아래와 같이 css와 js를 포함시켜주신 후,

```html
<link rel="stylesheet" href="awesomplete.css" />
<script src="awesomplete.js" async></script>
```

```html
<input class="awesomplete"
       data-list="Ada, Java, JavaScript, Brainfuck, LOLCODE, Node.js, Ruby on Rails" />
```

input 태그를 이용하여 자동완성 리스트에 들어갈 값을 입력하시면 됩니다.

여기서 input 태그의 'class="awesomplete"'으로 설정 해주셔야 제대로 작동합니다.

list에 값을 입력하는 방법은 위의 방법 외에도 취향껏 작성하셔서 적용하시면 됩니다.
