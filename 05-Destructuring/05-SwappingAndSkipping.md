# #5.5 Swapping and Skipping

### variable swapping

`let`으로 선언되어야 한다.
```js
// 변수의 값을 바꾸고 싶다.
let mon = "Sat";
let sat = "Mon";
let tue = "Fri";
let fri = "Tue";

console.log(`mon: ${mon}, sat: ${sat}, tue: ${tue}, fri: ${fri}`);
// mon: Sat, sat: Mon, tue: Fri, fri: Tue 출력

[mon, tue, fri, sat] = [sat, fri, tue, mon];

console.log(`mon: ${mon}, sat: ${sat}, tue: ${tue}, fri: ${fri}`);
// mon: Mon, sat: Sat, tue: Tue, fri: Fri 출력
```

### variable skkiping

array destructuring 에서의 변수 생략

`,` 아무런 변수 이름도 쓰지 않고 콤마로 생략해버리면 된다.


```js
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const [,,three,,five,six,,] = days;

console.log(three,five,six);
// wed fri sat 출력
```