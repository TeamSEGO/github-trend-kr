# Tomorrow

- 페이지 링크: https://github.com/madisonmay/Tomorrow

Tomorrow 라는 프로젝트는 phtyon2.7 에서 비동기 함수를 짜는데 기가막힌 decorator syntax를 제공해준다고 하네요.

한번 알아보도록 하겠습니다.

설치는 pip 를 이용합니다. 요래요래.

```
pip install tomorrow
```

몇개의 사이트를 접속해서 scraping 해보는 소스를 한번 보도록 하겠습니다.

접속해 볼 사이트를 아래와 같이 정의해 놓구요

```
urls = [
    'http://google.com',
    'http://facebook.com',
    'http://youtube.com',
    'http://baidu.com',
    'http://yahoo.com',
]
```

일반적으로 아래와 같이 소스코드를 짤 수 있을 겁니다.
```
import time
import requests

def download(url):
    return requests.get(url)

if __name__ == "__main__":

    start = time.time()
    responses = [download(url) for url in urls]
    html = [response.text for response in responses]
    end = time.time()
    print "Time: %f seconds" % (end - start)
```

자, 이제 비동기식으로 이 소스 코드를 변동하려면 어떻게 하면 좋을까요?

이 프로젝트를 이용하면 간단한

```
@threads(5)
```

를 추가함으로 10배는 빠른 scraping 이 가능해 집니다. 소스를 이렇게 바꿔보겠습니다.
```
import time
import requests

from tomorrow import threads

@threads(5)
def download(url):
    return requests.get(url)

if __name__ == "__main__":
    start = time.time()
    responses = [download(url) for url in urls]
    html = [response.text for response in responses]
    end = time.time()
    print "Time: %f seconds" % (end - start)
```

아 정확하게는 import 도 추가되었군요.

이게 어떻게 가능해 졌을까요?

소스가 궁금하면

https://github.com/madisonmay/Tomorrow/blob/master/tomorrow/tomorrow.py
를 확인해 보세요

42 라인 밖에 안되는군요!
