# markdownify

 - 페이지 링크: [markdownify](https://github.com/tibastral/markdownify)

[Markdownify 데모](http://tibastral.github.io/markdownify)

데모를 살펴보시면 알겠지만, 마크다운 작성 내용을 에디터에 입력하고

preview로 미리보기 해보시면 예쁘게 나타나는 것을 확인하실 수 있습니다.

jQuery로 작성되어 있고요, html 문서 작성하시면서 jQuery와 css 파일을 import 하신 후에 쉽게 사용 가능합니다.

마크다운 에디터는 기본적으로 textarea 태그를 아래와 같이 사용하시면 되구요, script 역시 추가하시면 됩니다.

```html
<textarea class='markdown' id="markdown"></textarea>
```

```js
$('.markdown').markdownify();
```