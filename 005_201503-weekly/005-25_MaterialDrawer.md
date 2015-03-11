#MaterialDrawer  [![Maven Central](../img/005-25-03.png)](https://maven-badges.herokuapp.com/maven-central/com.mikepenz.materialdrawer/library) [![Android Arsenal](../img/005-25-04.png)](https://android-arsenal.com/details/1/1526)

페이지 링크 : https://github.com/mikepenz/MaterialDrawer

**MaterialDrawer**라이브러리는 어플리케이션에 빠르고 쉽게 네비게이션 drawer 레이아웃의 생성을 돕는 것을 목표로 합니다.

여기에 아래 내용을 포함한 함수들을 훑어볼 수 있습니다.

- ** 빠른 통합**
- 빠르고 쉬운 api
- 구글의 Material Design 안내서를 따른다.
- 계속해서 색을 변경한다.
- AppCompat 지원 라이브러리를 사용한다.
- 색이 있는 상태바를 원하면 기본테마를 지원한다.
- 네비게이션 drawer는 항상 상태바 아래 있다.
- API Level 10이하에서 호환 가능하다.  
- 다양한 디폴트 dawer 아이템들이 딸려있다.
- 뱃지(badge) 지원한다.

#미리보기
##데모
여러분은 여기서 Material Drawer를 사용해 볼 수 있습니다.  [Google Play](https://play.google.com/store/apps/details?id=com.mikepenz.unsplash) (drawer를 사용한 오픈소스 어플리케이션입니다.)



##스크린샷
![Image](../img/005-25-01.png)  ![Image](../img/005-25-02.png)


#프로젝트에 Material Drawer 적용하기
##Maven을 사용하여 라이브러리 가져오기
MaterialDrawer 라이브러리는  [Maven Central](http://search.maven.org/#search|ga|1|g%3A%22com.mikepenz.materialdrawer%22)에 푸쉬되어 있기 때문에 프로젝트의  `build.gradle`에 다음 아래의 dependency를 추가하기만 하면 사용할 수 있습니다.

```javascript
compile('com.mikepenz.materialdrawer:library:1.0.2@aar') {
	transitive = true
}
```

##사용 방법
여기서 여러분들이 만들고 싶은 것들의 사용법을 빠르게 훑어보실 수 있습니다.

###최소 설정
####코드:
아래 코드는 이론적으로 하나의 선입니다:D. 이것은 빈 drawer를 생성합니다.
```java
new Drawer().withActivity(this).build()
```


###Toolbar의 사용예제
####코드:
```java
Drawer.Result result = new Drawer()
    .withActivity(this)
    .withToolbar(toolbar)
    .addDrawerItems(
	    new PrimaryDrawerItem().withName(R.string.drawer_item_home),
	    new DividerDrawerItem(),
	    new SecondaryDrawerItem().withName(R.string.drawer_item_settings)
    )
    .withOnDrawerItemClickListener(new Drawer.OnDrawerItemClickListener() {
    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id, IDrawerItem drawerItem) {
    	// do something with the clicked item :D
    }
    })
    .build();

//use the result object to get different views of the drawer or modify it's data
//some sample calls
result.setSelectionByIdentifier(1);
result.openDrawer();
result.closeDrawer();
result.isDrawerOpen();
result.addItem(..);

```

###ActionBar의 사용예제
####코드:
```java
new Drawer()
	.withActivity(this)
	.withTranslucentStatusBar(false)
	.addDrawerItems(
		//pass your items here
	)
	.build();
```

###Multiple Drawers의 사용예제
####코드:
```java
Drawer.Result result = new Drawer()
	.withActivity(this)
	.withToolbar(toolbar)
	.withHeader(R.layout.header)
	.addDrawerItems(
		//pass your items here
	)
	.build();

new Drawer()
	.withActivity(this)
    .withFooter(R.layout.footer)
    .withStickyFooter(R.layout.sticky_footer)
    .addDrawerItems(
    	//pass your items here
    )
    .withDrawerGravity(Gravity.END)
    .append(result);
```

###메서드 명세
####코드:
```java
new Drawer()
                //set the activity so we can inflate layouts automatically
                .withActivity(this)
                //set the toolbar to use with the drawer. will allow special stuff like ActionBarDrawerToggle
                .withToolbar(toolbar)
                //set the layout for the drawer manually. normally handled by the library
                .withDrawerLayout(VIEW|RES)
                //set the gravity for the drawer DEFAULT: START
                .withDrawerGravity(Gravity.END)
                //set this if you use the translucent statusBar feature DEFAULT: true
                .withTranslucentStatusBar(true)
                //set this to disable the ActionBarDrawerToggle, or pass a custom ActionBarDrawerToggle DEFAULT: true
                .withActionBarDrawerToggle(BOOLEAN|ActionBarDrawerToggle)
                //set the header for the drawer
                .withHeader(VIEW|RES)
                //set this to enable the onClick callback for the header
                .withHeaderClickable(true)
                //set this to disable the divider after the header DEFAULT: true
                .withHeaderDivider(false)
                //set the footer for the drawer
                .withFooter(VIEW|RES)
                //set this to enable the onClick callback for the footer
                .withFooterClickable(true)
                //set this to disable the divider before the footer DEFAULT: true
                .withFooterDivider(false)
                //set the sticky footer for the drawer (this one is always visible)
                .withStickyFooter(VIEW|RES)
                //set this if you want a onClick event as soon as you call .build() for the initial set DEFAULT: false
                .withFireOnInitialOnClick(true)
                //set the initial selected item. this is the position of the item. NOT the identifier
                .withSelectedItem(0)
                //set this to pass a custom ListView to the drawer. normally handled by the library
                .withListView(VIEW)
                //set this to pass a custom BaseDrawerAdapter to the drawer. normally handled by the library
                .withAdapter(BaseDrawerAdapter)
                //set one of this parameters to set the items for the drawer. not required if you pass your own adapter or even your own listView
                .withDrawerItems()
                .addDrawerItems()
                //set this to disable the auto-close of the drawer after onClick DEFAULT: true
                .withCloseOnClick(false)
                //set this to modify the delay to close the drawer. this is a "hack" to prevent lag after onClick DEFAULT: 150 / DISABLE: -1
                .withDelayOnDrawerClose(-1)
                //set one of these methods to set listeners for the drawer
                .withOnDrawerListener()
                .withOnDrawerItemClickListener()
                .withOnDrawerItemLongClickListener()
                .withOnDrawerItemSelectedListener()
                //set this method if you got a savedInstance (find more details in the sample application)
                .withSavedInstance()
                //set the width of the drawer FROM RES/DP/PX (just use one)
                .withDrawerWidthRes(R.dimen.material_drawer_width)
                .withDrawerWidthDp(240)
                .withDrawerWidthPx(1000)
                //set this if you use an actionBar and want also a translucent statusBar (really rare scenario) DEFAULT: false
                .withTranslucentActionBarCompatibility(true)
                //use one of those methods to finalize the drawer and to build it. append to add a second drawer to an existing drawer
                .build()
                .append(Drawer.Result)
```

###AndroidManifest.xml (선택)
drawer를 사용하는 어플리케이션이나 액티비티에 제공되는 테마를 사용할 수 있습니다. 테마는 다양한 안드로이드 버전을위한 많은 설정들을 포함하고 있습니다.

- MaterialDrawerTheme
- MaterialDrawerTheme.TranslucentStatus
- MaterialDrawerTheme.ActionBar
- MaterialDrawerTheme.ActionBar.TranslucentStatus
- MaterialDrawerTheme.Light
- MaterialDrawerTheme.Light.TranslucentStatus
- MaterialDrawerTheme.Light.ActionBar
- MaterialDrawerTheme.Light.ActionBar.TranslucentStatus
- MaterialDrawerTheme.Light.DarkActionBar
- MaterialDrawerTheme.Light.DarkActionBar.TranslucentStatus
- MaterialDrawerTheme.Light.DarkActionBar.ActionBar
- MaterialDrawerTheme.Light.DarkActionBar.ActionBar.TranslucentStatus
  


###styles.xml (선택)
여러분은 MaterialDrawer가 동작하기 하기 위해 제공되는 테마를 사용해야만 합니다.
어플리케이션에 빠른 맞춤 스타일을 생성하고 싶다면 아래색을 고쳐서 사용하세요.
```xml
	<!-- Material DEFAULT colors -->
    <color name="material_drawer_primary">#2196F3</color>
    <color name="material_drawer_primary_dark">#1976D2</color>
    <color name="material_drawer_primary_light">#BBDEFB</color>
    <color name="material_drawer_accent">#FF4081</color>
    <color name="material_drawer_window_background">#F9F9F9</color>
    <color name="material_drawer_background">#F9F9F9</color>
    <!-- Material DEFAULT text / items colors -->
    <color name="material_drawer_icons">#FFF</color>
    <color name="material_drawer_primary_text">#212121</color>
    <color name="material_drawer_secondary_text">#727272</color>
    <color name="material_drawer_hint_text">#B8B8B8</color>
    <color name="material_drawer_divider">#B6B6B6</color>
    <!-- Material DEFAULT drawer colors -->
    <color name="material_drawer_selected">#E8E8E8</color>
    <color name="material_drawer_selected_text">#2196F3</color>
```

#감사

- Mirosław Stanek - [GitHub](https://github.com/frogermcs)
	- For his InstaMaterial concept and the idea of inflating the drawerLayout [InstaMaterial Concept](http://frogermcs.github.io/InstaMaterial-concept-part-7-navigation-drawer/)

- Lunae Luman - [Behance](https://www.behance.net/gallery/18526001/Material-Wallpaper) for the Header Image

#개발자

* Mike Penz - http://mikepenz.com - <mikepenz@gmail.com>


#라이센스

    Copyright 2015 Mike Penz

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
