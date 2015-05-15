# ElasticDownload
- 페이지링크: [ElasticDownload](https://github.com/Tibolte/ElasticDownload)

다운로드 되는 스트림의 유량을 체크해 주고 상태를 업데이트 해주는 재미있는 모듈이네요.

샘플 소스를 한번 보면 더 쉽게 이해가 되실 듯해서 먼저 보겠습니다.
```
new Handler().post(new Runnable() {
    @Override
    public void run() {
        mElasticDownloadView.startIntro();
    }
});

new Handler().postDelayed(new Runnable() {
    @Override
    public void run() {
        mElasticDownloadView.setProgress(45);
    }
}, 2*ProgressDownloadView.ANIMATION_DURATION_BASE);

new Handler().postDelayed(new Runnable() {
    @Override
    public void run() {
        mElasticDownloadView.fail();
    }
}, 3*ProgressDownloadView.ANIMATION_DURATION_BASE);

return true;
        }
```
progress 상태를 조절할 수 있는 기능까지 제공하고 꽤나 이쁜 상태바로 설계가 되어 있네요.

성공일 경우

![screenshot_success.png](https://raw.githubusercontent.com/Tibolte/ElasticDownload/master/success.gif)

실패일 경우

![screenshot.png](https://raw.githubusercontent.com/Tibolte/ElasticDownload/master/fail.gif)
