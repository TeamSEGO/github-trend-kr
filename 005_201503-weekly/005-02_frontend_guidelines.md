# Frontend Guidelines

페이지 링크: https://github.com/bendc/frontend-guidelines

이번에 소개드릴 녀석은, md파일 하나로만 작성된 심플한 frontend 가이드라인 입니다.

너무 기본적이어서 그냥 지나갔던 내용들도 상기시킬 수 있고, 별 생각없이 습관적으로 짰던 코드들이 생각날 만한 내용입니다.

이 가이드를 통해 가독성도 좋고, 성능도 좋은 코드를 짤 수 있도록 습관을 바꾸어 보아요.

- - -

### HTML
 * "제대로된" semantic web을 지향합시다.

```html
 <div class='header'> or <div class="footer"> 이런거 말고요.
 <header> / <footer> / <nav> / <article> / <aside> 이런 태그도 있고.
```

 * XHTML에서의 버릇을 버립시다.

```html
<!-- bad -->
<!doctype html>
<html lang=en>
  <head>
    <meta http-equiv=Content-Type content="text/html; charset=utf-8" />
    <title>Contact</title>
    <link rel=stylesheet href=style.css type=text/css />
  </head>
  <body>
    <h1>Contact me</h1>
    <label>
      Email address:
      <input type=email placeholder=you@email.com required=required />
    </label>
    <script src=main.js type=text/javascript></script>
  </body>
</html>

<!-- good -->
<!doctype html>
<html lang=en>
  <meta charset=utf-8>
  <title>Contact</title>
  <link rel=stylesheet href=style.css>

  <h1>Contact me</h1>
  <label>
    Email address:
    <input type=email placeholder=you@email.com required>
  </label>
  <script src=main.js></script>
</html>
```

 * 웹 접근성 고려합시다. (alt 속성 제대로 쓰기 등)
 * Language와 character endcoding 설정은 옵션이지만, 왠만하면 선언을 합시다.

```html
 <html lang=ko>
 	<meta charset=utf-8>
 </html>
```

 * 성능을 고려해서, script 는 본문 아래에 적는 것을 추천!

- - -

### CSS

 * semicolon으로 꼭 끝냅시다.
 * 기본적인 box model을 왠만하면 손대지 않도록 합니다.
 * selector의 overloading은 필요한 만큼만 합시다.

```css
/* bad */
img[src$=svg], ul > li:first-child {
  opacity: 0;
}

/* good */
[src$=svg], ul > :first-child {
  opacity: 0;
}
```

 * 색상작성은 16진수 코드 형태, 투명도 조절이 필요할 경우는 rgba를 이용!
 * style 오버라이딩을 피하고, !important 사용을 지양합시다.
 * vender-prefix 사용시, 다른 일반속성 보다 앞에 쓰는 것이 좋습니다.

```css
div {
  -webkit-transform: scale(2);
  transform: scale(2);
  transition: 1s;
}
```

 * 크기 지정 시, 단위 없이 사용하거나, em보다는 rem을, millisecond 보다는 second를 이용함이 바람직하다.

### JavaScript

 * native method가 있으면 그것을 우선적으로 사용합시다.
 * loop를 사용하는 대신에 array.prototype 메소드를 이용하거나, 그게 불가능 하다면 recursion을 사용하세요.

```javascript
// bad
const createDivs = howMany => {
  while (howMany--) {
    document.body.insertAdjacentHTML("beforeend", "<div></div>");
  }
};
createDivs(5);

// bad
const createDivs = howMany =>
  [...Array(howMany)].forEach(() =>
    document.body.insertAdjacentHTML("beforeend", "<div></div>")
  );
createDivs(5);

// good
const createDivs = howMany => {
  if (!howMany) return;
  document.body.insertAdjacentHTML("beforeend", "<div></div>");
  return createDivs(howMany - 1);
};
createDivs(5);
```

 * apply(), bind() 사용 보다는 더 자연스러운 방법으로 만들어 봅시다.
 * function 작성 시에는, 작은 단위로 쉽게 재사용 할 수 있도록 많은 수의 함수를 만들어도 좋습니다.
 * 여러번 nested 된 function 호출을 지양합시다.
 * 변수는 const > var > let 의 선호도로 사용하자고 합니다.
 * for... in 의 사용을 지양합시다.
 * Map을 자주 사용합시다.
 * 코드 작성 시 currying이나 trick 같은거 쓰는 것 보다는, 남들이 읽기 좋은 코드를 작성합시다.

```javascript
// bad
const n = ~~3.14;

// good
const n = Math.floor(3.14);
```

 * 코드 작성 시, dependency는 최소화 해야 합니다.
