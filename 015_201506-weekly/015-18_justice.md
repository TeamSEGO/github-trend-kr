페이지 링크 - https://github.com/okor/justice


# [justice](https://github.com/okor/justice)


justice 는 웹페이지 성능 metrics 를 보여주는 아주 아주 아주 가벼운  Embeddable script입니다. 

![image](https://camo.githubusercontent.com/16475306f69fe8ba9a00d90ba864746b9cd61203/687474703a2f2f692e696d6775722e636f6d2f7a4b616a3666442e706e67)


Justice 는  페이지에 timing metrics, streaming fps meter. 를 보여주는  page toolbar 를 생성합니다.
Red 는 성능의 초과 , Yellow  는  80% budget 사용,  Green 은 그 이하를 나타냅니다.

그럼 한번 따라해볼께요.

따라하는 방법은 두가지가 있는대요 .  소스를 clone 받아 아래와 같이 직접 코드로 따라해보거나  clone 받아 예제를 돌려보는 방법이 있습니다.

![image](https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/015-18_justice_1.png)


- 코드 따라하기
	    
		<!DOCTYPE html>
		<html>
		<head>
		  	<script type="text/javascript" src="justice.mapped.min.js"></script>
			    	<script type="text/javascript">
			    	  Justice.init();
			    	</script>
		<meta charset="EUC-KR">
		<title>Insert title here</title>
		</head>
		<body>
		I'm Justice
		</body>
		</html>
	    	
	    


clone 받은 폴더의 build 밑의 justice.mapped.min.js 를 복사하신 후 위와 같이 html 을 만드시면됩니다. 아래도 아래와 같은 화면이 나올 것입니다.


![image](https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/015-18_justice_2.png)

아래 툴바가 생기고 오른쪽 그래프는 신시간으로 변하고 왼쪽은 값들은 화면 리프레쉬를 하면 계속 바뀌는 것을 보실 수 있습니다.

좀 더 자세한 설명은  [justice](https://github.com/okor/justice) 링크를 참고하세요









