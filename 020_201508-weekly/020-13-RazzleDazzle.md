# RazzleDazzle
RazzleDazzle은 swift로 만들어진 간단한 iOS keyframe anmination framework입니다.
scrolling 앱 인트로로 사용하기 적합합니다.  

![alt](https://github.com/IFTTT/RazzleDazzle/raw/master/Example/Docs/razzledazzle-demo.gif)

RazzleDazzle은 스크롤되는 에니메이션을 Swift app intro로 쉽게 넣을 수 있게 해줍니다.
만약 Objective-C app을 만들고 있다면 RazzleDazzle의 모체 격인 [JazzHands](https://github.com/IFTTT/JazzHands)를 사용하라고 하네요.

설치를 위해서 Carthage나 CocoaPods을 이용할 수 있습니다.
Carthage로 설치하는 방법은 Cartfile에 아래 문구를 추가하면 됩니다.
```
github "IFTTT/RazzleDazzle"
```
CocoaPods을 이용하기 위해서는 Carthage와 비슷하게 Podfile에 아래 문구를 추가하시면 됩니다.
```
pod "RazzleDazzle"
```
다만 RazzleDazzle은 Swift로 작성되어 있기 때문에 use_frameworks를 podfile 맨 위에 추가하는 것을 잊지 말라고 하네요~
```
source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '8.0'
use_frameworks!

pod 'RazzleDazzle'
```

RazzleDazzle은 다음과 같은 타입의 에니메이션을 제공합니다.  
![alt text](https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/020-13-1.PNG)  
혹은 Custom Animation을 정의해서 사용할 수도 있다고 합니다.

혹시 swift로 iOS App을 작성중이고 인상적인 intro를 만들고 싶다면 이용해보세요~
