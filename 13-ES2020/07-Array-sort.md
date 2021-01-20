# 7 Array-sort

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

```js
const arr = [1, 3, 4, 2];
const sortByThis = (numA, numB) => {
  return numA - numB
};
arr.sort(sortByThis);
```

숫자를 정렬하는 경우 

```js
// 오름차순
function compareNumbers(a, b) {
  return a - b;
}
// 내림차순
function compareNumbers(a, b) {
  return b - a;
}
```