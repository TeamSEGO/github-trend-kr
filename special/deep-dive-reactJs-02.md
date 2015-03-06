#React.js Deep Dive!
## 2화 (JSX Transformation 분석)


1. 리스팅

  일단 TeamSEGO listing을 하는 페이지를 간단하게 만들어 볼까요?


  ### 변수 정의
  아래와 같이 TeamSEGO 를 변수로 정의 합니다.
  ```
   TeamSEGO

   var segoMember = [{name:"keen",inChargeOf :"gag", generation:"old"},
   {name:"steve", inChargeOf : "study",generation:"old"},
   {name:"jump",inChargeOf :"zzal", generation:"young"},
   {name:"gray",inChargeOf :"security", generation:"young"}];
  ```

  ### HTML
  html 은 정말 간단하게 정의해 봅시다. 모든걸 Javascript에서 다 만든다! 라는 느낌으로! -> 장기적으로 노드와 연결해서 Isomorphic Javascript 를 구현해 볼지도 모르는 거니까요!
  ```
  HTML

  <html>
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.12.2/JSXTransformer.js"></script>
    </head>
    <body>
      <script  type="text/jsx" src="/scripts/teamSego.js"></script>
      <!-- 당연히 teamSego.js 를 만들겠죠? -->
    </body>
  </html>
  ```

  ### Dummy
  일단은 dummy 파일을 한번 찍어 볼까요? 그래도 처음 배워보는 리액트인데, 헬로월드 정도는 찍어줘야.( 작성자 대강 개발 연차가 나오는 발언인가요? )
  ```
  var Dummy = React.createClass({
      render: function() {
          return (
              <div>
               Hello Wordl! I'm keen of TeamSEGO
              </div>
          );
      }
  });
  React.render(<Dummy/>, document.body);
  ```
  주의 할 점! 처음에 dummy 로 클래스 명을 찍었더니 Type ERROR, exception 이 뜨는군요. camelcase 로 가나 봅니다. 처음 뜬 에러는 UncaughtException 이었는데 Dummy로 해결한 뒤에 다시 그 에러를 보려고 들어가니 TYpe ERROR로 뜨는 걸로 봐서는 JSX변환을 메모리 영역에 올리는 일들을 하는 거 같습니다.(오호!)

  ```Hello Wordl! I'm keen of TeamSEGO```

  훌륭하게 잘 찍히는 군요. (Word l 은 다분히 의도적입니다.)
  작은 따옴표(\') 를 집어 넣어도 잘 표시되는게 흥미롭네요.(당연한가요?)

  ### DOM의 변화
  요소 검사 혹은 브라우저 Inspector 로 내부를 들여다 보면 이렇게 변해져 있습니다.
  ```
  <body>
    <div data-reactid=".0">Hello Wordl! Im keen of TeamSEGO</div>
  </body>
  ```
  javascript 영역이 HTML로 변환되어 들어갔네요.

  흥미로운 이미지 하나 보고 들어가실까요?
  [!이미지 01](img/special-deep-dive-reactjs-01-001.png)

  1. 네트워크 탭을 확인해 보면 teamSEGO.js가 두번 호출됩니다.
  2. JSXTransformer가 initiator 가 되어서 Content 다운로드 시간 이후에 두번째 TeamSEGO.js 가 호출 되는 걸로 봐서는 js를 렌더링하는 시간(혹은 컴파일) 이후에 일련의 일들이 일어나게 됩니다.

  그리고 이걸 보내주는 쪽도 Transformer.js 의 아래쪽 에서 xhr .send 쪽이군요.

  ```
  Transformer.js

  function load(url, successCallback, errorCallback) {
  var xhr;
  xhr = window.ActiveXObject ? new window.ActiveXObject('Microsoft.XMLHTTP')
                             : new XMLHttpRequest();

  // async, however scripts will be executed in the order they are in the
  // DOM to mirror normal script loading.
  xhr.open('GET', url, true);
  if ('overrideMimeType' in xhr) {
    xhr.overrideMimeType('text/plain');
  }
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 0 || xhr.status === 200) {
        successCallback(xhr.responseText);
      } else {
        errorCallback();
        throw new Error("Could not load " + url);
      }
    }
  };
  return xhr.send(null);
}
  ```
  일단 더 들어가면 어려우니까 요까지 보시고. Dummy는 마무리 하겠습니다.
