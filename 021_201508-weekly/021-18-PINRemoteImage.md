# PINRemoteImage

- 페이지 링크: https://github.com/pinterest/PINRemoteImage

iOS 에서 코드 작성하실 때에 웹 상에 있는 이미지 리소스 다운 받는 거 처리할 때 가끔 처리해야 할 것들이 많아서

짜증날 때 있었을 겁니다.

(캐시 문제라던지, 멀티 쓰레드로 한번에 받았으면 한다던지 등의 작업을 위해 손이 더 가게 되죠)

pinterest 에서 iOS 용 이미지 다운로딩 패키지를 공개 했네요.

png,jpeg, 구글의 WebP 이미지 등을 지원하구요, FLAnimatedImage 형태도 지원한다는데

FLAnimatedImage는 iOS 에서 사용가는한 animated gif 입니다.

네트워크 상태가 안좋을때에 이미지가 미려하게 뜨도록 지원하는 progressive JPGs도 지원하는데

공식 페이지에서 보여지는 이미지효과는 다음과 같습니다.

![이미지1](https://github.com/pinterest/PINRemoteImage/raw/master/progressive.gif)

페이지 링크를 찾아가면 usage들을 확인할 수 있습니다.
