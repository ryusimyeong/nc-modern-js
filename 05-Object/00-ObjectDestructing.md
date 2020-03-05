# #5.0 Object Destructuring

객체 배열, 함수 등 비구조화. 

객체의 변수를 바깥으로 끄집어내서 사용할 수 있도록 하는 것

```js
// es5
const settings = {
    notifications: {
        follow: true,
        alert: true,
        unfollow: false
    },
    color: {
        theme: "dark"
    }
}
const sendEmail = () => {
    console.log("send Email!");
}

if (settings.notifications.follow) {
    sendEmail();
}
```
- 위 코드의 문제점:
  1. 보기 싫다.(settings.notifications.follow)
  2. follow 나 notifications의 값이 없어도 undefined를 출력한다.

```js
// es6+
const settings = {
    notifications: {
        follow: true,
        alert: true,
        unfollow: false
    },
    color: {
        theme: "dark"
    }
}
// 비구조화할 대상? settings. 어떤 변수가 나올 때까지? follow
const {
    notifications: { follow },
    // color를 통째로
    color
} = settings;

const sendEmail = () => {
    console.log("send Email!");
}

if (settings.notifications.follow) {
    sendEmail();
}
```

```js
const {
    // 아래 follow, color는 그 자체로 변수다.
    // notifications는 존재하지 않는다. 변수가 아니다.
    // follow의 기본값은 false. 문자열도 되고 아무거나 된다.
    // notifications 기본값은 빈 객체
    notifications: { follow = false } = {},
    color
} = settings;
// 은

const follow = settings.notifications.follow;
const color = settings.color;
// 와 같다.
```

```js

```