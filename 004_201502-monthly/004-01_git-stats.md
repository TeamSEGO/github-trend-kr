# git-stats

페이지 링크 : https://github.com/IonicaBizau/git-stats

GitHub 프로필 페이지에 보면 기여(Contribution)한 정도를 녹색의 진하기로 표현한 달력이 있습니다. git-stats는 이것과 비슷하게 로컬의 콘솔상에서 자신이 기여한 정도를 캘린더로 볼 수 있습니다.

# 설치방법

```sh
$ npm install -g git-stats
```

### 새로운 프로젝트에 적용하기

기본적으로 commit을 분석해서 사용합니다. Readme에 보면 후킹방법과 오버라이딩 방법 2가지를 소개하고 있습니다. 오버라이딩은 약간 복잡하니 그냥 간단한 후킹방법만 소개하도록 하겠습니다. 원문에는 2가지 모두 소개하고 있으니 참고하시면 됩니다.

```sh
# curl로 설치하기
curl -s https://raw.githubusercontent.com/IonicaBizau/git-stats/master/scripts/init-git-post-commit | bash

# ...또는 wget으로 설치하기
wget -qO- https://raw.githubusercontent.com/IonicaBizau/git-stats/master/scripts/init-git-post-commit | bash
```

### 기존 프로젝트에서 적용하기 (Import)

```sh
# 임포트 툴 설치하기
$ npm install -g git-stats-importer

# 임포트를 원하는 리포지토리로 이동
$ cd path/to/my-repository

# 커밋을 임포트하기
$ git-stats-importer

```

# 사용방법

```sh
$ git-stats
```

아래 이미지와 같이 기여도가 나오는 것을 확인할 수 있습니다.

![이미지](img/004$01.png)
