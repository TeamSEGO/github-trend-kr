# React.js Deep Dive!
## 1화 (초간단 ReactJs application 만들어 보기)


1. 리스팅

  일단 TeamSEGO listing을 하는 페이지를 간단하게 만들어 볼까요?


  ### 변수 정의
  아래와 같이 TeamSEGO 를 변수로 건의합니다.
  ```
   TeamSEGO

   var segoMember = [{name:"keen",inChargeOf :"gag", generation:"old"},{name:"steve", inChargeOf : "study",generation:"old"},{name:"jump",inChargeOf :"zzal", generation:"young"},{name:"gray",inChargeOf :"security", generation:"young"}];
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
  주의 할 점! 처음에 dummy 로 클래스 명을 찍었더니 Type ERROR, exception 이 뜨는군요. camelcase 로 가나 봅니다. 처음 뜬 에러는 caught Error: Minified exception occurred;  이었는데 Dummy로 해결한 뒤에 다시 그 에러를 보려고 들어가니 Type ERROR로 뜨는 걸로 봐서는 JSX변환을 메모리 영역에 올리는 일들을 하는 거 같습니다.(오호!)

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
  ![이미지 01](img/special-deep-dive-reactjs-01-001.png)

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
  JSX 변환에 대해서는 차차 2화에서 더 다루도록 하겠습니다.

  ### 그냥 뿌려보기
  일단 segoMember를 뿌려봅시다. 그 이후에 감이 올 듯합니다.
  ```
  teamSego.js

  var SegoDiv = React.createClass({
    render: function() {
      return (
          <div>
           {this.props.member}
          </div>
      );
    }
  });
  React.render(<SegoDiv member={segoMember}/>, document.body);
  ```

  무척이나 심플한 소스입니다. 설명을 드리자면 SegoDiv라는 ReactClass를 만드는데
  ``` <SegoDiv member={segoMember}/> ```
  라고 해 놓고 reder 메쏘드를 통해 실행이 되면
  SegoDiv 클래스의 props 공간에 member 라는 변수로 할당이 되는구나.
  라고 이해하시면 됩니다.
  props는 나중에 event를 다룰 때 state와 그 사용법을 잘 이해하셔서 사용하셔야 합니다.

  그리고 이 결과를 DOM으로 확인해 보면 크롬에서는 다음과 같이 만들어 집니다.

  ```
  <div data-reactid=".0">
    <span data-reactid=".0.0:$name:0">keen</span>
    <span data-reactid=".0.0:$inChargeOf:0">gag</span>
    <span data-reactid=".0.0:$generation:0">old</span>
    <span data-reactid=".0.1:$name:0">steve</span>
    <span data-reactid=".0.1:$inChargeOf:0">study</span>
    <span data-reactid=".0.1:$generation:0">old</span>
    <span data-reactid=".0.2:$name:0">jump</span>
    <span data-reactid=".0.2:$inChargeOf:0">zzal</span>
    <span data-reactid=".0.2:$generation:0">young</span>
    <span data-reactid=".0.3:$name:0">gray</span>
    <span data-reactid=".0.3:$inChargeOf:0">security</span>
    <span data-reactid=".0.3:$generation:0">young</span>
  </div>
  ```

  데이타를  어떻게 찍어낼지 지정해 주지 않고 던져도 대강 찍어낼 정도로 똑똑한데, 제가 원하는 결과는 아니네요.

  Iteration을 돌면서 사용자 별로 구분을 짓는 방법은 없을까요?

  물론 있습니다. 코드를 약간 바꿔봅시다.( 작성중 )

  '''
  '''
