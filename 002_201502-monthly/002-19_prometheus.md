# 19. prometheus

페이지 링크: https://github.com/prometheus/prometheus

사용 언어: Go

프로메테우스는 고대 그리스 신화에서 인간에게 불을 가져다 준 신이죠. 

(http://prometheus.io 링크를 따라가 보면 아이콘이 횃불로 되어 있네요. )

SoundCloud ( https://soundcloud.com ) 는 많이들 들어보셨을 겁니다. 음성 혹은 음악 SNS역할을 하고 있는데 유튜브가 동영상을 공유한다면 soundcloud는 뮤지션들에게 조금 더 geek한 스타일로 어필이 되어 많은 사람들이 자신들이 만든 음악이나 강연등을 공유하고 있습니다.

프로메테우스는 이 사운드 클라우드의 모니터링 서비스 이자 시계열 데이타 베이스(time series database)라는 군요. 서비스의 특성상 스트리밍 서비스를 기본적으로 하고 있으니, 데이타 모델 자체도 여타 다른 DB들이랑 다르게 설계되어 있습니다. 

아마도 이 서비스 자체만으로는 감이 안올 거 같아서 페이지 소개를 찾아보니 다른 서비스들과 비교해 놓았습니다.(http://prometheus.io/docs/introduction/comparison/) 

Grahphite ( http://graphite.readthedocs.org/en/latest/ ) 는 시계열 데이타 베이스 이면서 그 데이타를 시각화 하는 도구 입니다.

InfluxDB ( http://influxdb.com ) 역시 같은 시계열 DB인데 사운드 클라우드가 시스템을 구축할 때는 존재하지 않아서 고려대상이 아니었다는 군요.

자신들의 로드맵을 정확하게 공개하고 있습니다.(http://prometheus.io/docs/introduction/roadmap/)

결과물들은 다음과 같은 모습을 하고 있고

![이미지1](../img/002$19.png)

아키텍처는 다음과 같습니다.

![이미지2](../img/002$19$2.png)

언어는 Go 기반으로 되어 있습니다. 최근 상당히 훌륭한 프로젝트들이 이 Go로 개발되고 있습니다.

