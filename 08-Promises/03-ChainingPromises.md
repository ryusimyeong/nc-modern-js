#  #8.3 Chaining Promises

```js
const amISexy = new Promise((resolve, reject) => {
    resolve(2);
});

// then은 원하는 만큼 할 수 있다. then들은 정의된 순서로 실행된다.
amISexy
    .then(number => {
        console.log(2 * 2);
        return number * 2;
    })
    .then(otherNumber => {
        console.log(otherNumber);
    });
// 다음 then으로 값을 넘겨야 할 땐 반드시 return 값이 존재해야 한다.    
// 그 return값이 다음 then에서의 변수다.
```

then 중에 에러가 발생한다면? catch를 사용한다. 

```js
const amISexy = new Promise((resolve, reject) => {
    resolve(2);
});

amISexy
    .then(number => number * 2)
    .then(number => number * 2)
    .then(number => number * 2)
    .then(number => number * 2)
    .then(number => number * 2)
    .then(() => {
        throw Error("Something is wrong");
    })
    .then(number => console.log(number))
    .catch(e => console.log(e));
    // then이 몇 개든, catch를 한 번만 정의해주면 모든 error를 잡아준다.
    // reject도 잡는다. 만약 promise에서 reject(2)라고 정의되어 있다면 2 출력.
```