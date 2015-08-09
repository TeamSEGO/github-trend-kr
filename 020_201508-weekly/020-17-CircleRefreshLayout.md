# CircleRefreshLayout

- 페이지 링크: https://github.com/tuesda/CircleRefreshLayout

![image](https://github.com/tuesda/CircleRefreshLayout/blob/master/gif/circlerefresh.gif)

작년 11월 [Dribble](https://dribbble.com/shots/1797373-Pull-Down-To-Refresh)에 한 유저가 화면 리프레쉬를 디자인했는데 역시 능력 개발자가 이것을 Base로 구현을 해놓았습니다.(역시...-_-)=b)

사용법 역시 간단합니다.
레이아웃에 아래처럼 설정해주시고


``` xml
<com.tuesda.walker.circlerefresh.CircleRefreshLayout
        xmlns:app="http://schemas.android.com/apk/res-auto"
        app:AniBackColor="#ff8b90af"
        app:AniForeColor="#ffffffff"
        app:CircleSmaller="6"
        android:id="@+id/refresh_layout"
        android:layout_width="match_parent"
        android:layout_height="match_parent">
        <ListView
            android:background="#ffffffff"
            android:id="@+id/list"
            android:layout_width="match_parent"
            android:layout_height="match_parent"></ListView>
    </com.tuesda.walker.circlerefresh.CircleRefreshLayout>
```  

Listener만 등록해주시면 됩니다.

``` java
mRefreshLayout.setOnRefreshListener(
                new CircleRefreshLayout.OnCircleRefreshListener() {
            @Override
            public void refreshing() {
                // do something when refresh starts
            }

            @Override
            public void completeRefresh() {
                // do something when refresh complete
            }
        });
```

참 쉽죠?
