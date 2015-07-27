# incremental-dom

- 페이지 링크: https://github.com/google/incremental-dom

최근 React 가 대세인게 기분 나빴을까요? 그랬을 수도 있지만,

가장 많이 쓰이는건 아직도 Angular 같기는 한데, 이 바닥은 워낙 바쁘게 움직이니까 단정하기는 힘듭니다.

React가 몇가지 Killer 아키텍쳐를 개발자들에게 있는데 그 중에 Virtual DOM 이라는 녀석이 있습니다.

[React Virtual DOM](https://facebook.github.io/react/docs/glossary.html)

지금 소개해 드리는 것은 Incremental-DOM 은 Virtual DOM을 더 좋게 보완하면서

Angular처럼 Template을 쓸 수 있도록 해 주는 것을 목표로(예, 아직 In-Progress) 하고 있습니다.

[Incremental-DOM 소개](https://medium.com/google-developers/introducing-incremental-dom-e98f79ce2c5f)

위의 내용을 요약하면 두가지 측면에서 Virtual DOM보다 Incremental-DOM 이 좋다는 것인데,

첫번째는 메모리 사용량을 줄여준다는 것입니다. DOM의 변화가 없을 때는 새로운 Virtual DOM 전체를 re-rendering 하는 것을 막아주고
변화가 있을때만 메모리를 먹게 했다고 합니다.

두번째는 [mustache.js](https://github.com/janl/mustache.js/) 같은 템플릿 기반 js 를 손쉽게 사용할 수 있다는 것입니다.

전체 내용을 다 읽고 보니 Angular2.0 이 하고 싶은 이야기가 여기 있다는 생각도 듭니다.

어쨌든 개발자에게 엄청난 영향을 주고 있는 React 와 Angular 가 결국 바라보는 지향점이 같아지지 않을까 합니다.
(물론 아닐 수도 있지만요. 그리고 Angular 와 상관 없을 수도 있는 녀석이지만요.)
