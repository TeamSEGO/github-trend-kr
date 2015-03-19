Universal Android Music Player Sample
=====================================

왜 Universal ? 거창하게 쓰긴 했는데...이 Sample은 Android phones, tablets, [Android Auto](http://www.android.com/auto/), [Android Wear](http://www.android.com/wear/)이나  [Cast devices](http://www.google.com/cast/)에서도 동일한 사용자 경험을 제공해 주는 오디오 미디어 앱을 어떻게 구현하는지를 
보여주는 샘플이다.  

잠깐 설명을 더하자면...

[Android Auto](http://www.android.com/auto/)는 네비게이션과 비슷한 것

[Android Wear](http://www.android.com/wear/)는 잘 아시듯 시계 그리고 ? 

[Cast devices](http://www.google.com/cast/)는 아마 Chrome Cast로 좀 더 알려져 있는 것 

자세한 내용은 링크를 걸어 드렸으니 한번 방문하셔서 확인 해보시길 !!

필요 사항
--------------

- Android SDK v21 .......Lollipop? 랄리팝

자! 시작 해보려면...
---------------

샘플은 Gradle Build system을 이용한다고 한다. 해보니..내 경우에는 Gradle로 빌드시에 
library 참조에서 뭔가 오류가 있는데 어찌되었건 요즘 Google은 Gradle 빌드를 참 많이 사용한다.

그래서 빌드를 하려면 Android studio를 이용하시는 분의 경우 자체적으로 Gradle Build기능을 제공하고 있으니
Import Project만 하시면 되며.. Gradle을 command하고 싶으신분은 "gradlew build" command 하시면 된다.  	

혹시 Proxy 문제가 있다면 ...

Windows의 경우 

Andorid Studio 설치 폴더의 bin에 가면 아래 두 파일 

- studio.exe.vmoptions
- studio64.exe.vmoptions


Mac의 경우 

Android studio 설치 폴더 하위의 bin 폴더에 아래 파일에 

- idea.vmoptions


Proxy Setting 값을 넣어 준다 !!

-Dhttps.proxyPort=your-value-here﻿
-Dhttps.proxyHost=your-value-here﻿﻿
-Dhttps.proxyUser=your-value-here
-Dhttps.proxyPassword=your-value-here

Screenshots
-----------

![Phone](screenshots/phone.png "On a phone")
![Lock screen](screenshots/phone_lockscreen.png "Lockscreen background and controls")
![Full screen player](screenshots/phone_fullscreen_player.png "A basic full screen activity")
![Cast dialog](screenshots/phone_cast_dialog.png "Casting to Google Cast devices")
![Android Auto](screenshots/android_auto.png "Running on an Android Auto car")

![Android Wear watch face](screenshots/android_wear_1.png "MediaStyle notifications on an Android Wear watch")
![Android Wear controls](screenshots/android_wear_2.png "Media playback controls on an Android Wear watch")

Support
-------

- Google+ Community: https://plus.google.com/communities/105153134372062985968
- Stack Overflow: http://stackoverflow.com/questions/tagged/android

If you've found an error in this sample, please file an issue:
https://github.com/googlesamples/android-UniversalMusicPlayer

Patches are encouraged, and may be submitted by forking this project and
submitting a pull request through GitHub. Please see CONTRIBUTING.md for more details.

License
-------

Copyright 2014 The Android Open Source Project, Inc.

Licensed to the Apache Software Foundation (ASF) under one or more contributor
license agreements.  See the NOTICE file distributed with this work for
additional information regarding copyright ownership.  The ASF licenses this
file to you under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License.  You may obtain a copy of
the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
License for the specific language governing permissions and limitations under
the License.
