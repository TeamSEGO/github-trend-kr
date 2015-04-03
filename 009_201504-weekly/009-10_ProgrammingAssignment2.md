ProgrammingAssignment2
==================================================
- 페이지 링크: https://github.com/rdpeng/ProgrammingAssignment2

처음에 R 파일을 열어보고 음 뭐 이래? 하고 봤더니,

[Coursera의 R programming 강의 (Johns Hopkins Univ.)](https://www.coursera.org/course/rprog)

의 과제 repository 입니다. 

많이들 수강하시는건지, R에 관심이 뜨거운 것인지 다시 한번 github trend에 올라왔습니다!

새로운 학기는 4월 6일부터 시작한다 하니, coursera 강의 수강하시면서 이 repository의 과제를 풀어보시는 것도 좋을 것 같네요 : )

- - -

지난주

- ProgrammingAssignment2 는 잠재적으로 시간이 많이 소요되는 계산을 캐시할 수 있는 R함수를 작성하는 것입니다. 예를 들어 숫자벡터의 평균을 구하는 것은 빠른작업입니다. 그러나 매우 긴 벡터면(예: 루프인 경우) 반복해서 계산해야 합니다. 특히 평균을 계산하는 것은 시간이 오래걸릴 수 있습니다. 

- 벡터의 내용이 변경되지 않는 경우라고 가정한다면 다시 평균작업을 할 때 필요할 때마다 다시 계산 하는 것보다는 캐시에서 룩업하는 것이 더 빠를 수 있습니다. 

- 이 프로그램 할당에서는 R언어 지정 범위 규칙을 이용하여 R객체의 내부규칙을 위해 조작할 수 있는 방법에 대해 설명합니다.

### Example 1: 벡터의 평균

- 다른 코딩 예제에서 보통 쓰이는  `=`기호와는 달리 R에서는 값 할당을 `<<-` 표시로 할당합니다. 

1. 벡터의 값을 설정
2. 벡터의 값을 취득
3. 평균의 값을 설정
4. 평균의 값을 취득

```
 makeVector <- function(x = numeric()) {
        m <- NULL
        set <- function(y) {
                x <<- y
                m <<- NULL
        }
        get <- function() x
        setmean <- function(mean) m <<- mean
        getmean <- function() m
        list(set = set, get = get,
             setmean = setmean,
             getmean = getmean)
}
```

- 벡터의 평균을 계산하는 예입니다. 그러나 평균의 값을 처음 체크 함으로써 계산이 되있는 경우라면 그 과정을 생략할 수 있습니다.  

```
cachemean <- function(x, ...) {
        m <- x$getmean()
        if(!is.null(m)) {
                message("getting cached data")
                return(m)
        }
        data <- x$get()
        m <- mean(data, ...)
        x$setmean(m)
        m
}
```

### Example 2: 캐시 역행렬
 
 역행렬은 돈이 많이 드는 계산법입니다. 이 역시 필요할때마다 또 연속적으로 계산하는 것보다 캐시에 저장했다가 꺼내는 방법이 더 효과적입니다. 
 
- Function 
 -  `makeCacheMatrix`: 역행렬을 캐시할 수 있는 특별한 매트리스 객체 생성합니다.
 - `cacheSolve`: 위의 `makeCacheMatrix`에 의해 반환된 특별한 매트릭스의 역을 계산 (이미 계산되있거나 행렬이 변경되지 않은 경우) `cacheSolve`에서 역을 검색합니다. 
