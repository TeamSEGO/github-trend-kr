# 23. gun

페이지 링크 : https://github.com/amark/gun

가장 쉬운 데이터베이스를 만드는 것이 gun 프로젝트의 목표입니다.

gun은 크게 1) 데이터를 저장하고 2) 데이터를 불러오는 기능이 있습니다.


아래의 예제처럼 gun을 이용하면 데이터를 짝 지어 저장할 수 있고

```javascript
gun.set({
  username: "marknadal",
  name: "Mark Nadal",
  email: "mark@gunDB.io"
}).key('usernames/marknadal');
```

관련있는 데이터들을 쉽게 불러올 수 있습니다.
```javascript
gun.load('usernames/marknadal').get(function(user){
  console.log(user.name); // Prints `Mark Nadal` to the console
});
```
즉, gun이 `usernames/marknadal`를 체크해서 이것과 관련있는 오브젝트를 return 합니다.

코드 역시 간단하기 때문에 쉽게 커스터마이즈 및 확장이 가능합니다.
데이터에 대해 관심있는 분이라면 이 프로젝트를 보시면 도움이 될 것 같습니다.
