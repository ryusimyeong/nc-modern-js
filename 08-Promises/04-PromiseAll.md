# #8.4 Promise.all

Promise.all은 주어진 모든 Promise를 실행한 후 진행되는 하나의 Promise를 반환한다.

// 하나가 아닌 여러 개의 API에서 데이터를 불러올 때 가정.
```js
const p1 = new Promise((resolve) => {
    setTimeout(resolve, 5000, "First");
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Second");
});

const p3 = new Promise((resolve) => {
    setTimeout(resolve, 3000, "Third");
});

const motherPromise = Promise.all([p1, p2, p3]);

motherPromise.then(values => console.log(values)); 
// 5초 후에 ["First", "Second", "Third"] 출력
```

setTimeout으로 설정한 시간에 의하면 p2, p3, p1 순으로 값이 도출 되지만 Promise.all은 시간이 얼마나 걸리든, **전부 끝났을 때 내가 정해준 순서대로** 값을 제공한다.

또한 구성된 promise 중 하나라도 reject 되면 promise.all도 error 발생한다. (다른 promise 들도 reject) `.catch`를 모든 promise에 걸어주는 것이 아니라 promise.all 하나에만 걸어주면 여러 개의 promise를 한 번에 관리할 수 있기 때문에 굉장히 유용하다.

```js
const p1 = new Promise((resolve) => {
    setTimeout(resolve, 5000, "First");
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "Error :(");
});

const p3 = new Promise((resolve) => {
    setTimeout(resolve, 3000, "Third");
});

const motherPromise = Promise.all([p1, p2, p3]);

motherPromise
    .then(values => console.log(values))
    .catch(err => console.log(err));
    // 1초 후에 Error :( 출력
```