# CSSgram

- 페이지 링크: https://github.com/una/CSSgram

una라고 하는 CSS Guru가 인스타그램의 이미지 필터를 CSS와 Saas로 구현하여 공개한 프로젝트입니다. 그녀의 설명을 일단 눈으로 보기 위해서 http://una.im/CSSgram/ 를 방문해 보시면 CSS의 위대함을 라이브로 확인하실 수 있습니다.(제가 CSS가 약해서 이런거 보면 눈물이..ㅠㅠ).

원작자는 이것을 두개의 방법을 통해 제공하고 있습니다.

##### CSS Class를 사용하는 방법
  * `<head>`태그에 `<link rel="stylesheet" href="https://cssgram-cssgram.netdna-ssl.com/cssgram.min.css">`를 해줍니다.
  * Css파일을 링크 걸어서 사용하는게 찝찝하다면, [링크](https://raw.githubusercontent.com/una/CSSgram/master/source/css/cssgram.min.css)를 통해 다운받아서 사용해도 무방합니다.

그리고 사용은 이렇게 하면 됩니다.
```
<!-- HTML -->
<figure class="aden">
  <img src="../img.png">
</figure>
```

##### Sass `@extend`를 사용하는 방법
* [링크](https://github.com/una/CSSgram/tree/master/source/scss)를 통해 scss묶음을 다운 받습니다.
* 받은 `scss/cssgram.scss`를 manifest file(ex, `main.scss`)에 선언합니다. : `@import 'vendor/cssgram'`

그리고 사용은 아래처럼 하면 됩니다.:

```
<!-- HTML -->
<figure class="viz--beautiful">
  <img src="../img.png">
</figure>
```

```
// Sass
.viz--beautiful {
  @extend %aden;
}
```

CSS라면 겁을 손을 절래절래 흔들며 공포심에 떠는 저도 쉽게 인스타그램 스타일의 필터를 CSS를 통해 손쉽게 사용할 수 있는 아주 좋은 프로젝트 입니다.