# #11.0 Introduction

nico: 유용하긴 한데 그렇게 많이 쓰이진 않는 거 같은 것들?

# #11.1 Symbols

Symbols: 새로운 데이터 타입. 매우 유니크함.

어떤 고유한 값을 나타낼 때 좋다?

이 값이 변하지 않기를 원할 때 사용한다?

이건 일반적인 유스케이스는 별로 없다. 

privacy를 갖는 거.??

이건 아마 다른 강의를 통해 알아보는 게 좋을 거 같다. 함수형 프로그래밍 강의에서 더 공부하자.

# #11.2 Sets

> 참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set

Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있습니다.

다양한 자료형의 데이터를 저장할 수 있지만 중복되는 value를 가질 수 없다.

처음 생성자를 통해 만들 때는 iterable한 것들만 넣을 수 있다. string이나 array

```js
const sexySet = new Set("ddddd"); // "d" 1개만 출력
const arrSet = new Set([1, 2, 3, 4, 4, 4, 4, 5, 6]); // [1,2,3,4,5,6] 출력

// .has() 요소 존재 여부 판단.
sexySet.has("d"); // true
sexySet.has("f"); // false
arrSet.has(1); // true
arrSet.has(7); // false

// .delete() 해당 요소 삭제
sexySet.delete("d");
arrSet.delete(1);

// .add() 해당 요소 추가
sexySet.add("ㅇㄴㄹㄴㅇㄹ");
arrSet.add(7);

// .clear() 요소 전체 삭제
sexySet.clear();
```

# #11.3 WeakSet

오로지 객체나 배열만 저장할 수 있다.

```js
const weakSetNum = new WeakSet(1); // error
const weakSetStr = new WeakSet("1"); // error
const weakSetArr = new WeakSet([1, 2, 3]);
const weakSetObj = new WeakSet({ me: true, your: true });
```

프로퍼티로는 add, delete, constructor, has 만 있다.

garbage collection 가비지 컬렉션?

우리가 만든 함수나 변수들. 사용하지 않은 채로 남겨져 있는 것들을 

가비지 컬렉터를 사용해서 지워버린다. 

더이상 사용되지 않거나 참조되지 않는 쓸데 없는 것들을 삭제한다.

weakSet에 있는 요소들은 소스 코드로 객체를 참조시켜주지 않으면 가비지 콜렉터에 의해 삭제된다.
```js
// 브라우저 콘솔로 실습
const weakSet = new WeakSet();
weakSet.add([1]);

// 개발자도구 memory -> collect garbage
// weakSet의 요소가 사라진 걸 확인
```

# #11.4 Map and Weakmap

Map은 Set과 비슷한데 key를 사용한다.

```js
// set(key, value) 요소 추가
map.set("me", 123);
// delete(key) 요소 추가
map.delete("me", 123);
// has(key) 해당 키 존재 여부 
map.has("me");
// get(key) 해당 키의 value 
map.get("me");
// weakMap은 key가 Object 타입이어야 한다. 배열이나 객체.
weakMap.set(["qwe", "qwe"], 123);
```