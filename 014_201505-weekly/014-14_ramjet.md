# ramjet
- 페이지링크: [ramjet](https://github.com/Rich-Harris/ramjet)

파워 github contributor인 개발자의 Ramjet.js 프로젝트입니다.

자바스크립트를 이용하여 HTML 요소들을 쉽게 컨트롤 할 수 있도록 만들었습니다.

npm 으로 설치하시거나, ramjet.js를 다운 받으신 후 아래와 같이 코드를 입력해 보시면,
강렬한 빨강의 a와 파랑의 b가 눈이 아프긴 하지만, ramjet.transform ( a, b )의 의미가 어떤 것인지 바로 감이 오실겁니다.

```html
<div id='a' style='background-color: red; font-size: 4em; padding: 1em;'>a</div>
<div id='b' style='background-color: blue; font-size: 4em; padding: 1em;'>b</div>

<script src='ramjet.js'></script>
<script>
	// to repeat, run this from the console!
	ramjet.transform( a, b );
</script>
```

ramjet.transform( a, b )는 a에서 b로 변할 수 있음을 보여주고요, (a, b[,options])를 통해 조정이 가능합니다. (duration, easing 등)

이동을 좀더 자연스럽게 이용하시려면, 아래와 같이 easing function을 사용하시면 됩니다. ramjet이 지원되는 브라우저에서는 모바일에서도 자연스럽게 동작하지만,
SVG요소가 포함된 녀석들을 transform 하실때는 CSS상에서 동작하는 것이 아니라 약간 끊길수도 있습니다.

Ramjet 프로젝트 자체가 iOS의 zoom effect에서 영감을 얻어 만들어졌기 때문에 아래와 같은 효과도 충분히 만들수 있다고 하네요.

![이미지](https://cloud.githubusercontent.com/assets/1162160/7281378/4f949858-e8f7-11e4-8acf-9a1d90049a92.gif)

IE에서 테스트 하실 경우 9 이상에서 동작되니 참고하시면 될 것 같습니다.

더 많은 정보는 ramjet.js 홈페이지에서 확인 가능합니다. :)
[ramjet.js](http://www.rich-harris.co.uk/ramjet/ramjet.js)
