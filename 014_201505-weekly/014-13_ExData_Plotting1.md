# ExData_Plotting1
- 페이지링크: [ExData_Plotting1](https://github.com/rdpeng/ExData_Plotting1)

가정용 에너지 사용량을 토대로 R로 Plot을 잘 표현할 수 있습니다. 

---------------------------------------------------------------------------


- 이 과제는 [UC Irvine Machine Learning Repository](http://archive.ics.uci.edu/ml/],할당은)의 데이터로 머신러닝으로 유명한 저장소입니다. 정확히 말하면 "가계당 소비 전력 데이터 세트"를 사용합니다.

- 데이터 집합 : [소비 전력 20MB](https://d396qusza40orc.cloudfront.net/exdata%2Fdata%2Fhousehold_power_consumption.zip)

- 설명 : 1분 샘플링 비율과 한세대에서의 소비 전력의 측정을 거의 4년 걸쳐 측정하였고 . 다른 전기 수량 및 일부 하위 측정 값을 사용할 수 있습니다.

- 데이터 셋의 9 변수의 다음과 같은 설명은 [UCI 웹 사이트](https://archive.ics.uci.edu/ml/datasets/Individual+household+electric+power+consumption)에서 설명된 자료입니다. 

    ```
    1. 날짜 : 형식 일 / 월 / 년의 날짜
    2. 시간 : 형식의 시간을 HH : MM : SS
    3. Global_active_power : 가정용 글로벌 유효 전력을 분 평균 (kilowatt)
    4. Global_reactive_power : 가정용 글로벌 무효 전력을 분 평균 (kilowatt)
    5. 전압 : 분 평균 전압 (volt)
    6. Global_intensity : 현재의 강도를 분 평균 (ampere)
    7. Sub_metering_1 : 주로 식기 세척기, 오븐 및 전자 레인지를 포함한 부엌에 해당합니다.
    8. Sub_metering_2 : 세탁기, 텀블 건조기, 냉장고, 빛을 포함, 세탁실에 해당합니다.
    9. Sub_metering_3 : 전기 온수기와 에어컨에 해당합니다. 
    ```

### 데이터 로딩하기 

- R에 데이터 집합을 로드할 때 다음 사항을 고려하십시오 :

-  데이터 세트는 2,075,259 행 9 열이 있습니다. 먼저 R로 읽기 전에 데이터 세트가 메모리에 필요로하는 메모리 양의 대략적인 추정치를 계산하고 컴퓨터가 그에 대한 충분한 메모리를 가지고 있는지 확인하십시오.

- 우리는 날짜 2007-02-01 및 2007-02-02의 데이터를 사용합니다. 하나의 대안은 오히려 그 날짜에 전체 데이터 세트 및 서브 세트에서 읽는 것보다 그냥 그 날짜에서 데이터를 읽는 것입니다.

- `strptime ()`와 `as.Date ()` 함수를 사용하여 날짜 및 시간을 변환할 수 있습니다.

- 누락 된 값은 `?` 로 코딩 되었습니다.


### Making Plots

- 월 2일에 걸쳐 에너지 사용량이 어떻게 변화하는지 조시하였습니다. 
- 2007년 작업은 시스템의 플로팅 베이스를 사용하여 구성하고 다음과 같은 플롯을 재구성 하는것입니다. 
- 별도의 R 코드 파일의 해당 플롯을 구성 (plot1.R, plot2.R 등)를 작성, plot1.R에 즉 코드는 plot1.png 플롯을 구성합니다. 코드 내 파일은 플롯을 완전히 재현 할 수 있도록 데이터를 판독하기위한 코드를 포함합니다. 또한 PNG 파일을 생성하는 코드를 포함해야합니다. 
- 저장소에 PNG 파일 및 R 코드 파일을 추가합니다
- 할당이 완료되면 저장소의 GitHub의 버전이 최신이되도록, GitHub의에 당신의 저장소에 넣습니다. (4개의 PNG 파일과 4 개의 R 코드 파일이 있어야합니다.)
- 4개 플롯은 다음과 같습니다.

### Plot 1

![image](https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/014-05_unnamed-chunk-1.png)

### Plot 2

![image](https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/014-05_unnamed-chunk-2.png)

### Plot 3

![image](https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/014-05_unnamed-chunk-3.png)


### Plot 4

![image](https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/014-05_unnamed-chunk-4.png)
