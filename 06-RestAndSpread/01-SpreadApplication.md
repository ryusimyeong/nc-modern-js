# #6.1 Spread Applications

추가, 합치거나 업데이트.

배열이나 object나 모두 사용 가능.

### 값 추가하기

```js
const friends = ["nico", "lynn"];

const newFriends = [...friends, "dal"];

console.log(newFriends); // ["nico", "lynn", "dal"] 출력
```
위의 처리는
```js
friends.push("dal");
```
과는 다르다. `friends` 배열에 추가한 것이 아니라 `newFriends`라는 새로운 배열에 값을 추가한 것이다.

기존 데이터를 복사해서 새로운 값을 만들고 싶을 때 유용하다.

```js
const nico = {
    username: "nico"
};

console.log({...nico, password: "123"}); 
/** 아래 객체 출력
{
    username: "nico",
    password: "123"
}
*/
```

```js
const first = ["mon", "tue", "wed"];

const weekend = ["sat", "sun"];

const fullWeek = [...first, "thu", "fri", ...weekend];

console.log(fullWeek); // ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] 출력
```

### 조건부 객체 conditional object

어떻게 하면 조건부로 object에 프로퍼티를 추가할 수 있을까?


`lastName`이 입력되면, 입력값을 저장하고 입력되지 않으면, `undefined`를 저장한다.
```js
const lastName = prompt("Last name");

const user = {
    username: "nico",
    age: 24,
    lastName: lastName !== "" ? lastName : undefined
};
```

`lastName`이 입력되지 않았을 때 user라는 객체에 아예 key조차 저장되지 않게 하고 싶을 때 spread를 사용한다.

```js
const lastName = prompt("Last name");

const user = {
    username: "nico",
    age: 24,
    ...(lastName !== "" && {lastName})
};

console.log(user);
```
위와 같이 작성하면 `lastName`이 빈 문자열일 때, `lastName`이라는 프로퍼티가 아예 저장되지 않는다. 

빈 문자열이 아니면 만들어둔 `lastName`이라는 변수가 `{lastName}` 에 들어가며 이는 `{lastName:lastName}` 와 같다.
