# 함수형 프로그래밍과 JavaScript ES6+
![image](https://user-images.githubusercontent.com/13375810/116568941-e718d780-a943-11eb-862c-cc237e72fd79.png)

#### 1. 함수형 자바스크립트 기본기
- 평가와 일급, 고차 함수

#### 2. ES6 에서의 순회와 이터러블:이터레이터 프로토콜
- ES6 에서의 리스트 순회
- 이터러블/이터레이터 프로토콜(Array, Set, Map)
- 사용자 정의 이터러블
- 전개 연산자

#### 3. 제네레이터와 이터레이터
- 제너레이터
- 이터레이터

#### 4. map, filter, reduce
- map
- 이터러블 프로토콜을 따른 map 의 다형성
- filter
- reduce
- map + filter + reduce 중첩 사용과 함수형 사고

#### 5. 코드를 값으로 다루어 표현력 높이기
- go
- pipe
- curry
- 함수 조합

#### 6. 실습 예제
- 장바구니 예제

#### 7. 지연성1
- range
- take
- 제네레이터/이터레이터 프로토콜로 구현하는 지연 평가
- Lazy map
- Lazy filter
- range, map, filter, take, reduce 중첩 사용
- Lazy range, Lazy map, Lazy filter, take 의 평가 순서
- 지연 평가의 장점

#### 8. 지연성2
- reduce, take
- 다형성이 높은 join 함수
- find
- Lazy flatten, flatten
- yield \*, Lazy deepFlat
- Lazy flatMap, flatMap
- 2차원 배열 다루기

#### 9. 비동기:동시성 프로그래밍1
- callback 과 Promise
- Promise 와 모나드
- Kleisli Composition 관점에서 Promise
- 비동기 제어
- promise.then 의 중요한 규칙

#### 10. 비동기:동시성 프로그래밍2
- 지연평가 + Promise
- 지연된 함수열을 병렬적으로 평가하기
- 즉시 병력적으로 평가하기
- 즉시, 지연, Promise, 병렬적 조합하기
- Node.js 에서 SQL 병렬 평가로 얻은 효율
- async:await
