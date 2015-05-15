# ijkplayer
- 페이지링크: [ijkplayer](https://github.com/Bilibili/ijkplayer)

ffplay 기반의 비디오 플레이어입니다.


- Common
 - 잘 쓰이지 않는 ffmpeg 컴포넌트들을 삭제하여, 바이너리 크기를 줄입니다.
 - 일부 온라인 비디오 버그에 대한 해결책 
- Android
 - platform: API 9~22
 - cpu: ARMv7a, x86, ARMv5 (not tested on real devices)
 - api: MediaPlayer-like
 - video output: NativeWindow
 - audio output: OpenSL ES, AudioTrack
 - hw decoder: MediaCodec
- iOS
 - platform: iOS 5.1.1~8.3.x
 - cpu: ARMv7, ARM64, i386, x86_64, (armv7s is obselete)
 - api: MediaPlayer.framework-like
 - video-output: OpenGL ES 2.0 (I420/YV12/NV12 shaders)
 - audio-output: AudioQueue, AudioUnit
 - hw decoder: VideoToolbox (iOS 8+)

라이선스는 LGPL 라이선스입니다.  