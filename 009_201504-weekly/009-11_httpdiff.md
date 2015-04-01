httpdiff
==================================================
- 페이지 링크: https://github.com/jgrahamc/httpdiff

- 사용언어: Go

두개의 http 서버에 요청을 보내 응답을 확인하고 비교할 수 있는, command-line 기반의 툴입니다.

단순하게는 서로 다른 url을 비교할 수 도 있고요, 

host header를 uri 내부에 있는 어떤 값으로 셋팅하거나, 특정 header를 무시하는 옵션을 설정할 수도 있습니다.

    httpdiff -host example.com http://example.old.com/ http://example.new.com
    
    httpdiff -ignore Set-Cookie,Date http://x.com http://y.com

ANSI Escape Sequence 기반의 unix 터미너렝서 가장 쓰기 용이하며, 가볍게 사용할 수 있어 작업 시간을 줄이는데 도움을 줄 수 있을 것 같습니다.

** https://www.google.com 와 http://www.google.com 의 차이 살펴보기 **

![이미지](https://github.com/jgrahamc/httpdiff/raw/master/doc/example2.png)