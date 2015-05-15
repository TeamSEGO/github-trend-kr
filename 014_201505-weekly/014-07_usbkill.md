# usbkill
- 페이지링크: [usbkill](https://github.com/hephaest0s/usbkill)

Anti-Forensic이란 포렌식 기술에 대응하여 자신에게 불리하게 작용할 가능성이 있는 증거물을 차단하려는 일련의 활동을 의미합니다.

usbkill은 anti-forensic 일괄 취소기능으로 여러분의 USB포트의 변화를 기다리다, 변화가 감지되면 즉시 컴퓨터를 shut down 시켜버립니다. 

usbkill을 실행시키려면 다음의 명령어가 필요합니다.

```
sudo python usbkill.py
```

## Why?

그럼 usbkill은 왜 필요할까요?
이 툴을 사용하는 3가지 이유는 다음과 같습니다. 
- 경찰이나 또는 다른 폭력배가 여러분의 컴퓨터를 급습하는 경우가 생길 수 있습니다. 경찰은 보통 화면 보호기나 sleep mode를 유지하기 위해 mouse jiggler를 사용합니다.
- 누군가가 여러분의 컴퓨터에서 문서를 가져가거나, USB를 통해 malware/backdoors를 설치하는 원하지 않을 겁니다. 
- 여러분은 가정과 회사 서버의 보안을 향상시키기를 바랄겁니다.  


## Feature List

usbkill은 다음과 같은 특징들이 있습니다.

- BSD, OS X, 리눅스와 호환이 가능합니다. 
- usb 활동이 있을 때 컴퓨터를 shutdown 시킵니다. 
- 커스터마이징이 가능합니다. shutdown 직전에 실행될 명령어를 정의할 수 있습니다. 
- USB 디바이스에 whitelist를 가능하게 합니다.
- check interval 변경 가능합니다.(default: 250ms)
- shut down 전 프로그램 melt 가능합니다.
- sleep mode에서도 정상 동작합니다.
- 메모리 점유율이 낮습니다.
- 파이썬 2/3 을 제외하고 종속성이 없습니다.
