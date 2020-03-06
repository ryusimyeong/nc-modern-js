# #5.5 Swapping and Skipping

### variable swapping

`let`으로 선언되어야 한다.
```js
// 변수 mon과 sat의 값을 바꾸고 싶다.
let mon = "Sat";
let sat = "Mon";

console.log(`mon: ${mon}, sat: ${sat}`);

[sat, mon] = [mon, sat]

console.log(`mon: ${mon}, sat: ${sat}`);
```