# 8. tinderbox

페이지 링크 : https://github.com/crockpotveggies/tinderbox

사용언어 : scala, playframework

tinderbox는 사용자가 Tinder에서 행하는 일련의 작업?들을 자동화해주도록 고안된 프로젝트입니다. tinder는 '불쏘시개' 이런 의미인데요, 위치기반의 미팅 앱입니다.(이름 참 잘 짓네요.) 다운받아서 실행해봤는데 주변에 쓰는 사람이 없는지 검색이 끝나지 않네요. 고향에 내려와서 그런지 주변에서는 쓰는 사람이 없는 것 같습니다. 수도권에 있는 동료에게 부탁해 테스트 해봤더니 설치한지 10분도 채 지나지 않아 매칭이 이뤄졌다는 군요. 참 좋은 서비스네요.   

tinder는 간단한 방법으로 매칭을 결정할 수 있는데, 다만 맘에 드는 상대를 고르는 작업이 필요합니다. 이런 작업을 즐기는 사람도 있지만, 불필요하다고 생각하는 사람에겐 tinder box는 정말 꿈에 그리던 프로젝트가 될 것이라 생각됩니다.

tinder box는 [Eigenface](https://en.wikipedia.org/wiki/Eigenface)을 이용해 이상형을 찾습니다. Eigenface는 OpenCV같은 소프트웨어 없이 이용할 수 있는 안면인식 알고리즘으로, Viola-Jones framework를 이용해 사진에서 얼굴을 추출하고 이를 픽셀화해 행렬에 저장하고, 추가되는 사진들을 append하면서 평균치를 구해 이를 기준으로 이상형을 판단합니다. 그래서 사전에 bot에 60회 yes, no choice 정보를 입력하고 그 다음부터는 bot이 자동으로 이상형을 찾고, 대화까지 날려는 작업? 자동화 프로잭트입니다.  

tinder 사용자라면 한번 사용해보시기 바랍니다. 

![이미지1](img/003$08.png)