# wifi-password

현재 내가 접속해있는 와이파이의 패스워드를 알려주는 간단한 실행파일입니다.
지금 설명해드리는 것은 OSX용이고 Windows용 버전은 'RReverser'라는 개발자가 구현해놨네요.
링크 참고하세요.
[Windows version](https://github.com/RReverser/WiFi-Password).

![](https://i.cloudup.com/uUo8iSbKXRh/km6iJT.gif)

## 기본 사용법

**1. 설치**

With [bpkg](https://github.com/bpkg/bpkg):

```
$ bpkg install rauchg/wifi-password
```

또는 `curl`로도 가능합니다:

```
curl -L https://raw.github.com/rauchg/wifi-password/master/wifi-password.sh -o ~/bin/wifi-password && chmod +x ~/bin/wifi-password
```

If you don't have `~/bin` in your `$PATH`, replace it with `/usr/local/bin` or
similar.

**2. Use it:**

To get the password for the WiFi you're currently logged onto:

```
$ wifi-password
```
