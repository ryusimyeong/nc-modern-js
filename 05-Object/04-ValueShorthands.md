# #5.4 Value Shorthands

변수명 단축

```js
const follow = checkFollow();
const alert = checkAlert();

const settings = {
    notifications: {
        follow: follow
        alert: alert
    }
}
```
위 코드는 
```js
const follow = checkFollow();
const alert = checkAlert();

const settings = {
    notifications: {
        follow,
        alert
    }
}
```
와 같다.