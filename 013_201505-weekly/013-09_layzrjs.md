# layzr.js
- 페이지 링크: [layzr.js](https://github.com/callmecavs/layzr.js)

layzr.js 는 작고 빠르고, 타 라이브러러리와 디펜던스가 없는 lazy loading 입니다.
 jQuery  등 어떤 라이브러리 없이  layzr.js 하나만 사용하면되니 편하긴 하네요. 
 
 좀 더 상세 가이드는 아래 페이지에 있습니다. 
 [Demo Page 및 가이드 ](http://callmecavs.github.io/layzr.js/)

그럼 위 가이드대로 한번 따라해보도록 하겠습니다. 


1. layzr.min.js 와 좀 큰 이미지 하나를 다운받아 아래 경로에 넣습니다.

		<!DOCTYPE html>
		<html>
			<head>
			<script src="layzr.min.js"></script>
		<script>
		var layzr = new Layzr({
 			 				selector: '[data-layzr]',
  		  					attr: 'data-layzr',
  							retinaAttr: 'data-layzr-retina',
  							bgAttr: 'data-layzr-bg',
  							threshold: 0,
  							callback: null
							});
		</script>
  		<meta charset="UTF-8">
		<title>layzr test</title>
		</head>
		<body>
  		<img src="Layzr.js_files/DSC_7071.jpg" data-layzr="normal/image" data-layzr-retina="optional/retina/image">
     </body>
		  
		  
2. 페이지를 한번 호출해보도록하겠습니다.
![image](https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/013-03-09-layzr.png)


모가 달라진걸까요? 저도 처음에 찾는데 꽤 걸렸습니다.

1의 코드의 layzr 부분 코드를 제거하고 이미지 태그만 넣어 비교해 본다면 약간 좀 더 쉽게 캐치할 수 있을 것 같습니다.

layzr 를 사용하면 이미지의 사이즈가 좀 커도 (전 8 MB 정도) 화면 로딩 시 깜박임이 없는 걸 확인하였습니다.

그럼 좀 더 상세한 가이드는 Demo Page 및 가이드  부분을 참고하세요

 전 이만 ^^
 
