# #2.3 Default Values

기본값은 일반 함수와 화살표 함수 모두에게 적용이 가능하다.

```js
function sayHi(name) {
    return "Hello " + name;
}

console.log(sayHi("me")); // "Hello me" 출력
console.log(sayHi()); // "Hello undefined" 출력
```

사용자가 인자를 입력하지 않을 때를 대비하는 코드
```js
function sayHi(name) {
    // name이 없으면 "anon" 출력
    return "Hello " + (name || "anon" );
}

console.log(sayHi("me")); // "Hello me" 출력
console.log(sayHi()); // "Hello anon" 출력
```
ES6+ default value
```js
/**
function sayHi(name = "anon") {
    // name이 없으면 "anon" 출력
    return "Hello ";
}
/*/

const sayHi = (name = "anon") => "Hello " + name;

/**/

console.log(sayHi("me")); // "Hello me" 출력
console.log(sayHi()); // "Hello anon" 출력
```

### 문자열만 가능한가?

number도 되고 array, object 뭐든 가능하다. 

아래처럼 변수로 지정해놓고 재활용 가능

```js
const DEFAULT_VALUE = "anon"

const sayHi = (name = DEFAULT_VALUE) => "Hello " + name;

console.log(sayHi("me")); // "Hello me" 출력
console.log(sayHi()); // "Hello anon" 출력
```