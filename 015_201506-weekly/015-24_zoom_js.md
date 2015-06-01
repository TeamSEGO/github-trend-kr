# ZOOM.JS
 - 페이지 링크: https://github.com/fat/zoom.js

지난 호에 이어 또 다시 등장한 ZOOM.JS 입니다.  
zoom.js 는 이미지를 확대해서 볼 수 있는 jQuery plugin이라고 하네요.

---지난 주---  
zoom.js 는 이미지를 확대해서 볼 수 있는 jQuery plugin인데요. 

```html
<link href="css/zoom.css" rel="stylesheet">
<script src="js/zoom.js"></script>
```

프로젝트를 다운 받아 위와 같이 css와 js 파일을 선언 후

```html
<img src="img/blog_post_featured.png" data-action="zoom">
```

이런 식으로 원하는 이미지에 ```data-action="zoom"``` 속성을 주시면 됩니다.

깃헙 트랜드에 적용해 테스트를 해보니 잘 동작했지만, 여백이 없을 경우에는 zooming이 되지 않습니다. 참고하시기 바랍니다.

어떻게 동작하는지 확인해보고 싶으신 분들은 아래 Demo에서 테스트 해보시기 바랍니다.

### [Demo](http://fat.github.io/zoom.js/)
 