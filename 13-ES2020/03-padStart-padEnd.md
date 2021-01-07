# padStart and padEnd

padStart MDN 문서 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

padEnd MDN 문서 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd

String.prototype.padStart()

날짜나 시간 등을 만들 때 유용하다.

예를 들어

```js
let hours = 12;
let minutes = 3;
let seconds = 15;

console.log(`${hours}h:${minutes}m:${seconds}s`); // 12h:3m:15s 출력
```

여기서 시, 분, 초가 두 자리수 즉 '3'이 아니라 '03' 이렇게 나오게 하고 싶다면

```js
console.log(`${hours}h:${minutes < 10 ? `0${minutes}m` : minutes}m:${seconds}s`); // 12h:03m:15s 출력
```

이런 식으로 별도의 처리가 필요하다.

기본적으로 padStart()와 padEnd()의 기능이 이것이다. 

## String.prototype.padStart()

MDN 문서의 설명을 살펴보자.

> `padStart()` 메서드는 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환합니다. 채워넣기는 대상 문자열의 시작(좌측)부터 적용됩니다.
```
str.padStart(targetLength [, padString])
```
**매개변수**

1. targetLength

목표 문자열 길이. 현재 문자열의 길이보다 작다면 채워넣지 않고 그대로 반환.

2. padString (Optional)

현재 문자열에 채워넣을 다른 문자열. 문자열이 너무 길어 목표 문자열 길이를 초과한다면 좌측 일부를 잘라서 넣음. 기본값은 " ". (U+0020)

**반환값**

시작점부터 주어진 문자열로 채워 목표 길이를 만족하는 String.

## String.prototype.padEnd()
```
str.padEnd(targetLength [, padString])
```

**매개변수**

1. targetLength

목표 문자열 길이. 현재 문자열의 길이보다 작다면 채워넣지 않고 그대로 반환.

2. padString (Optional)
   
현재 문자열에 채워넣을 다른 문자열. 문자열이 너무 길어 목표 문자열 길이를 초과한다면 좌측 일부를 잘라서 넣음. 기본값은 " ". (U+0020)

**반환값**

끝부터 주어진 문자열로 채워 목표 길이를 만족하는 String

하나 중요한 건, 두 메소드 모두 string 값을 반환한다는 것이다. 값을 반환한다는 뜻은, 메소드가 적용된 값을 변화시키지 않는 것이다. 

값을 직접 변경시키는 작업은 프로젝트 시 예상치 못한 에러를 낳기 때문에 조심해야 하는데, 이 메소드들은 그럴 염려가 적다.

이 메소드를 활용하는 좋은 예시는 위와 같이 시계를 구현하는 것이다.

```js
const today = new Date();
// padStart와 padEnd는 String type에만 사용 가능하기 때문에 형변환이 필요하다.
let hours = String(today.getHours()).padStart(2, '0').padEnd(3, 'h');
let minutes = String(today.getMinutes()).padStart(2, '0').padEnd(3, 'm');
let seconds = String(today.getSeconds()).padStart(2, '0').padEnd(3, 's');

console.log(`${hours}:${minutes}:${seconds}`); // 현재 시간에 맞춰 00h:00m:00s 출력
```