# #8.1 Creating Promises

## what is promise

> 참고: [MDN 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타낸다.

프로미스는 함수를 필요로 한다.

프로미스의 핵심은 아직 모르는 value와 함께 작업을 할 수 있게 한다.

작업이 끝나면 다시 받아서 처리한다. 

```js
// resolve: 이게 네 값이다. 자바스크립트로 돌아가라.
// reject: 에러가 있다.
const amISexy = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Yes You are");
});

setInterval(console.log, 1000, amISexy);
// 처음 3번은 Promise<pending>
// 3초 이후, resolve 함수 실행. Yes You are 출력.
```