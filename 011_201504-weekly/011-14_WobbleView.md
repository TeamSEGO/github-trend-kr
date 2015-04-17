# WobbleView(번역 : 흔들리다)

WobbleView는 App에 최근 인기있는 흔들리는 효과를 구현하는 프로젝트 입니다. 

WoobleView는 사용자의 실행이나 화면 전환시에 동적인 효과를 제공합니다. 

Check this [project on Dribble](https://dribbble.com/shots/2009891-Bits-and-pixels-Wobble-Effect).

![Wobble](https://github.com/inFullMobile/WobbleView/blob/master/wobble.gif?raw=true)

## Installation

두 가지 방법이 있습니다: 물론 MAC USER 시겠죠?

1. 첫번째는 CocoaPods를 통해서 build 및 실행이 가능하다.
2. 두번째는 직접 Xcode Project에 넣으셔서 실행이 가능하다. 간단하죠? 근데 update도 그렇다면 직접 부탁한다고 합니다.

## 사용법  

일단은 WobbleView를 만드시고, 포지션을 바꿔보세요.


```
self.wobbleView.frame.origin = CGPoint(x: randomX, y: randomY)
```

혹은 

```
self.wobbleView.center = CGPoint(x: randomX, y: randomY)
```

혹은  animate the view's constraints.

Sample에서는 WobbleView.swift에서 사용한 것을 참고할 수 있습니다.

## Properties: 옵션을 한번 볼까요?

```
internal var frequency: CGFloat = 3
```

위 옵션은 진동 횟수를 조절하는 것! 즉, 위의 그림을 보고서 Wobble을 당겼다가 놓으면 흔들리는 횟수

```
internal var damping: CGFloat = 0.3
```

위 옵션은 당겼을때 당겨오는 정도라고 생각하면 된다. 위 그림에서 왼쪽으로 당길때 끌려오는 정도가 늘어난다.

```
var edges: ViewEdge = ViewEdge.Right
```

Wobble하고 싶을때 -흔들리는 효과를 주고싶을때- 모서리를 식별하는 bitmask값을 말합니다.  
이 Parameter를 사용해서 사각형에서 한쪽 모서리만을 흔들리는 효과를 주실수 있습니다.

## Requirements

- iOS 7.0+
- Xcode 6.3

## License

Released under the MIT license. See the LICENSE file for more info.