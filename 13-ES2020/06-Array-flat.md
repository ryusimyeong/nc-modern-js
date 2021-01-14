# Array.flat

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

중첩 배열을 평탄화, 즉, 중첩을 제거할 때 사용한다. 

```js
let array = [1, [2], [[3]], [[[4]]], [[[[5]]]]];

console.log(array); // [1, [2], [[3]], [[[4]]], [[[[5]]]]];

array = array.flat(); // 파라미터의 기본값은 1이다.

console.log(array); // [1, 2, [3], [[4]], [[[5]]]];

array = array.flat(2);

console.log(array); // [1, 2, 3, 4, [5]];

array = array.flat(3);

console.log(array); // [1, 2, 3, 4, 5];
```

어떤 배열이든 무조건 1차원 배열로 만들고 싶으면 파라미터에 `infinity`를 넣으면 된다.

아래와 같이 배열의 빈 값도 없애준다.

```js
console.log([1,2,,3,4].flat()) // [1,2,3,4] 출력
```

