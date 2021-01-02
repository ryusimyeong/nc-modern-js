# 02 - optional chaining operator

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining

API에서 어떤 object를 가져올 때 매우 유용하다.

```js
const me = {
  name: 'simmy',
  profile: {
    email: '@gmail.com'
  }
}

console.log(me.profile.email); // @gmail.com

const someone = {
  name: 'who',
}

console.log(someone.profile.email); // Uncaught TypeError: Cannot read property 'email' of undefined 에러 발생
```

`someone`에는 `profile`이라는 `property`가 없기 때문에 `someone.profile.email`을 출력하지 못하고 에러가 난다. 위 상황을 fix하기 위해선

```js
console.log(someone.profile && someone.profile.email); // undefined 출력
```

위와 같이 방어 코드를 작성해줘야 한다. 하지만 때에 따라서는 아래처럼 이 구문이 엄청나게 길어질 수도 있다.

```js
console.log(someone && someone.profile && someone.profile.email && someone.profile.email.domain);
```

이런 불편함을 해결하는 게 `?.` 연산자, optional chaining이다. 말 그대로, 조건을 연쇄적으로 작성하는 거다.

`?.`연산자를 사용하면 위 구문은 아래처럼 바뀐다.

```js
console.log(someone?.profile?.email?.domain);
```

누가 봐도 깔끔하다. `React`나 `Vue` 프로젝트에서 API를 호출할 때 object가 아직 다 넘어오지 않은 상태의 에러 방지용으로 사용하면 좋을 거 같다.ㅇㅇ