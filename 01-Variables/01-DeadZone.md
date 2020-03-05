# #1.1 Dead Zone

## temporal dead zone?

`let`과 연관된 개념이다.

### temporal dead zone 이 없었을 때

```js
// 1)
var myName = "nico";
console.log(myName); // nico 출력
```
순서를 바꾸면
```js
// 2)
console.log(myName); // undefined 출력
var myName = "nico";
```
이론상으로 보면 당연해보이지만
```js
// 3)
console.log(myName); // error 발생. myName is not defined.
```
이러면 이러가 발생한다.

두 번째와 세 번째의 차이가 발생하는 이유는 **호이스팅(hoisting)** 때문이다. JS의 엔진은 코드를 읽기 전에 실행 컨텍스트를 읽고 선언된 부분을 미리 위로 끌어올린다(Hoist). 따라서 JS엔진은 `2)`의 코드를 아래와 같이 읽는다.

```js
// 2)
var myName;
console.log(myName); // undefined 출력
myName = "nico";
```
미리 선언부를 올려서 myName이라는 변수가 존재는 하지만, 값이 할당되어 있지 않기 때문에 undefined를 출력하게 된다.

이는 개발자로 하여금 실수를 하게 만들 수 있다. 개발자가 잘못된 순서로 선언을 했으면 엔진이 error를 발생시키는 게 디버깅할 때 더 편하다.

```js
// 2)
console.log(myName); // error 발생
let myName = "nico";
```
똑같은 구조이지만 let의 경우 에러를 발생시킨다.

즉, 코드가 죽는다. 이를 `Temporal Dead Zone`이라고 한다.

변수를 선언하기 전에 사용하면, 에러를 발생시켜 디버깅을 쉽게 하는 것이라고 생각하자.