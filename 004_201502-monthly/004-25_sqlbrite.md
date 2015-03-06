# SQLBrite

페이지 링크 : https://github.com/square/sqlbrite

SQL 작동에 대한 반응형 스트림 시멘틱을 소개하는 SQLiteOpenHelper  의 경량 랩퍼(wrapper)


# 사용법
아래와 같이 SQLiteOpenHelper 인스턴스를 SqlBrite 로 랩핑한다.

		SqlBrite db = SqlBrite.create(helper);


The SqlBrite.createQuery 메소드는   SQLiteOpenHelper.rawQuery 와 비슷하다. 다른 점은 The SqlBrite.createQuery  은  변화를 읽기 위해 테이블의 추가적인 파라메타를 넣을 수 있다는 점이다. 
리턴된 Observable<Query> 의 Subscribe 함수는  쿼리에게 실행하라고 알릴 것이다. 


		Observable<Query> users = db.createQuery("users", "SELECT * FROM users");
		users.subscribe(new Action1<Query>() {
		  @Override public void call(Query query) {
		    Cursor cursor = query.run();
		    // TODO parse data...
		  }
		});


전통적인 `rawQuery`와 다르게 , 특정 테이블의 업데이트는 추가적인 공지를 발생시킨다. 
이것은  데이터를  추가, 수정 혹은 삭제할 때,  subscribed query 가  즉시 새로운 데이터를 업데이트 한다는 것을 의미한다. 
		
		
		final AtomicInteger queries = new AtomicInteger();
		users.subscribe(new Action1<Query>() {
		  @Override public void call(Query query) {
		    queries.getAndIncrement();
		  }
		});
		System.out.println("Queries: " + queries.get()); // Prints 1
		
		db.insert("users", createUser("jw", "Jake Wharton"));
		db.insert("users", createUser("mattp", "Matt Precious"));
		db.insert("users", createUser("strong", "Alec Strong"));
		
		System.out.println("Queries: " + queries.get()); // Prints 4



이전 예제에서, 우리는 `SqlBrite` 오브젝트 "db"   를 insert 할때 재사용했다. 모든 insert, update, 
delete 기능들은 subscribers 에 정확히 알려주기 위해  이 오브젝트를 통했다. 

updates 를 중지하기 위해서는 리턴된  `Subscription`  를 Unsubscribe 한다. 

		final AtomicInteger queries = new AtomicInteger();
		Subscription s = users.subscribe(new Action1<Query>() {
		  @Override public void call(Query query) {
		    queries.getAndIncrement();
		  }
		});
		System.out.println("Queries: " + queries.get()); // Prints 1
		
		db.insert("users", createUser("jw", "Jake Wharton"));
		db.insert("users", createUser("mattp", "Matt Precious"));
		s.unsubscribe();
		
		db.insert("users", createUser("strong", "Alec Strong"));
		
		System.out.println("Queries: " + queries.get()); // Prints 3



퀴리가 단지 정규 RxJava Observable objects 이기 때문에,   작동자(operators )는 subscribers 에게 
공지의 주기를 알려주는데  사용될 수 있다. 
		
		users.debounce(500, MILLISECONDS).subscribe(new Action1<Query>() {
		  @Override public void call(Query query) {
		    // TODO...
		  }
		});

RxJava 작동자의 파워는 수많은 쿼리와 데이터 변화를 조합하고, 필터하고, 트리거링하는데 이용된다.

##사상


SqlBrite 의 책임(responsibility)은  테이블의 업데이트에 대한 공지를  조정하고 구성하는 메커니즘이다. 그래서 데이터가 변화하자 마자 쿼리를 업데이트 할 수 있다. 

 이 라이브러리는 ORM 이 아니다  안전한 메커니즘도 아니다.  이것을 Gson 을 사용하는 동일한 POJOs 를 serialize 할 수도 없다. 이것은 database migrations 할수도 없다.
차후 기능에 추가 될 예정이지만, 지금은 없다.
 

##Download

compile 'com.squareup.sqlbrite:sqlbrite:0.1.0'


개발버전 Snapshots 은 Sonatype 의 snapshots repository 에서 이용가능하다.


##License
 Apache License, Version 2.0





