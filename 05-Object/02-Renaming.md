# #5.2 Renaming

아래의 데이터를 어떤 API로부터 받았다고 가정하자.

```js
const settings = {
    color: {
        chosen_color: "dark"
    }
};
```

위 데이터를 이용해야 하는데 스네이크 기법으로 쓰인 key의 이름이 맘에 들지 않는다. 따라서 `chosenColor` 로 바꿔주려 한다.

```js
// 1) 첫 번째 방법
const {
    color: { chosen_color = "light" }
} = settings;

const chosenColor = setting.color.chosen_color || "light";

console.log(chosenColor); // dark 출력
}
```
```js
// 2) 두 번째 방법
const {
    // 콜론을 이용한다.
    color: { chosen_color : chosenColor = "light" }
} = settings;

console.log(chosenColor); // dark 출력
}
```
```js
// 3) 세 번째 방법
let chosenColor = "blue";

console.log(chosenColor); // blue 출력

// 소괄호로 비구조화 부분을 감싼다.
({
    color: { chosen_color : chosenColor = "light" }
} = settings);

console.log(chosenColor); // dark 출력
}
```
두 번째 방법은 `const`나 `let` 으로 선언된 변수 모두에게 사용 가능하지만,

세 번째 방법은 `let`으로 선언된 변수의 값을 overwrite하는 것이므로 `const` 로 선언된 변수로는 사용할 수 없다.