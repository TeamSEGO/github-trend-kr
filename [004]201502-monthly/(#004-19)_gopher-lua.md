# 19. gopher-lua

페이지 링크 : https://github.com/yuin/gopher-lua  

GopherLua는 간단히 말하자면 Go에서 Lua를 돌리기 위한 컴파일러인데요.  
Lua가 가지고 있는 확장 언어적 특성을 Go에서 십분 발휘할 수 있도록 도와준다고 합니다.  

![이미지](../img/004-19-01.png)  

가장 큰 특징은 최소한의 메모리 사용인데요,  
놀랍게도 측정결과 Go에서 사용하는 다른 스크립트 언어들보다 20배나 빠르답니다.  

![이미지](../img/004-19-02.png)

성능이 좋다고 사용법이 어려울거란 편견은 버려주세요, 보시는 바와 같이 아주 간단합니다.  
한 줄 만에 설치 해주시고

```javascript
go get github.com/yuin/gopher-lua
```  

사용처에서 import만 해주시면 
```javascript
import (
    "github.com/yuin/gopher-lua"
)
```
Go 언어 어디서든 사용이 가능합니다.
