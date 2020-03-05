# #2.0 Arrow Functions

함수의 모습을 개선한 것.

좀더 보기 좋게 만든 것.

```js
// 기존 function

// 기명함수
function name(arg) {

}
// 익명함수
function (arg) {

}
// 함수표현식
const hello = function (arg) {

}
```

```js
const name = ['nico', 'lynn', 'simyeong'];

function addHearts(item) {
    return item + "heart";
}

// map은 각각의 아이템마다 함수를 호출한다.
// map은 반드시 무언가를 array로 return 한다.
const hearts = names.map(addHearts)

console.log(hearts);
```

이게 ES5 방식이지만 다른 함수를 만들어서 하면 조금 혼란스러울 수도 있다.

```js
const name = ['nico', 'lynn', 'simyeong'];

const hearts = names.map(function(item) {
    return item + "heart";
})

console.log(hearts);
// 과
const name = ['nico', 'lynn', 'simyeong'];

const hearts = names.map(item => {
    return item + "heart";
})

console.log(hearts);
```

implicit return : 뭘 적든 그걸 리턴한다. `{}`이게 생기면 사라진다.

#### 결론

1. `function` 대신 `(arg)` 와 `{}` 사이에 `=>` 를 넣는다.
2. arg가 하나라면 `()`는 생략이 가능하다. 아무것도 없거나 두 개 이상이면 반드시 사용한다.
3. `{}` 내부의 내용이 무언가를 리턴하는(implicit return)

```js
/** 1) 인자가 하나일 땐 () 생략 가능 */
const name = function (arg) {
    return arg + "!!";
}
// ===
const name = arg => arg + "!!";
```
```js
/** 2) 인자가 없거나 두 개 이상일 땐 () 생략 불가 */
const name = function (arg1, arg2) {
    return arg1 + arg2;
}
const name2 = function () {
    return "이름없음";
}
// ===
const name = (arg1, arg2) => arg1 + arg2 + "!!";

const name2 = () => "이름없음";
```
```js
/** 3) 함수가 단순히 어떤 값을 return만 하는 게 아니라면 {}를 사용해야 한다. */
const name = function (arg1, arg2) {
    console.log(arg1, arg2)
    return arg1 + arg2;
}
// ===
const name = (arg1, arg2) => {
    console.log(arg1, arg2)
    return arg1 + arg2;
}
```
