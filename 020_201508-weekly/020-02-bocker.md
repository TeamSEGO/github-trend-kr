# bocker

![bocker](http://snag.gy/5sCyt.jpg)

- 페이지 링크: https://github.com/p8952/bocker

## 소개

100 라인의 bash 스크립트로 만들어진 Docker 구현체라고 합니다.
사실 docker도 리눅스에서 제공해주는 기술을 이용해서 구현된 걸로 알고 있는데
bocker는 소스를 한번 살펴보니 그냥 shell 명령어들(cgcreate, cgexec, cgroups 같은)을 
이용해서 구현을 했습니다.
vm을 이용해서 테스트 해볼수 있게 Vagrantfile도 제공하고 있습니다.

## 이걸 왜 만들었을까?

사실 docker의 경우 설치도 굉장히 간단하고 사용법도 편리합니다.
bocker를 설치하려면 여러가지 라이브러리를 컴파일해서 설치해야된다고 써있는데요..
이걸 왜 만들었을까요?
제 생각엔 간단하게 bash 스크립트로도 구현이 가능하다는 걸 보여주고 싶어서 인것 같습니다.
docker의 모든 기능이 구현된것도 아니구요.
이게 docker를 대체하거나 그럴 의도는 아닌것 같습니다.
