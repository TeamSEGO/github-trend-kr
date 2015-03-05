#gRPC-Go

[![Build Status](https://travis-ci.org/grpc/grpc-go.svg)](https://travis-ci.org/grpc/grpc-go) [![GoDoc](https://godoc.org/google.golang.org/grpc?status.svg)](https://godoc.org/google.golang.org/grpc)

The Go implementation of [gRPC](https://github.com/grpc/grpc)

설치(Installation)
------------

이 package를 설치하기 위해서는 GO(golang) 1.4 version으로 설치 및 GO workspace를 setup 해야한다. 

GOlang 설치에 대해서 자세한 사항은 참고사이트에서 확인을 바랍니다. 

간략히 말씀드리면, Golang은 설치시 설치 위치를 GOROOT로 workspace를 GOPATH로 PATH 설정을 하도록 가이드 합니다. 

gRPC설치는 아래 명령문을 실행하면 간단히 설치가 됩니다.

```
$ go get google.golang.org/grpc
```

문서(Documentation)
-------------
상세한 설명은 [grpc-common repository](http://github.com/grpc/grpc-common)에서 예시와 함께 확인 할 수 있다.

현재 상태(Status)
------
Alpha Version - ready for early adopters.

마치 당신은 early adopter라고 도발하는 듯한..


참고 사이트 
------
GOlang - https://code.google.com/p/golang-korea/wiki/GoInstall
Golang 잘사용하는 방법 - https://code.google.com/p/golang-korea/wiki/EffectiveGo
Golang 처음 따라하기 - https://golang.org/
