# node-osmosis

이번 주 첫 노드 프로젝트네요..

node-osmosis 는 HTML/XML 를 파싱 해주는 web scraper입니다.

html 패턴 을 간략히 적어주면 C로 작성된 빠른 xml파서가 동작하며 해당 데이터를 긁어와 줍니다.

검색 인덱스 로봇으로도 활용이 가능 할 것 같구요..

전 이번주에 이걸로 webtoon 크롤러 나 만들어봐야겠군요

예제 코드 첨부 하겠습니다.
``` javascript
var osmosis = require('osmosis');

osmosis
.get('www.craigslist.org/about/sites')
.find('h1 + div a')
.set('location')
.follow('@href')
.find('header + div + div li > a')
.set('category')
.follow('@href')
.find('p > a', '.totallink + a.button.next:first')
.follow('@href')
.set({
  'title':        'section > h2',
  'description':  '#postingbody',
  'subcategory':  'div.breadbox > span[4]',
  'date':         'time@datetime',
  'latitude':     '#map@data-latitude',
  'longitude':    '#map@data-longitude',
  'images[]':     'img@src'
})
.data(function(listing) {
  // do something with listing data
})
```
 - 페이지 링크: [node-osmosis](https://github.com/rc0x03/node-osmosis)
