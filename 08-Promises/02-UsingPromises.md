# #8.2 Using Promises

프로미스를 사용하려면 then을 써야 한다.

promise가 끝난 이후에 값을 돌려 달라고 명령어를 입력한다.

```js
const amISexy = new Promise((resolve, reject) => {
    resolve("Yes You are");
});

amISexy.then(value => console.log(value)); // then: promise resolve 값을 반환.
```

에러가 있다면?

catch를 사용한다.

```js
const amISexy = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "You are ugly");
});

amISexy
    .then(result => console.log(result)) // then: promise resolve 값을 반환.
    .catch(error => console.log(error));  // promise 가 reject 되면 이거 실행.

// then이 실행되면 catch는 실행되지 않는다. catch가 실행되면 then 은 실행되지 않는다.
```

