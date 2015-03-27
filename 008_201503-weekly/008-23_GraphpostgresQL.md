# GraphpostgresQL -- a graph interface to relational data

페이지링크 : https://github.com/solidsnack/GraphpostgresQL


### GraphpostgresQL -- 연관인는 데이터의 그래프 인터페이스!!!

GraphpostgresQL is inspired by Facebook's [`graphql`][graphql]. By using table
introspection, GraphpostgresQL is able to follow foreign keys and index into
complex datatypes like `json`, `jsonb` and `hstore`.

GraphpostgresQL은 페이스북의 [`graphql`][graphql]에 영향을 받아 만들어 졌습니다.
테이블의 연관관계를 이용해 GraphpostgresQL은 foreign key와 복잡한 데이터타입을 가진 index를 가지고 옵니다.

[graphql]: https://www.npmjs.com/package/graphql


### 컨셉

GraphpostgresQL은 
GraphpostgresQL is alpha quality and has undergone neither extensive
optimization nor comprehensive testing. To use it for production workloads
would needlessly tempt fate.

GraphpostgresQL은 확장된 최적화도 종합적인 테스틷도 필요하지 않다.

### GraphpostgresQL설치

`psql`을 사용해, `graphql`스키마 파일을 불러옵니다 :

```sql
\i graphql.sql
```

graphql의 모든 것은 `graphql`의 스카마를 기반으로 만들어졌습니다.
GraphpostgresQL는 어떤 확장이나 `search_path`의 변경이 없습니다.
GraphpostgresQL의 구버전이 로드 된다면, 새로운 버전이 재설치될 것 입니다.


### GraphpostgresQL의 사용

쿼리를 생성하기 위해서, `graphql.to_sql(text)`를 사용합니다.:

```sql
SELECT graphql.to_sql($$
  user("f3411edc-e1d0-452a-bc19-b42c0d5a0e36") {
    full_name,
    friendship
  }
$$);
```

Which should result in something like:ㅔ

```sql
SELECT to_json("sub/2") AS "user"
  FROM "user",
       LATERAL (
         SELECT json_agg("user") AS friendship
           FROM "user"
           JOIN friendship ON (("user".id) = (friendship.second))
          WHERE (friendship.first)
              = ('f3411edc-e1d0-452a-bc19-b42c0d5a0e36'::uuid)
       ) AS "sub/1",
       LATERAL (
         SELECT "user".full_name, "sub/1".friendship
       ) AS "sub/2"
 WHERE (("user".id) = ('f3411edc-e1d0-452a-bc19-b42c0d5a0e36'::uuid))
```

실행하기 위해, `graphql.to_sql(text)` 대신`graphql.run(text)`를 사용하세요.


### GraphpostgresQL의 삭제

GraphpostgresQL의 삭제는 쉽습니다.:

```sql
DROP SCHEMA IF EXISTS graphql CASCADE;
```


### 로드맵
**GraphpostgresQL64**에서는 확정된 셀렉터(예를 들면, JSON 컬럼의 셀렉션 같은)와 파라미터를 받는 인터페이스, 그리고 저장과 재실행쿼리들을 선보일 것입니다.
**GraphpostgresQL3D**에서는 확장된 파싱과 훅 그리고 전반적으로 더 많은 모듈과 함께 PL/V8을 선보일 것입니다.
