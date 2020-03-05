# #3.4 More String Improvements

4가지 String method

### includes()

내가 찾고 싶은 문자를 찾아서 boolean을 리턴한다.

```js
const isEmail = email => email.includes("@");

console.log(isEmail("rsm0503@gmail.com")); // true 리턴
```

### repeat()

`()`안의 숫자만큼 원하는 글자 반복

```js
const CC_NUMBER = "2132";

const displayName = `${"*".repeat(10)}${CC_NUMBER}`;

console.log(displayName);
```

### startsWith(), endsWith()

`startsWith()` : 문자열이 () 안의 문자로 시작하는지 여부를 boolean 으로 리턴

`endsWith()` : 문자열이 () 안의 문자로 끝나는지 여부를 boolean 으로 리턴

```js
const name = "Mr. Nicolas";

console.log(name.startsWith("Mr")); // true
console.log(name.endsWith("s")); // true
```