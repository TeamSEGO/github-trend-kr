# node-osmosis

 - 페이지 링크: [node-osmosis](https://github.com/rc0x03/node-osmosis)

 지금 소개하는 node-osmosis는 웹 사이트 크롤링을 위한 좋은 도구입니다. scraper라고 표현을 하는데요

 jquery, cheerio,jsdom 같은 node.js 에서 많이 다루는 Dom manipulation도구들이 없어도 사용할 수 있다!

 라는 것을 자랑거리로 하고 있습니다.

 하지만, libxml 같은 c의 xml 파서들을 사용하기 때문에 POSIX환경이 아니라면 사용할 때 불편함은 예상됩니다.

 실제로 소스를 돌려보면 상당히 빠르게 실행이 됩니다.

 특별히 소스의 링크를 따라가면서 그 안에 있는 페이지들을 긁어오는 부분은 생각보다 잘 짜여져 있어서

 크롤링 하는 도구로는 손색이 없어보입니다.

 아직 follow, set, get 같은 문법은 손에 익숙치 않아서 버벅이는데 예제의 링크를 그대로 따라해 보면 craiglist
 의 게시물들을 아주 손쉽게 크롤링해서 뿌려주는걸 확인할 수 있습니다.

 ```
 (중간 부분 발췌 )
 { location: 'birmingham',
category: 'computer',
title: 'Appointment Setters (Work From Home)',
description: 'Work from home setting appointments. Leads given, $125 per closed appointment.\n\nYou set the appointment, I close the sale. Easy job, great product - good phone leads.\n\nSet 1 closed appointment per day and make $625 per week.',
subcategory: undefined,
date: '2015-04-15T09:14:26-0500',
latitude: undefined,
longitude: undefined,
images: [] }
{ location: 'birmingham',
category: 'computer',
title: 'Day trading work from home opp. (Auburn)',
description: 'Anyone can trade stocks and options if they are guided through it. This is a game changer! Reply to find out more. Must be 18+ and Coachable.',
subcategory: undefined,
date: '2015-03-25T12:34:41-0500',
latitude: undefined,
longitude: undefined,
images: [] }
{ location: 'birmingham',
category: 'computer',
title: 'Appointment Setters (Work From Home)',
description: 'Work from home setting appointments. Leads given, $125 per closed appointment.\n\nYou set the appointment, I close the sale. Easy job, great product - good phone leads.\n\nSet 1 closed appointment per day and make $625 per week.',
subcategory: undefined,
date: '2015-04-15T09:14:40-0500',
latitude: undefined,
longitude: undefined,
images: [] }
{ location: 'birmingham',
category: 'computer',
title: 'I have a stock market question (muscle shoals)',
description: 'If you had a team of expert traders telling you what they trade on a weekly basis would you invest in the stock market? Anyone can trade stocks and options if they are guided through it. This is a game changer! Reply to find out more. Must be 18+ and Coachable.',
subcategory: undefined,
date: '2015-03-25T13:04:53-0500',
latitude: undefined,
longitude: undefined,
images: [] }
(후략)
 ```
