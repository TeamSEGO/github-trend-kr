# postgrest

- 페이지 링크: https://github.com/begriffs/postgrest

이번에 소개해 드릴 깃헙 트랜드는 postgrest 입니다. 이름을 봤을 때는 postgresql과 관련이 있어보이죠? 네! 맞습니다. postgrest는 postgresql database를 RESTful API로 사용하게 해줍니다. 이미 설치되어 있는 database에 postgrest가 한번 더 감싸서 RESTful API를 제공해 주는 것입니다.

이럴 경우 성능에 이슈가 있을 것이라 생각이 되는데요, postgrest는 heroku 무료 계정 기준으로 2000 requests/sec 의 응답을 한다고 합니다. 이러한 성능을 보이도록 도움을 주는 요소는 크게 3가지로 뽑고 있습니다.
* Haskell로 작성된 서버
* database에서 처리 가능한 연산들은 database에 위임
* Hasql 라이브러리의 사용

JSON Token이나 db에 정의된 룰로 보안은 처리한다고 하는데요, 이런 부분들은 좀 지켜보는게 좋을 것 같습니다. 앞으로 가져가야할 요소 중 oauth가 있는 것으로 봐서는 postgrest자체적으로 보안에 신경을 더 쓸 것 같네요.
그리고 소켓으로의 처리가 이뤄지면 왠지 최근에 사용해본 firebase같은 냄새도 나는 것 같네요.

postgresql는 많이 사용하고 있는 오픈소스 db인 만큼 postgrest와 같은 부가적인 프로젝트들이 계속 나온다면 좀 더 다양한 방법으로 이 db를 활용한 서비스를 기획해 볼 수 있을 것 같습니다.
