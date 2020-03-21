 # 4.1 Array.find() Array.findIndex() Array.fill() Array.includes()

 ### Array.find()

`()` 안의 조건이 true인 경우의 값 중 가장 첫 번째 값을 리턴.

```js
const friends = [
    "ryu@gmail.com",
    "ni@gmail.com",
    "myeong@yahoo.com",
    "mark@hotmail.com",
    "jun@korea.com"
];

const target = friends.find(friend => friend.includes("@korea.com"));

console.log(target); // "jun@korea.com"
```

### Array.findIndex()

`()` 안의 조건이 true인 경우의 값의 인덱스 리턴

```js
const friends = [
    "ryu@gmail.com",
    "ni@gmail.com",
    "myeong@yahoo.com",
    "mark@hotmail.com",
    "jun@gorea.com"
];
/* "@gorea.com" 인 사람을 "@korea.com"로 수정하기 */
// 1) @gorea.com 인 사람의 index 찾기
const target = friends.findIndex(friend => friend.includes("@gorea.com"));
// 2) 해당 인덱스의 요소를 "@"로 나누고, 아이디 부분 추출[0]
const username = friends[target].split("@")[0];
// 3) 올바른 도메인 생성
const domain = "korea.com";
// 4) 덮어씌우기
friends[target] = `${username}@${email}`;
```

만약에 찾지 못하면 `-1` 반환한다. 위의 내용을 if 문을 활용해서 `findIndex()`가 -1을 반환할 때까지 반복하는 등(target !== -1)의 응용이 가능하다. 

### Array.fill()

배열을 statinc value로 채운다.

> arr.fill(value[, start[, end]])

```js
const friends = [
    "ryu@gmail.com",
    "ni@gmail.com",
    "myeong@yahoo.com",
    "mark@hotmail.com",
    "jun@korea.com"
];
friends.fill("*".repeat(5)); // 전부 "*"로 채운다.
friends.fill("*".repeat(5, 1)); // index 1번부터 끝까지 "*"로 채운다.
friends.fill("*".repeat(5, 1, 2); // index 1번만 "*"로 채운다.

console.log(friends); // 4 출력
```

### Array.includes()

배열이 ()안의 것을 요소로 갖고 있는지 여부를 boolean으로 판단. 있으면 true

```js
const friends = [
    "ryu@gmail.com",
    "ni@gmail.com",
    "myeong@yahoo.com",
    "mark@hotmail.com",
    "jun@korea.com"
];

console.log(friends.includes("ryu@gmail.com")); // true
```