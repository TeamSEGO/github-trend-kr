# es6features

페이지 링크 : https://github.com/lukehoban/es6features

es6features 를 알기 위해서는 ECMAScript 에 대해서 알아야 하고, ECMAScript 를 설명하기 위해서는 ECMA에 대해서 설명할 필요가 있겠네요.

1. Ecma International

  세상에는 많은 표준기관이 존재합니다. ISO가 그 대표적이 예일텐데요. Ecma International 도 그 표준 기관중 하나입니다.
  정확히는 European Computer Manufacturers Association  의 줄임말이 Ecma이고 기관은 Geneva에 있습니다.
  (참조 :  http://en.wikipedia.org/wiki/Ecma_International)

  여기서 제정하고 다루었던 표준들을 살펴보면 다음과 같은 녀석들이 있습니다.
  * ECMA-119 – CD-ROM volume and filestructure (later known as ISO 9660)
  * ECMA-130 – CD-ROM "Yellow Book" format
  * ECMA-262 – ECMAScript Language Specification (often referred to as JavaScript)
  * ECMA-334 – C# Language Specification
  * ECMA-335 – Common Language Infrastructure (CLI)
  * ECMA-341 – Environmental design considerations for electronic products
  * ECMA-363 – Universal 3D File Format
  * ECMA-367 – Eiffel: Analysis, design and programming Language (See Eiffel programming language)
  * ECMA-372 – C++/CLI Language Specification
  * ECMA-376 – Office Open XML (later known as ISO/IEC 29500)
  * ECMA-377 – Holographic Versatile Disc (HVD) Recordable Cartridges
  * ECMA-378 – Read-Only Memory Holographic Versatile Disc (HVD-ROM)
  * ECMA-388 – Open XML Paper Specification
  * ECMA-402 – ECMAScript Internationalization API Specification
  * ECMA-404 – JSON

  생각보다 어마어마하죠? 이 중에 오늘 우리가 중요하게 봐야할 녀석은 ECMA-262 입니다. 404JSON도 눈길이 가네요.

2. ECMA-262 ECMAScript

  ECMAScript라고 하는 녀석을 보면 "often referred to as JavaScript" 라고 되어 있습니다. 그리고 상당히 많은 사람들이 Javascript 와 ECMAScript를 혼동하시기도 하는데, ECMAScript 의 implementation 이 Javascript로 보시는게 더 정확할 듯 싶습니다.

  여기에는 브라우저 전쟁(?) 의 역사를 이해해야 하는데, Javascript 의 창시자인 Brandon Eich ( 작년에 한국에 오셨더랬죠. 덕후
  포스쩜) 가 마이크로소프트가 Javscript랑 적당히 호환되는 Jscript를 만들자 자바스크립트 표준 규격을 ECMA International에 제출하고 그게 ECMAScript-262로 채택이 되었습니다. (참조 : http://en.wikipedia.org/wiki/ECMAScript)

  그 이후도 버전이 올라갈 때마다, 브라우저들의 이해관계에 얽힌 전쟁이 계속 되는데, 최근에는 구글 크롬 진영도 가세를 하면서 더 재밌어지는 추세입니다.
  지금까지 가장 많이 쓰고 있는 버전은 5th 입니다.

  Adobe의 Actionscript 와 QtScript , 크라이 엔진의 CriScript도 ECMA-262의 한 종류입니다.



3. ECMAScript Harmony

  혹은 ES6 Harmony 라고도 불리는 차세대 ECMAScript 버전은 2015년 6월 release를 목표로 하고 있습니다. 기존의 개념과 문법에서 큰 변화가 있습니다. 클래스의 개념이라던지, generator, promises 등등의 급격한 변화를 포함하고 있어서 필자로써는 이번 draft가 웹 전체에 끼칠 영향에 상당한 촉각을 세우고 있습니다. 일찍 이런 것들을 적용하는데 관심이 있으신 분들은 꼭 살펴 보셔야할 내용입니다.

  특별히 github의 이 프로젝트는 ES6의 feature들을 설명하는데 공간들을 할애하고 있습니다.
  Javascript에 관심이 많으신 분들은 필히! 읽어보셔야 할 부분이고, HTML5, CSS3와 함께 2015,2016년 web application분야를 뜨겁게 달굴 것이 확실시 되고 있습니다.

  아래와 같은 feature들을 담고 있습니다.

  * arrows
  * classes
  * enhanced object literals
  * template strings
  * destructuring
  * default + rest + spread
  * let + const
  * iterators + for..of
  * generators
  * unicode
  * modules
  * module loaders
  * map + set + weakmap + weakset
  * proxies
  * symbols
  * subclassable built-ins
  * promises
  * math + number + string + object APIs
  * binary and octal literals
  * reflect api
  * tail calls

  특별히 promises와 reflect api같은 부분은 이해하기 쉽지 않으니, 미리 미리 살펴보시는게 도움이 될 거 같습니다.
  6월이 오기 전에 심층 분석해 보도록 하겠습니다.(약속!)

  ![이미지](img/004-20.png)
