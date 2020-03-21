# #8.6 .finally

finally는 promise가 resolve 되든 reject 되든 반드시 실행된다.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "First");
})
  .then(value => console.log(value))
  .catch(error => console.log(`error: ${error}`))
  .finally(() => console.log("I'm done"));
  // resolve 되면 First와 I'm done 출력
  // reject 되면 `error: ${error}`와 I'm done 출력
```

fetch를 사용한 promise 예제
```js
// fetch = promise를 리턴한다
fetch("https://jsonplaceholder.typicode.com/todos/1") // fetch로 API를 요청하면 어떤 response를 리턴한다. promise
  .then(res => res.json()) // 그 response를 text로 바꿔서 리턴 promise
  .then(something => console.log(something)) // something === res.json()
  .catch(e => console.log(e))
  .finally(() => console.log("finished"));
```