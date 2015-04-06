torrent
==================================================
- 페이지 링크: https://github.com/anacrolix/torrent

- 사용언어: Go

이번에 소개해드릴 깃헙 트랜드는 torrent입니다.

BitTorrent의 클라이언트 패키지와 유틸리티를 제공해주는 토렌트 유저에겐 아주 유용한 프로젝트입니다.
커맨드라인 명령어를 이용하여도 토렌트를 이용할 수 있어 ssh로 붙어서 원격으로 토렌토 제어를 할 수 있습니다. 

- go get으로 설치 

```go get github.com/anacrolix/torrent/cmd/torrent```

- torrent 명령어로 ubuntu-14.04.2-desktop-amd64.iso 파일 다운로드 

```torrent 'magnet:?xt=urn:btih:KRWPCX3SJUM4IMM4YF5RPHL6ANPYTQPU'```

![이미지](img//009-15.png)

```torrent``` 명령 외에도 FUSE filesystem을 구성할 수 있는 ```torrentfs```, 마그넷 링크를 생성할 수 있는 ```torrent-magnet```, DHT 노드의 핑을 확인 할 수 있는 ```dht-ping``` 명령어을 사용할 수 있습니다. 

이를 이용하면 토렌트 관련해 재미난 프로젝트를 만들 수 있을 것 같습니다.
지금까지 토렌트를 사용할 때는 u토렌트 프로그램을 사용하였는데, 이젠 cmd 토렌트를 이용해야겠네요. :)