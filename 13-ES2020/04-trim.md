# trim

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

trim은 String 양쪽의 공백을 제거한 String 값을 반환한다.

왼쪽의 공백만 지우고 싶다면 trimStart를, 오른쪽의 공백만 지우고 싶다면 trimEnd를 사용한다.

```js
let test = '    test    ';
console.log(test.trimStart()); // 'test    ' 출력
console.log(test.trimEnd()); // '    test' 출력
console.log(test.trim()); // 'test' 출력
```

form을 통해 데이터를 받을 때 유용하다.