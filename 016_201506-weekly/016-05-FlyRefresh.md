# FlyRefresh

 - 페이지 링크: https://github.com/race604/FlyRefresh

![flyrefresh](https://d13yacurqjgara.cloudfront.net/users/384313/screenshots/2067564/replace.gif)

[Dribbble](https://dribbble.com/shots/2067564-Replace)에 [Zee Youn](https://dribbble.com/zeeyoung)이라는 유저가 올린 리스트 리프레쉬 애니메이션 컨셉을 안드로이드로 실제 구현한 작품(!)입니다. Dribbble에서의 폭발적인 반응을 마치 예전부터 준비했다는 듯이 금새 구현을 해놓았네요. 앞으로 많은 모바일 개발자들이 UI 컨셉을 Dribbble에서 얻어 올 것 같습니다.

Gradle dependency 추가:

```gradle
dependencies {
   compile 'com.race604.flyrefresh:library:1.0.1'
}
```

`layout.xml`에서의 사용예제:

```xml
<com.race604.flyrefresh.FlyRefreshLayout
  android:id="@+id/fly_layout"
  android:layout_width="match_parent"
  android:layout_height="match_parent">

    <android.support.v7.widget.RecyclerView
      android:id="@+id/list"
      android:layout_width="match_parent"
      android:layout_height="match_parent"
      android:paddingTop="24dp"
      android:background="#FFFFFF"/>
</com.race604.flyrefresh.FlyRefreshLayout>
```

