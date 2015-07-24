# the-art-of-command-line

- 페이지 링크: https://github.com/jlevy/the-art-of-command-line

요즘 같이 4K영상이 흔해지고, 3D 컨텐츠도 쉽게 구할 수 있고, 심지어 골판지 접에서 머리에 쓰는 영상표시장치를 만드는 세상에 GUI도 아닌 커맨드라인을 사용합니까? 라고 의문을 던지실 분이 있을지 모르겠네요. 하지만 분명히 커맨드라인 인터페이스 즉, CLI를 이용하시는 분들이 계시리라 생각합니다. 특히 리눅스나 Mac OS사용자 분들은 익숙하시리라 생각됩니다. 

CLI가 가지는 장점이 분명히 있습니다. 하지만 이 글에서 그걸 논하려는 것은 아니구요. **The Art of Command Line** 이라는 제목의 이 문서를 소개하려합니다. Quora에 올라온 글들을 모아서 Github을 통해 공유하고 있다고 합니다. *읽기 편하시라고 아래부터는 한글 번역문서를 링크하도록하겠습니다.* ~~제가 절대로!! 영어를 못해서가 아닙니다.~~

대부분은 BASH에 대한 설명이 대부분이지만, 한번 쯤 읽어보시면, 어 이런거도 있어? 라고 할만한 깨알같은 팁들이 보이곤 합니다. 가령 BASH 얘기는 아니지만 ```$ python -m SimpleHTTPServer 7777``` 이런것도 알려줍니다. 

전체는 주제별로 아래와 같이 분류되어 있습니다. 
> * [BASIC](https://github.com/jlevy/the-art-of-command-line/blob/master/README-ko.md#basics)
>   * 기본적으로 커맨드라인을 사용하면서 알아야할 내용
> * [Everyday use](https://github.com/jlevy/the-art-of-command-line/blob/master/README-ko.md#everyday-use)
>   * 매일 사용할 만큼 자주 쓰이는 방법
> * [Processing files and data](https://github.com/jlevy/the-art-of-command-line/blob/master/README-ko.md#processing-files-and-data)
>   * 파일과 데이터 다루는데 쓰이는 방법. - 파일 찾기 변환 뭐 그런 것들
> * [System debugging](https://github.com/jlevy/the-art-of-command-line/blob/master/README-ko.md#system-debugging)
>   * 디버깅을 위해서 시스템 상태를 모니터링 한다던가 PID조회한다거나 하는 방법
> * [One-liners](https://github.com/jlevy/the-art-of-command-line/blob/master/README-ko.md#one-liners)
>   * 커맨드를 한데 모아서 사용하는 예제
> * [Obscure but useful](https://github.com/jlevy/the-art-of-command-line/blob/master/README-ko.md#obscure-but-useful)
>   * 언젠간 유용하게 쓰일만한 명령. 
> * [MacOS only](https://github.com/jlevy/the-art-of-command-line/blob/master/README-ko.md#macos-only)
>   * MAC OS에서만 쓰이는 명령. 

전체적으로 모든 것을 설명해 주지는 않지만, 아 이런게 있구나!! 하게 만들어주는 문서가 되겠습니다. 기본적으로 파일 목록을 조회하고 복사하고 이동하고 명령을 실행하고 정도만 알아도 사용하는데는 크게 문제는 없지만, 멋진 개발자로 거듭나려면 한번 쯤은 내용을 잘 정리해보는 것도 의미가 있을 거 같기는 합니다. 

