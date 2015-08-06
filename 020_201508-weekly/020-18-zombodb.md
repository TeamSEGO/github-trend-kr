# ZomboDB
  - 페이지 링크 : https://github.com/zombodb/zombodb

ZomboDB는 Elasticsearch의 index를 이용하여 만든 full-text search를 지원하는 postgres extension입니다.
겉으로 보기에 ZomboDB의 index는 Postgres와 전혀 다르지 않고 INSERT, UPDATE, DELETE, COPY, VACUUM 모두 지원합니다.
설치를 위해서는 아래와 같은 프로그램들이 필요합니다.    

![alt text](https://raw.githubusercontent.com/TeamSEGO/github-trend-kr/master/img/20-13-1.PNG)

참고사항으로 Linux와 OS X에서 테스트는 됐지만 window에서 서포트가 될지는 확실히 않다고 합니다.

Readme에서 밝히는 사용법은 간단한데요.

Extension을 설치하고
```
CREATE EXTENSION zombodb;
```
Table을 생성하고
```
CREATE TABLE books (
    book_id serial8 NOT NULL PRIMARY KEY,
    author varchar(128),
    publication_date date,
    title phrase,     -- 'phrase' is a DOMAIN provided by ZomboDB
    content fulltext  -- 'fulltext' is a DOMAIN provided by ZomboDB
);

-- insert some data
```
Index를 생성하고
```
CREATE INDEX idxbooks ON books
                   USING zombodb (zdb(books))
                   WITH (url='http://localhost:9200', shards=5, replicas=1);
```
쿼리를 날리면 됩니다.
```
SELECT * FROM books WHERE zdb(books) ==> 'title:(catcher w/3 rye)
                                            and content:"Ossenburger Memorial Wing"
                                             or author:Salinger*';
```

Postgres의 Query 형태를 따르면서 elasticsearch의 full-text search 기능을 대부분 사용할 수 있다는 것이 큰 장점인 것 같습니다. (Github Readme에 제공되는 기능과 안되는 기능이 명시되어 있으니 참고바랍니다.)
