#Ephemeral P2P

- 페이지 링크 : https://github.com/losvedir/ephemeral2

Ephemeral은 임시라는 말이다. 말 그대로 이 프로젝트는 임시로 사이트를 개설했다가 내릴수 있는
프로그램이다. 다소 필자에게는 생소한 erlang으로 되어 있으며, node도 일구 소스코드에 있는 것 같다.

처음 프로그램을 실행시키면


![015-19_01.png](https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/015-19_01.png)

위와 같은 화면을 볼 수 있으며, Create page를 누르게 되면 아래와 같은 페이지를 볼 수 있다.

![015-19_02.png](https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/015-19_02.png)

page url은 SHA256으로 되어 있어 URL 정보가

http://localhost:4000/15d2c959aa80517a7732f0bc2579fb9ee01b8c8402661aa127b1b84c0848f1c7

와 같이 되어 있다. (여기서 Default port는 4000이다.)

그림을 보면 접속자 Count가 보이며, 접속자 수가 0이 되면 해당 페이지는 사라진다.

# 실행해 보기 위해서는

[Elixir](http://elixir-lang.org/install.html). 이라는 것이 먼저 설치 되어 있으야 하며...
아래와 같은 명령어를 차례대로 실행하면 된다.

```
$ git clone git@github.com:losvedir/ephemeral2.git
$ cd ephemeral2
$ mix deps.get
$ mix phoenix.server
```

CSS나 javascript를 수정하기 위해선 [npm](https://www.npmjs.com/)을 이용해서 brunch를 설치하면
된다고 하는데.... 실제로 brunch를 실행하면

````
[error] Could not start watcher "node_modules/brunch/bin/brunch", executable does not exist
````

과 같은 메세지가 나타나며 에러가 나타나서 실제로 구동을 해보지는 못했다.

npm 설치 명령은 아래와 같다. 

```
$ npm install -g brunch
```
