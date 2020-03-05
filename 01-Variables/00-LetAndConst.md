# #1.0 Let and Const

### var

ES6 이전 유일한 변수 선언 방법.

```js
var name = "Simyeong";

name = "Nico"; // 재할당 가능

var name = "lalalal"; // 재선언 가능
```

큰 어플리케이션을 만들 때 var는 문제를 일으킬 수 있다. 협업할 때 다른 개발자가 똑같은 이름의 변수를 선언하면 의도치 않게 값이 변해 의도치 않은 결과를 얻을 수 있다. 어떤 값을 덮어 씌우는 어떤 경우에는 괜찮지만 대부분 변수의 값이 임의로 변하는 것은 좋지 않다.

### const 

```js
const name = "Simyeong";

name = "Nico"; // 에러. cons는 재선언과 재 할당이 불가하다. const 변수는 read-only가 된다.

// 객체인 경우
const obj = {
    name: "sm";
}

obj = true; // 객체 자체에 재할당 하는 것은 불가능하지만,
obj.name = "Nico"; // 객체의 프로퍼티를 변경하는 것은 가능하다.
```

이런 객체에 대해서도 프로퍼티가 쉽게 변하지 않게 막을 방법이 필요하다. -> 클로저

### let

```js
let si = "myeong";
si = "maeng"; // 재할당 가능
let si = "ryu"; // 재선언 불가
```

#### 결론

기본적으로 const를 사용한다. 

뭔가 값이 변하는(overwriteㅍ) 변수를 이용해야 한다면 let을 사용한다. 

var는 절대 사용하지 않는다.

| | 재선언 | 재할당 |
|---|---|---|
|var| O | O |
|const| X | X |
|let| X | O |