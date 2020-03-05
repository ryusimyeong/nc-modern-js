# #2.2 Arrow Functions in the Real World

## Array Operation with arrow functions

```js
const email = [
    "si@myeong.com", 
    "naver@gmail.com", 
    "nico@las.com", 
    "lalal@ualal.com", 
    "dkdk@nomad.com"
];

// gmail.com인 주소 찾기
const foundMail = email.find(item => item.includes("@gmail.com"));

console.log(foundMail)
```

`Array.prototype.find()` : array에 제공되는 함수 조건을 만족하는 첫 번째 엘리먼트를 리턴.

`.includes()` : `()`안의 문자열을 포함하는지 여부에 따라 true, false 리턴

## filter

`Array.prototype.filter()` : 제공된 함수의 조건을 만족한 모든 엘리먼트로 새로운 array를 만든다.

```js
const email = [
    "si@myeong.com", 
    "naver@gmail.com", 
    "nico@las.com", 
    "lalal@ualal.com", 
    "dkdk@nomad.com"
];

// gmail.com가 아닌 주소들만 찾기
// filter() 내부의 조건이 true 면 새로운 array(noGmail)에 담는다.
const noGmail = email.filter(item => !item.includes("@gmail.com"));

console.log(noGmail)
```

## forEach

`Array.prototype.forEach()` : array의 각 요소마다 제공된 함수를 실행한다.

```js
const email = [
    "si@myeong.com", 
    "naver@gmail.com", 
    "nico@las.com", 
    "lalal@ualal.com", 
    "dkdk@nomad.com"
];
// split(): ()안의 것으로 문자열을 나눠 새로운 배열로 만든다.
// "@"으로 나누면 아이디, 도메인으로 나뉜 배열이 발생한다. 그 배열의 0번째 요소(아이디)만 가져온다.
email.forEach(item => item.split("@")[0]);
```

## map

forEach인데, 반환된 요소들로 새로운 array를 만든다.

```js
const email = [
    "si@myeong.com", 
    "naver@gmail.com", 
    "nico@las.com", 
    "lalal@ualal.com", 
    "dkdk@nomad.com"
];

const newArray = email.map(item => item.split("@")[0]);

console.log(newArray);
```

#### map - object 암묵적 리턴

return을 사용하는 대신에 `()`을 사용하여 `{}`를 감싸준다.

```js
const email = [
    "si@myeong.com", 
    "naver@gmail.com", 
    "nico@las.com", 
    "lalal@ualal.com", 
    "dkdk@nomad.com"
];
// 두 번째 파라미터는 해당 요소의 index
const newArray = email.map((item, index) => ({
    username: item.split("@")[0],
    index
}));

console.log(newArray);
```

### 결론

화살표 함수는 이런 가독성 때문에 많이 쓴다. 

특히 콜백함수를 사용할 때 가독성에 좋다.

##### tmi
`console.table()` : 로그를 표 형태로 보여준다.