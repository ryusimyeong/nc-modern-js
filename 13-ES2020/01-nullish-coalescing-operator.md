# 01 Nullish coalescing operator (??) 연산자 

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

null 병합 연산자는 `||`와 `&&`처럼 논리연산자다.

`??` 연산자는 `||`와 마찬가지로 기본값을 줄 때 유용하다. 다만, `||`은 0, 과 빈 문자열 등을 포함한 falsy한 값을 방지하고, `??`은 오직 nullish한 값을 방지한다.

```js
let name;

console.log('hello', name); // undefined
console.log('hello', name || '시명'); // '시명'
```

`||` 좌측에 있는 변수 값이 false 라면 `||` 우측에 지정해준 값을 넣어주는 것이다.

그런데 이 `||`에는 약점이 있다.

```js
let name = 0;

console.log('hello', name); // 0
console.log('hello', name || '시명'); // '시명'
```

0은 충분히 가질 수 있는 값인데도 불구하고, falsy 한 값이기 때문에 `||` 연산자는 0이 아니라 지정된 다른 값을 출력하게 된다.

`??` 연산자는 이런 약점을 보완한다. `??` 연산자는 **해당 변수값이 null이거나 undefined일 때만 작동한다.**

```js
let example = 0;
console.log('hello', example ?? '대체'); // hello 0
example = '';
console.log('hello', example ?? '대체'); // hello 
example = null;
console.log('hello', example ?? '대체'); // hello 대체
example = undefined;
console.log('hello', example ?? '대체'); // hello 대체

example = 0;
console.log('hello', example || '대체'); // hello 대체
example = '';
console.log('hello', example || '대체'); // hello 대체
example = null;
console.log('hello', example || '대체'); // hello 대체
example = undefined;
console.log('hello', example || '대체'); // hello 대체
```

어떤 값을 받아야 할 때, 그 값이 `null`, `undefined`, `0`, `''` 인 모든 경우를 방지하고 싶다면 `||`을 사용하고, 오직 `null`과 `undefined`만을 방지하고 싶을 땐 `??`을 사용하면 된다.

아직 이 연산자는 2020년 12년 23일 기준으로 모든 브라우저에 호환되는 것은 아니기 때문에 꼭 MDN 문서를 확인하고 사용하자.ㅁㄴㅇㄹ