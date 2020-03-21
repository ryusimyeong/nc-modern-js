# #12.1 Proxies

filter로 생각하는 게 좋다

> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy

```js
const userObj = {
  username: "Simyeong",
  age: 28,
  password: "1234"
};

const userFilter = {};

// Proxy(targetObj, handlerObj)
const filterdUser = new Proxy(userObj, userFilter);
console.log(filterdUser); // Proxy {username: "Simyeong", age: 28, password: "1234"}

console.log(filterdUser.password); // "1234"
filterdUser.loc = "Seoul"
console.log(filterdUser.loc); // "Seoul"
```

`filteredUser`는 `userFilter`를 거친 `userObj`다.

`handler`에는 `trap`이라고 하는 함수들을 정의해줄 수 있다.

그러면 그 함수들을 거친 후의 결과를 리턴한다.

```js
const userObj = {
  username: "Simyeong",
  age: 28,
  password: "1234"
};

const userFilter = {
  get: () => {
    console.log("getting something");
  },
  set: () => {
    console.log("wrote something");
  }
};

// Proxy(targetObj, handlerObj)
const filterdUser = new Proxy(userObj, userFilter);
console.log(filterdUser); // Proxy {username: "Simyeong", age: 28, password: "1234"}

console.log(filterdUser.password); // "getting something" undefined
filterdUser.loc = "Seoul" // "wrote something"
console.log(filterdUser.loc); // "getting something" undefined
```

즉, `targetObj`로 접근하기 전에 `handler`를 거치는데, `handler`에 정의된 `trap`들에 의해 값이 달라진다. 

프록시 객체인 `filteredUser`는 `handlerObj(userFilter)`에 의해 모든 동작이 좌우되는 `targetObj(user)`다.

트랩은 파라미터를 가질 수 있다. get만 알아보자
```js
const userObj = {
  username: "Simyeong",
  age: 28,
  password: "1234"
};

const userFilter = {
  get: (target, prop, receiver) => {
    console.log(target) // user
    console.log(prop) // age
    console.log(receiver) // filterdUser
  },
  set: () => {
    console.log("wrote something");
  }
};

// Proxy(targetObj, handlerObj)
const filterdUser = new Proxy(userObj, userFilter);
console.log(filterdUser.age);
```

target은 프록시를 선언할 때 넣어준 targetOj(user), prop은 접근하려는 프로퍼티(age). receiver는 Proxy 객체, 여기선 filteredUser다.

```js
const userFilter = {
  get: (target, prop, receiver) => {
    return target[prop];
  },
  set: () => {
    console.log("wrote something");
  }
};
```

get의 내용을 위와 같이 바꾸면, age의 value인 28이 출력된다.

어떻게 사용하면 좋을까

```js
const userObj = {
  username: "Simyeong",
  age: 28,
  password: "1234"
};

const userFilter = {
  get: (target, prop, receiver) => {
    return prop === "password" ? `${"*".repeat(5)}` : target[prop];
  },
  set: (target, prop, receiver) => {
    
  }
};

// Proxy(targetObj, handlerObj)
const filterdUser = new Proxy(userObj, userFilter);
console.log(filterdUser.username); // "Simyeong"
console.log(filterdUser.age); // 28
console.log(filterdUser.password); // *****
```
어떤 유저가 password에 접근하면 해당 내용을 보여주지 않게 할 수 있다.

# #12.2 Should you learn proxies or generators?

프록시는 내 라이브러리를 다른 프로그래머가 임의로 수정하는 게 싫을 때 많이 사용.

근데 제너레이터나 프록시를 웹을 만들 때 많이 사용하진 않는다.

그냥 알아놓기나 하자.

async/await, arrow functions, rest/spread, destructuring
