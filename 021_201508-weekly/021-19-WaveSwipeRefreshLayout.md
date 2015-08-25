# WaveSwipeRefreshLayout

- 페이지 링크: https://github.com/recruit-lifestyle/WaveSwipeRefreshLayout

이 프로젝트는 도쿄에 위치한 recruit-lifestyle 이라는 회사의 공개 프로젝트 입니다.

다른 공개된 프로젝트들도 안드로이드 소스들이군요. 안드로이드 개발자 라면 한번쯤 살펴보시면 좋을 것 같아요 :)

[Recruit Lifestyle 프로젝트 리스트](https://github.com/recruit-lifestyle)

![image](https://github.com/recruit-lifestyle/WaveSwipeRefreshLayout/raw/master/sc/animation.gif)

clone하여 제 넥서스 5 (Android 5.1.1)에서 띄워보았는데요, 아주 잘 동작합니다. :)

현재 작업하고 계시는 안드로이드 프로젝트에 적용해 보시려면 아래 방법대로 사용하시면 됩니다.


#### 사용법
1) 먼저 build.gradle 파일에 아래와 같이 설정해 줍니다.
```java
repositories {
    maven {
        url "https://jitpack.io"
    }
}

dependencies {
  compile 'com.github.recruit-lifestyle:WaveSwipeRefreshLayout:1.2'
}
```  

2) ListView를 가지고 있는 XML파일에 아래와 같이 적어 줍니다.
```java
<jp.co.recruit_lifestyle.android.widget.WaveSwipeRefreshLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/main_swipe">

      <ListView
          android:id="@+id/main_list"
          android:layout_width="match_parent"
          android:layout_height="match_parent"/>

</jp.co.recruit_lifestyle.android.widget.WaveSwipeRefreshLayout>
``` 

3) 동작하기를 원하는 Activity 클래스에 아래와 같이 적어주어야 정상 동작이 됩니다.
```java
mWaveSwipeRefreshLayout = (WaveSwipeRefreshLayout) findViewById(R.id.main_swipe);
mWaveSwipeRefreshLayout.setOnRefreshListener(new WaveSwipeRefreshLayout.OnRefreshListener() {
  @Override public void onRefresh() {
    // Do work to refresh the list here.
    new Task().execute();
  }
});

private class Task extends AsyncTask<Void, Void, String[]> {
  ...
  @Override protected void onPostExecute(String[] result) {
    // Call setRefreshing(false) when the list has been refreshed.
    mWaveSwipeRefreshLayout.setRefreshing(false);
    super.onPostExecute(result);
  }
}
```