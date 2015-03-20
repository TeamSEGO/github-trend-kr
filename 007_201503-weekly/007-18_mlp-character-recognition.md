# mlp-character-recognition

- 페이지 링크: https://github.com/mateogianolio/mlp-character-recognition


### MLP 정의

- MLP란 multi-layer perceptron의 약자로 이미지에 있는 글자를 인식하여 
다시 글자로 변환하여 주는것입니다.
- Training Set는 [node-captcha](https://www.npmjs.com/package/node-captcha)의 변형된 버전을 이용하여 생성하였습니다.

- 네트워크는 1차원 바이너리 Array(기본 20*20=400비트)를 취하고 다음 문자 코드로 변환 할 수 있는 8비트 바이너리 Array를 출력하여 초기 측정의 성공률을 보여줍니다.

- 훈련 후에는 ./network.js라는 독립 모듈로 저장이 되고 당신의 프로젝트에도 사용할 수 있게 됩니다. 

### 성능

#### 예제 1

#### ```abcdefghijklmnopqrstuvwxyz```

- 사용 폰트: sans-serif, serif
- 사양: 
	- 뉴런: 
		- 400개 입력
		- 40개 숨겨짐
		- 8개 출력됨 
	- 학습속도: 0.1
	- Training Set 
		- 크기: 52000 문자
		- 샘플 	  
![알파벳셋](https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/007-18-02.png)

	- 테스팅 세트: 13000 문자 
	- 측정 성공률: 96.32307692307693%

#### 예제 2

#### ```0123456789```

- 사용 폰트: sans-serif, serif
- 사양: 
	- 뉴런: 
		- 400개 입력
		- 40개 숨겨짐
		- 8개 출력됨 
	- 학습속도: 0.1
	- Training Set 
		- 크기: 20000 문자
		- 샘플 	
![숫자셋](https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/007-18-01.png)
	- 테스팅 세트: 5000 문자 
	- 측정 성공률: 99.22%

### Configuration

- 메인 폴더에있는 config.json 파일을 편집하여 사용자의 요구에 맞게 아래에 붙여 기본 설정을 변경 할 수 있습니다. 

    ```javascript
    {
      "text": "abcdefghijklmnopqrstuvwxyz",
      "fonts": [
        "sans-serif",
        "serif"
      ],
      "training_set": 2000,
      "testing_set": 500,
      "image_size": 20,
      "threshold": 400,
      "network": {
        "hidden": 40,
        "learning_rate": 0.1
      }
    }
    ```

### 사용법

- 카이로 렌더링 엔진을 설치해야 하며 OSX에서 다음을 수행할 수 있습니다.

```bash
$ wget https://raw.githubusercontent.com/LearnBoost/node-canvas/master/install -O - | sh
```
- npm을 설치하여 다음과 같이 테스트 해보세요.

```bash
$ npm install
$ node main.js
``` 

### 예제 실행 

```bash
$ node main.js
reading config file ...
... done

generating images ...
... done

neural network specs:
  layers:
    input: 400 neurons.
    hidden: 40 neurons.
    output: 8 neurons.
  learning rate: 0.1
  training set: 20000 characters.
  testing set: 5000 characters.

learning ...
progress: 10%
progress: 20%
progress: 30%
progress: 40%
progress: 50%
progress: 60%
progress: 70%
progress: 80%
progress: 90%
... done

network saved to ./network.js

testing on 5000 samples ...
progress: 10%
progress: 20%
progress: 30%
progress: 40%
progress: 50%
progress: 60%
progress: 70%
progress: 80%
progress: 90%
... done

success rate: 99.58 %
```

