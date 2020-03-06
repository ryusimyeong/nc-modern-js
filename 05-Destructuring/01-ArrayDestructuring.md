# #5.1 Array Destructuring

가져온 정보를 조작하지 않을 때 사용하기 좋다.

예) Open API로 정보를 받아올 때라든지

```js
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// 0번째 요소를 mon이라는 변수, 1번째 요소를 tue라는 변수, 2번째 요소를 wed 변수로 저장.
// 기본값도 줄 수 있다.
const [mon, tue, wed, thu = "Thu"] = days;
```

함수로도 할 수 있다. (object도)
```js
const days = () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const [mon, tue, wed, thu = "Thu"] = days;
```