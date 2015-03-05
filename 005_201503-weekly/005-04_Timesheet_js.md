# Timesheet.js

페이지 링크 : https://github.com/sbstjn/timesheet.js

이번에 소개해드릴 것은 Timesheet.js라는 자바스크립트 라이브러리 입니다. 간단한 자바스크립트 작성을 통해 HTML Time sheets를 생성할 수 있습니다. 

사용법은 간단합니다. 
```html
 dist/timesheet.js  
 dist/timesheet.css  
```
위의 두 파일을 HTML 파일에 include 시킨 후,
```html
<div id="timesheet"></div>
```

HTML 에 Time sheet를 포함시킬 위치에 위 코드를 삽입하고,
javascript로 아래와 같이 작성하면 됩니다. 

```html
new Timesheet('timesheet', 2002, 2013, [
  ['2002', '09/2002', 'A freaking awesome time', 'lorem'],
  ['06/2002', '09/2003', 'Some great memories', 'ipsum'],
  ['2003', 'Had very bad luck'],
  ['10/2003', '2006', 'At least had fun', 'dolor'],
  ['02/2005', '05/2006', 'Enjoyed those times as well', 'ipsum'],
  ['07/2005', '09/2005', 'Bad luck again', 'default'],
  ['10/2005', '2008', 'For a long time nothing happened', 'dolor'],
  ['01/2008', '05/2009', 'LOST Season #4', 'lorem'],
  ['01/2009', '05/2009', 'LOST Season #4', 'lorem'],
  ['02/2010', '05/2010', 'LOST Season #5', 'lorem'],
  ['09/2008', '06/2010', 'FRINGE #1 & #2', 'ipsum']
]);
```
간단하죠? 라이선스는 MIT 라이선스랍니다.  

![이미지](../img/005$04$01.gif)