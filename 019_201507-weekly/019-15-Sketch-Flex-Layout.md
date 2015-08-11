#Sketch Flex Layout
 - 페이지 주소 : https://github.com/hrescak/Sketch-Flex-Layout

Sketch Flex Layout은 iOS의 Sketch라는 그리기 어플리케이션의 Plugin입니다.
stylesheets와 prototypes을 이용해서 css layout을 그릴 수 있도록 만들어 줍니다.
깃헙 리드미에 보면 아직 테스트 버전이고 앞으로 많이 변화될 것이니 프로젝트에 사용하는하는 것을 추천하지는 않는다고 하네요.

그래서 저도 직접 설치해보지는 않았습니다.(사실은 mac이 없어요..)

개발자인 hrescak은 [아티클](https://medium.com/facebook-design/exploring-dynamic-layout-in-sketch-fdf0e825d1cf)로 자신이 왜 프로젝트를 진행했고 어떤 기능들이 제공되고 있는지 밝히고 있습니다.

css디자인을 하다보면 종종 같은 작업을 반복해야할 때가 있죠.
sketch툴에서는 여러가지 elements에 style을 한번에 적용할 수 있는 몇몇 방법을 제공해준다고 합니다.
그 방법을 이용해서 조금 더 편하게 일할 수 있는 환경을 만들었다고 하네요.
해당 페이지에서는 몇가지 예제를 [동영상](https://i.imgur.com/3TJIsQG.gifv)으로 볼 수 있게 해놓았습니다. 링크는 그 예시들 중 하나입니다.

깃헙리드미에서는 stylesheets, prototypes 각각을 이용하는 간단한 방법을 제공해주고 있습니다.

stylesheets를 이용하는 방법은 간단합니다.
text layer를 하나 만들고 이름을 '@stylesheet'로 지정합니다. 이 layer안에 css tag를 작성하면 적용이 됩니다.
![alt text](https://camo.githubusercontent.com/c115ed240e74fa0b8dbde0933ced13aaf976bc59/687474703a2f2f692e696d6775722e636f6d2f3246636f4144702e706e67)
적용되는 property list는 [여기](https://github.com/facebook/css-layout)서 확인할 수 있습니다.

프로토타입도 비슷한데요. 다른 것은 레이어그룹을 만들고 네이밍을 'prototype.something'으로 지정하면 사용할 수 있다고 합니다.

저는 css 디자인을 할 때 대부분의 경우 스케치를 하고 시작하기보다 html/css 코드로 바로 달려드는 경우가 많았습니다.
이런 툴이 있어서 스케치와 동시에 대략적인 css코드를 만들어놓고 시작할 수 있다면 정말 유용할 것 같습니다. 
