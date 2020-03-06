# #6.3 Rest + Spread + Destructure Magic

### rest 예제 1) 특정 속성 제외하기

```js
const user = {
    name: "nico",
    age: 24,
    password: 12345
};

user[password] = null;

console.log(user);
/** 출력
{
    name: "nico",
    age: 24,
    password: null
}
*/
```

password가 null값을 변하긴 했지만 프로퍼티가 아직 남아있다.

```js
const user = {
    name: "nico",
    age: 24,
    password: 12345
};

// password만 제외하고 return
const killPassword = ({password, ...rest}) => rest;

const cleanUser = killPassword(user);

// password가 제외된 object 반환
console.log(cleanUser);
```

### 2) 기본값 설정

```js
const user = {
    name: "nico",
    age: 24,
    password: 12345
};
// coutry에 기본값 설정
// 파라미터 부분에서 ...rest는 rest 기법. return 단에서 ...rest는 spread.
const setCountry = ({country="KR", ...rest}) => ({country, ...rest});

console.log(setCountry(user));
```

### 3) 속성명 바꾸기

