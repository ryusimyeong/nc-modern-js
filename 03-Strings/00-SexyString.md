# #3.0 Sexy Strings

## template literal

문자열과 변수의 연결을 백틱(Backtick)으로 개선한다. 

아래의 코드를
```js
const sayHi = (name = "anon") => "Hello " + name + ".";

console.log(sayHi());
```
아래와 같이 바꿀 수 있다.
```js
const sayHi = (name = "anon") => `Hello ${name}.`;

console.log(sayHi());
```
변수 뿐만 아니라 표현식도 넣을 수 있다.
```js
const confess = `내 전 재산은 ${10000 * 12000}원이다.`;
```
함수를 실행시킬 수도 있다.

함수 자체를 집어 넣으면 해당 함수의 소스코드를 출력한다.
```js
const add = (a, b) => a + b;

console.log(`${add(5, 6)}`); // 11 출력
console.log(`${add}`); // (a, b) => a + b 출력
console.log(`${function dd() {return a+b}}`); // 그냥 그대로 출력
```

