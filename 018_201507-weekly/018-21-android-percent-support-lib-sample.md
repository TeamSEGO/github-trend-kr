# android-percent-support-lib-sample

- 페이지 링크: https://github.com/JulienGenoud/android-percent-support-lib-sample

퍼센트 기반으로 레이아웃의 크기를 조절할 수 있는 안드로이드 라이브러리 입니다.
안드로이드 개발자라면 사용법과 예제코드를 보고 쉽게 따라할 수 있을 것 같습니다.

## simple result
![PercentRelativeLayout](https://cloud.githubusercontent.com/assets/1808854/8392086/dd20ee1e-1cdd-11e5-852e-795a0d00cc89.png)
## complex result
![PercentRelativeLayout Complex](https://cloud.githubusercontent.com/assets/1808854/8398283/22bd374c-1de8-11e5-9e74-f19ea46b8086.png)
<br>from https://gist.github.com/shekarshine/5458f697c02e5619b0e2





### 사용방법 :
just add percent support library to your project
```xml
dependencies {
    compile 'com.android.support:percent:22.2.0'
}
```

###지원되는 레이아웃 :

####PercentRelativeLayout
```xml
<android.support.percent.PercentRelativeLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">
    
    <View
        android:id="@+id/top_left"
        android:layout_width="0dp"
        android:layout_height="0dp"
        android:layout_alignParentTop="true"
        android:background="#ff44aacc"
        app:layout_heightPercent="20%"
        app:layout_widthPercent="70%" />

    <View
        android:id="@+id/top_right"
        android:layout_width="0dp"
        android:layout_height="0dp"
        android:layout_alignParentTop="true"
        android:layout_toRightOf="@+id/top_left"
        android:background="#ffe40000"
        app:layout_heightPercent="20%"
        app:layout_widthPercent="30%" />


    <View
        android:id="@+id/bottom"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_below="@+id/top_left"
        android:background="#ff00ff22"
        app:layout_heightPercent="80%" />
</android.support.percent.PercentRelativeLayout>
```

####PercentLinearLayout
```xml
<com.juliengenoud.percentsamples.PercentLinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">
     <View
        android:layout_width="0dp"
        android:layout_height="0dp"
        android:background="#ff44aacc"
        app:layout_heightPercent="10%"
        app:layout_widthPercent="60%"/>

    <View
        android:layout_width="0dp"
        android:layout_height="0dp"
        android:background="#ff4400cc"
        app:layout_heightPercent="10%"
        app:layout_widthPercent="70%"/>
</com.juliengenoud.percentsamples.PercentLinearLayout>
```

####PercentFrameLayout
```xml
<android.support.percent.PercentFrameLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">
        <!-- ... XML CODE -->
</android.support.percent.PercentFrameLayout>
```



###적용되는 속성 :

- heightPercent
- widthPercent
- marginBottomPercent
- marginEndPercent
- marginLeftPercent
- marginPercent
- marginRightPercent 
- marginStartPercent
- marginTopPercent

개발환경
--------------

- Android SDK v22
- Android Build Tools v22.0.1
- Android Percent Support Repository v22.2.0
- Android Support v4 Repository v22.2.0

according to the the manifest minsdk is v7 (android 2.1) 

####라이센스 Mit
