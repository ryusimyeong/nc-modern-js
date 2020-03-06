# #6.0 Introduction to Spread

변수를 가져와서 전개한다(spread)

```js
const friends = [1, 2, 3, 4];

console.log(friends); // [1,2,3,4] 출력 - array
console.log(...friends); // 1 2 3 4 출력 - array 안의 변수들
```

두 개의 배열을 하나의 배열로 담아 보자.
```js
const friends = [1, 2, 3, 4];
const family = ["a", "b", "c"];

console.log([...friends, ...family]); // [1,2,3,4,"a","b","c"] 출력

console.log([friends, family]) // 2차원 배열.  [[1,2,3,4]["a","b","b"]] 출력
console.log(friends + family) // 이상한 값 1,2,3,4a,b,c 출력
```

```js
const sexy = {
    name: "sm",
    age: 28
};

const hello = {
    sexy: true,
    hello: "world"
};

console.log({...sexy, ...hello}); // 하나의 object 안에 sexy와 hello의 프로퍼티가 담긴다.

console.log({sexy, hello}); // { {}, {} } 하나의 오브젝트 안에 두 개의 오브젝트가 각각 담긴다.
```