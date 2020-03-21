# #9.0 Async Await

promise를 좀더 예쁘게 작성할 수 있게 하는 것.

기존의 then then 은 많은 함수르 만들어야 하고 별로 예쁘지 않음.

즉, .then .catch .finally 는 옛날 방법.

async/await은 promise 밖에서 then이나 catch 없ㅇ; 값을 가져올 수 있는 방법

**await은 async 함수 안에서만 사용할 수 있다.**

> 참고 1) async/await이 좋은 이유: https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9

> 참고 2) json 예제 사이트: https://jsonplaceholder.typicode.com/


```js
// fetch = promise를 리턴한다
const getMoviesPromise = () => {
  fetch("https://yts.mx/api/v2/list_movies.json") // fetch로 API를 요청하면 어떤 response를 리턴한다. promise
    .then(res => res.json()) // 그 response를 text로 바꿔서 리턴 promise
    .then(something => console.log(something)) // something === res.json()
    .catch(error => console.log(error))
    .finally(() => console.log("It's done"));
}

/** 위 코드와 아래 코드는 같다. */

const getMoviesAsync = async () => {
  try {
    // await 는 promise가  끝날 때까지 기다렸다가 reponse를 리턴한다. (resolve든 reject든)
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await response.json();
  } catch (e) { // try 블록 안에서 발생하는 모든 error를 처리한다.
    console.log(e);
  } finally {
    console.log("It's done");
  }
};

getMoviesAsync();
```

# #9.2 Parallel Async Await

promise.all과 비구조화를 이용해서 복수의 api를 동시에 받을 수 있다.

```js
// Parallel Async Await
const getMoviesAsync = async () => {
  try {
    // promise.all은 array를 반환 한다. 각각의 promisefmf 담는다. 
    const [moviesResponse, todosResponse] = await Promise.all([
      fetch("https://yts.mx/api/v2/list_movies.json"), // moviesResponse
      fetch("https://jsonplaceholder.typicode.com/todos/1") // todosResponse
    ]);
    const [movies, upcoming] = await Promise.all([
      moviesResponse.json(),
      todosResponse.json()
    ]);
    console.log(movies, upcoming);
  } catch (e) { // try 블록 안에서 발생하는 모든 error를 처리한다.
    console.log(e);
  } finally {
    console.log("It's done");
  }
};
```