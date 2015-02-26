# 16. LoganSquare

페이지 링크 : https://github.com/bluelinelabs/LoganSquare

시카고에 위치한 BlueLine Labs라는 회사(모바일 관련해서 뭐 만드는)에서 만든 Android용 JSON 파싱 라이브러리 입니다. 
Jackson API를 기반으로 한다고 하는데, Android runtime을 ART로 했을때 GSON이나 Jackson보다 400%이상의 퍼포먼스를 낸다고 합니다. 믿지 못하냐고 하면서 성능 테스트 결과와 환경을 리파지토리에 포함하고 있습니다. 

![이미지](../img/004-16.png)

최근의 안드로이드 스튜디오의 빌드 환경이 Gradle로 되어 있어서인지 Gradle 빌드 환경 만을 지원하며, 사용법에 대한 몇가지 문서도 제공하고 있습니다. JSON 스트리밍을 이용하는 서비스를 구상 중이시라면 한번 살펴보시는 것도 좋을 것 같습니다. 
