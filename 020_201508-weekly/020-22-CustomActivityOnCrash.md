# CustomActivityOnCrash
- 페이지 링크 : https://github.com/Ereza/CustomActivityOnCrash

안드로이드 앱을 사용하다보면 "미안한데 앱 다운됐어요." 하는 메세지와 함께 앱이 그냥 꺼져버렸던 경험 한번씩은 아마 다 해보셨을 겁니다. CustomActivityOnCrash는 그런 상황을 좀 더 친절하게 풀어줍니다.

![alt](https://github.com/Ereza/CustomActivityOnCrash/raw/master/images/frontpage.png)

설치방법은 build.gradle 파일에 dependency를 설정하고
```
dependencies {
    compile 'cat.ereza:customactivityoncrash:1.3.0'
}
```
application class에 아래 코드를 추가합니다.
```
@Override
public void onCreate() {
    super.onCreate();

    //Install CustomActivityOnCrash
    CustomActivityOnCrash.install(this);

    //Now initialize your error handlers as normal
    //i.e., ACRA.init(this);
    //or Crashlytics.start(this);
}
```
앱이 Crash되는 상황을 만들면 테스트해 볼 수 있습니다.
```
throw new RuntimeException("Boom!");
```
