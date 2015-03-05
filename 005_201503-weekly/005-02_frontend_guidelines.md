# Frontend Guidelines

페이지 링크: https://github.com/bendc/frontend-guidelines

이번에 소개드릴 녀석은, md파일 하나로만 작성된 심플한 frontend 가이드라인 입니다.


### HTML

 * "제대로된" semantic web을 지향합시다.
```html
 <div class='header'> or <div class="footer"> 이런거 말고요.
 <header> / <footer> / <nav> / <article> / <aside> 이런 태그도 있고.
```

 * brevity
```html
 <div class='header'> or <div class="footer"> 이런거 말고요.
 <header> / <footer> / <nav> / <article> / <aside> 이런 태그도 있고.
```

 * 웹 접근성 고려. alt 속성에 
 * Language와 character endcoding 설정은 옵션이지만, 왠만하면 선언을 합시다.
```html
 <html lang=ko>
 	<meta charset=utf-8>
 </html>
```

 * 성능을 고려해서, script 는 본문 아래에 적는 것을 추천!

### CSS

 * semicolon으로 꼭 끝낼 것.
 * 기본적인 box model을 왠만하면 손대지 않을 것
 * 
```html
<link rel="stylesheet" href="awesomplete.css" />
<script src="awesomplete.js" async></script>
```

 * position
```css
display: block;
display: flex;
position: relative;
position: sticky;
position: absolute;
position: fixed;
```

 * 색상작성은 16진수 코드 형태, 투명도 조절이 필요할 경우는 rgba를 이용!
 * style 오버라이딩을 피하고, !important 사용을 지양합시다.
 * vender-prefix 사용시, 다른 일반속성 보다 앞에 쓰는 것이 좋습니다.
 * ```css
div {
  -webkit-transform: scale(2);
  transform: scale(2);
  transition: 1s;
}
```

 * 크기 지정 시, 단위 없이 사용하거나, em보다는 rem을, millisecond 보다는 second를 이용함이 바람직하다.


### JavaScript

 * bind() 사용 보다는 더 자연스러운 방법으로 만들어 봅시다.
```javascript
// bad
const person = {
  first: "John",
  last: "Doe",
  greet() {
    const full = function() {
      return `${this.first} ${this.last}`;
    }.bind(this);
    return `Hello ${full()}`;
  }
}

// good
const person = {
  first: "John",
  last: "Doe",
  greet() {
    const full = () => `${this.first} ${this.last}`;
    return `Hello ${full()}`;
  }
}
```