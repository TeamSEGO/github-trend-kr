# atom-pair

- 페이지 링크: https://github.com/pusher/atom-pair

이번에 소개해드릴 프로젝트는 atom-pair입니다.

![atom-pair](https://raw.githubusercontent.com/pusher/atom-pair/master/images/demo.gif)

위 그림에서 보시는 것과 같이 atom 에디터 창이 서로 공유가 됩니다.
인터넷이 되는 환경에서라면 서로 다른 곳에 위치하더라도 동일한 소스를 보면서 수정 할 수 있겠죠?

테스트를 위해 3명이서 세션을 공유해봤는데, 이것도 잘 됩니다.

새로운 프로젝트를 만들면 세션키가 생성이 되고, 이를 공유하면 됩니다. 이를 위해 README에 있는 것과 같이
Slack과 연동해봤는데, 이 또한 잘 동작합니다.

다만, 파일 저장등의 이벤트는 서로 전달되지는 않는 것 같습니다. 또 세션이 연결될때 새 창이 2개가 뜨는 버그(?)가 있는 것 같습니다.

하지만 좀 더 보완이 된다면, 그룹끼리 좀 더 재미있게 개발 할 수 있는 프로젝트가 될 것 같습니다.
