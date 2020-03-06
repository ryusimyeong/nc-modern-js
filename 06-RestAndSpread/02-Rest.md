# #6.2 Intro to Rest Parameters

끝도 없는 파라미터를 전달받는 함수를 만들어 보자.

spread 가 array나 object를 풀어헤쳐 변수들을 얻는 것이라면 rest는 변수들을 하나의 배열로 담는 것이다.

사용하는 방법은 spread처럼 `...`를 이용하지만, parameter 위치에 넣어주면 rest 기법이다.

```js
const infiniteParams = (...kimchi) => console.log(kimchi); // 들어오는 모든 인자를 출력한다.

infiniteParams(1, 2, 3, 4, true, "alsaldfl", [12, 3, 4], 12, 34, 56, 768);
```
위의 구문을 보면 "파라미터로 얼마나 들어올지는 모르지만 그 모든 걸 `kimchi`라는 변수에 다 때려박자" 라는 의미다.

이 기능은 아래처럼 많이 사용한다. 또 `rest`는 array를 만들어낸다.

```js
// rest 변수명은 아무거나 해도 된다. potato 등
const bestFriendMaker = (firstOne, ...rest) => {
    console.log(`My best friend is ${firstOne}`); // My best friend is simyeong 출력
    console.log(rest); // ["dfg", "wer", "adsfads"] 출력
};

bestFriendMaker("simyeong", "dfg", "wer", "adsfads");
```



