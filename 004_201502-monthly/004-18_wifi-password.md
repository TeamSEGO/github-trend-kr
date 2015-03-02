# wifi-password

현재 내가 접속해있는 와이파이의 패스워드를 알려주는 간단한 실행파일입니다.
지금 설명해드리는 것은 OSX용이고 Windows용 버전은 'RReverser'라는 개발자가 구현해놨네요.
링크 참고하세요.
[Windows version](https://github.com/RReverser/WiFi-Password).

![](https://i.cloudup.com/uUo8iSbKXRh/km6iJT.gif)

## 기본 사용법

**1. 설치**

bpkg로 간단히 설치해봅시다. 

```
$ bpkg install rauchg/wifi-password
```

또는 `curl`로도 가능합니다:

```
curl -L https://raw.github.com/rauchg/wifi-password/master/wifi-password.sh -o ~/bin/wifi-password && chmod +x ~/bin/wifi-password
```

`$PATH`에 `~/bin`가 없다면 아래 처럼 `/usr/local/bin`로 바꿔서 쓰면 됩니다.

```
curl -L https://raw.github.com/rauchg/wifi-password/master/wifi-password.sh -o /usr/local/bin/wifi-password && chmod +x /usr/local/bin/wifi-password
```


**2. 사용법**

현재 로그인되어 있는 터미널에서 명령어 한줄만 치면 됩니다.(로그인 계정의 id와 password가 필요)

```
$ wifi-password
```
