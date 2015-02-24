
## memory-stats.js

[stats.js](https://github.com/mrdoob/stats.js/)와 비슷하 JS Memory monitoring

* stats.js는 javascript Perfomance Monitor 이다. FPS, MS등을 표기할 수 있다.


![image](http://i.imgur.com/eUCFcAH.gif)

### 사용법:

1. Chrome을 실행시킨다. [with](http://www.chromium.org/developers/how-tos/run-chromium-with-flags) `--enable-precise-memory-info`
    - `--enable-precise-memory-info` 옵션을 꼭 주란다. 
    - 그렇지 않으면, 메모리 Perfomance가 별로 유용하지 않은 것들이 담길것이라고 하는데... 잘 모르겠다.
1. memory.stats.js 파일을 html에 include 시키고, 
1. 객체화 한다. (`stats = new MemoryStats()`)
1. `stats.element`를 DOM에 추가한 다음,  
1.  주기적으로 `stats.update()` 를 실행한다.

즉, 아래와 같이 작성한다.:

```js
    var stats = new MemoryStats();

    stats.domElement.style.position = 'fixed';
    stats.domElement.style.right        = '0px';
    stats.domElement.style.bottom       = '0px';
    
    document.body.appendChild( stats.domElement );

    requestAnimationFrame(function rAFloop(){
        stats.update();
        requestAnimationFrame(rAFloop);
    });
```

flag('--enable-precise-memory-info')와 함께 Chrome을 실행시키고 demo폴더의 'index.html'을 실행시키면 동작하는 모습을 확인 할 수 있다.

# Framework adaptors

* Angular component by [@livingobjects](https://github.com/livingobjects): https://github.com/livingobjects/angular-memory-stats
* Ember addon by [@stefanpenner](https://github.com/stefanpenner): https://github.com/stefanpenner/ember-browser-stats
* Rails gem by [@jurre](https://github.com/jurre):
https://github.com/jurre/memory-stats-js-rails
* Polymer element by [@ragingwind](https://github.com/ragingwind): https://github.com/ragingwind/memory-stats-element
* Gulp plugin by [@tshaddix](https://github.com/tshaddix): https://github.com/tshaddix/gulp-memory-stats
* Web Components element by [@jmalonzo](https://github.com/jmalonzo): https://github.com/jmalonzo/memory-stats-element

# 북마크(Bookmarklet)

Bookmarklet Code : 북마크 하고 싶으신 분들은 아래 코드를 페이지에 넣으시면 됩니다. 

```js
javascript:(function(){var script=document.createElement('script');script.src='https://rawgit.com/paulirish/memory-stats.js/master/bookmarklet.js';document.head.appendChild(script);})()
```

Test결과 Chrome이외에 Explorer, firefox에서는 동작하지 않는 단점이 있다. 
FPS, MS등과 함께 이용하면 사이트평가, 브라우져 평가등에 이용할 수 있겠지만.... 아직은... 

* FPS : 초당 rendering 된 Frame 수. 높을수록 좋음
* MS  : Frame Rendering시 필요한 milliseconds. 낮을 수록 좋음
