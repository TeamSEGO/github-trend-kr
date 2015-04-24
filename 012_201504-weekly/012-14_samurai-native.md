![이미지](https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/012-14.png)

LABEL :  IOS, Hybrid App, Standard web, Native App

 이름부터 관심이 가는 프로젝트인데요. 실행도 해보고 테스트도 해봤지만 이게 왜 사무라이일까? 하는 느낌이 듭니다.
하지만 결국 요즘 트렌드인 [하이브리드 앱](http://rctown.tistory.com/57)을 지원하기 위한 도구라고 생각되는 프로젝트입니다.

Readme를 통해서 밝힌 이 프로젝트의 SubTitle은 <b>Bring web Standards to native platform</b> 입니다. 즉, 웹 프로그램을 Native App으로 표현이 가능하도록 도와주는 프로젝트란 의미 같습니다. 아래 데모를 보시죠

## Quick preview

![이미지](https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/012-14-01.gif)

이것만 봐서는 모르겠습니다. 뭐지 이건??

자! 이제부터 비교 해볼께요.

### IOS에서 Native Component ?

  아래와 같이 작성됩니다.
```html
<html>
	<body>
		<UICollectionView class="list" is-vertical>
			<UICollectionViewCell is-static is-row>    //원래는 요놈을 사용해야 하는데
				...
			</UICollectionViewCell>
		</UICollectionView>
	</body>
</html>
```

  만약에 HTML Component들을 이용하려면??? Samurai라면 아래와 같이 작성이 가능하다는 겁니다.

```html
<html>
    <body>
        <UICollectionViewCell is-static is-row>
            <div class="profile-wrapper">              //이제 HTML을 사용해도 무방하다.
                <div class="profile-attribution">
                    <div class="profile-segment no-wrap">
                        <div class="segment-wrapper">
                            <span class="segment-count">10,875</span>
                            <span class="segment-suffix">Followers</span>
                        </div>
                    </div>
                    <div class="profile-segment no-wrap">
                        <div class="segment-wrapper">
                            <span class="segment-count">199</span>
                            <span class="segment-suffix">Followers</span>
                        </div>
                    </div>
                </div>
            </div>
        </UICollectionViewCell>
    </body>
</html>
```

### CSS Fluid Layout

  [Fluid](http://www.nextree.co.kr/p8622/) : 반응형 웹이 나온 이후에 생긴 개념 같다... 자세한 사항은 좋은 설명을 해놓은 곳이 있어서 링크해 놓습니다.

  Samurai-native는 Common Web에서 지원하는 UI Layout과 관련된 stacked,margin,padding 등을 지원할 수 있으며, style기능인 font-weight, border-radius 등의 기능을 지원한다고 합니다. 물론 React처럼 Build는 꼭! 필요한 과정이라고 할 수 있죠. 그외의 기능에 대해서는 ``SamuraiHtmlRenderStyle`` 를 통해서 추가적으로 확장이 가능하다고 합니다.

1. CSS 적용한 사례
```html
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../css/normalize.css"/>
        <link rel="stylesheet" type="text/css" href="../css/main.css"/>
    </head>
</html>
```
2. Style 적용 사례
```html
<html>
	<body>
		<p style="color: red;">
          	Hello, world!
      	</p>
	</body>
</html>
```
3. class를 이용해 ui layout을 적용한 사례
```html
<html>
    <body>
        <div class="tab-bar">
            <div class="tab">Popular</div>
            <div class="tab">Debuts</div>
            <div class="tab">Everyone</div>
        </div>
        <style>
            .tab-bar {
                display: block;
                width: 100%;
                height: 34px;
                background-color: #e5508c;
                /* box-shadow: 0px 0.5px 0.5px black; */
                z-index: 2;
            }

            .tab {
                float: left;
                display: block;
                width: 33.33%;
                height: 34px;
                font-size: 14px;
                line-height: 34px;
                color: #fff 0.75;
                text-align: center;
                font-weight: normal;
            }
            ...
        </style>
    </body>
</html>
```
합치는 일도 간단하게 html을 그대로 사용하면 된다고 합니다. 첫번째 소스는 보통 아래와 같이 작성된다고 합니다.

		- (void)viewDidLoad
		{
		    [super viewDidLoad];
		}

그런데 Samurai에서는 WOW, 이렇게 Html을 직접 불러서 사용이 가능하다고 하네요. 앞에 내용에서는 IOS APP 개발에 대해서 지식이 거의 없어서 별거 아니구나 했지만.. 여기서 한번 놀랍다는 생각이 드는군요. 이제 IOS App개발에 대한 부담이 많이 줄어들지 않을까?
그런데 의문점이 한가지 더 생기더군요... Event Handling을 어떻게 할까? 해답에 대한 내용도 잘 정리가 되어 있었습니다.

```
		@implementation MyViewController

		- (void)viewDidLoad
		{
		    [self loadViewTemplate:@"/www/html/dribbble-index.html"];
		//  [self loadViewTemplate:@"http://localhost:8000/html/dribbble-index.html"];
		}

		- (void)dealloc
		{
		    [self unloadViewTemplate];
		}

		- (void)onTemplateLoading {}
		- (void)onTemplateLoaded {}
		- (void)onTemplateFailed {}
		- (void)onTemplateCancelled {}

		@end
```

만약에 웹에서 처럼 click Event를 Handling하기 위해서는 event function을 정의하고 onclick에 대항 function을 호출 하는 구조로 실행하는 것이 일반적일 것입니다. samurai-native에서도 마찬가지였습니다.

- view 파일
```html
		<div onclick="signal('hello')">
		    Click here
		</div>
		<div onswipe-left="signal('next')" onswipe-right="signal('prev')">
		    Swipe left or right
		</div>
```

- view Controller 파일
```
		@implementation MyViewController

		handleSignal( hello )
		{
		    [self something];
		}

		handleSignal( prev )
		{
		    [self something];
		}

		handleSignal( next )
		{
		    [self something];
		}

		@end
```

samurai에서 쓰는 용어 인지 IOS APP개발에서 쓰는 용어인지 정확하지는 않습니다만 Signal이라고 합더군요. 따라서 Signal에 호출하고자 하는 Name값 같은 것을 이용하면 된다고 합니다. Data는 그럼 어떻게 넘길까?에 대한 의문도 생겼지만 Samurai에서는 parameter를 직접 function에 넘기기 보다는 객체에 있는 값을 직접 Access하는 형식 같습니다.

### Data Binding
```html
	 <html>
	    <body>

	        ...

	        <div name="author">
	            <img name="avatar"/>
	            <div>
	                <div name="title"/>
	                <div>by <span name="name"/></div>
	            </div>
	        </div>

	        ...

	    </body>
	</html>
```
html이 위와 같이 작성이 되어 있다면... ViewController에서는 해당 DOM객체의 ``name``값을 이용해서 값을 가져오게 했더군요
```
	@implementation MyViewController

	...

	- (void)reloadData
	{
	    self[@"author"] = @{
	        @"avatar" : "xxx.jpg",
	        @"title"  : @"Hello",
	        @"name"   : @"World"
	    };
	}

	@end
```
Readme를 통해서 더 많은 내용들이 작성되어 있습니다. 꼭 방문해 보시길 바랍니다.
전체적으로 Samurai-native에 대해서는 꽤 긍정적으로 평가됩니다. 그 동안 Standard Web에만 익숙해져 있던 사람들도 IOS APP개발에 러닝커브가 그리 높지 않게 만들어주는 이점을 주고 있는 것 같습니다.

  [Roadmap](https://github.com/hackers-painters/samurai-native/wiki/TodoList)

 또한 꽤 오랜시간을 준비하여 왔다는 흔적과 그에 대한 output 품질이 높아 보였습니다.  감사합니다.


##License

  samurai-native is licensed under the MIT License.
