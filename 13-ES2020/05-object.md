# Object entries, Object values,Object fromEntries

## Object.entries()

key와 value를 원소로 하는 배열을 원소로 담고 있는 배열을 반환한다. [[key, value], [key, value]]

```js
const obj = {
  name: 'smsm',
  age: 12
}

console.log(Object.entries(obj)); // [['name', 'smsm'], ['age', 12]] 출력
```

## Object.keys(), Object.values()

Object의 key, 혹은 value 만을 원소로 하는 배열을 반환한다.

```js
const obj = {
  name: 'smsm',
  age: 12
}

console.log(Object.keys(obj)); // ['name', 'smsm']
console.log(Object.values(obj)); // ['age', 12]
```

## Object.fromEntries()

`Object.entries()`의 반대다. 배열의 배열을 object로 만들어준다.

```js
const arr = [['good', 'person'], ['name','hihi'], ['age', 34]]

console.log(Object.fromEntries(arr)) 
// { good: 'person', name: 'hihi', age: 34 } 출력
```
