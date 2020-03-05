# #4.0 Array.from() and Array.of()

### Array.of()

```js
const friends = ["nico", "lynn", "mark", "dal"];

// 위와 아래는 같다.

const friends2 = Array.of("nico", "lynn", "mark", "dal");
```

### Array.from()

array-like object를 array로 만드는 메소드 () 안에 array-like object 넣어준다.

```js
const buttons = document.querySelectorAll("button");

console.log(buttons); // NodeList 리턴. 

Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => console.log("I've been clicked"));
});
```

#### tmi


- `NodeList`: Array처럼 보이지만 아님. 
- getElementsByClassName으로 하면 `HTMLCollection`이 나온다.
- `NodeList`나 `HTMLCollection`은 배열 같아 보이지만 배열이 아닌 **Array-like object** 다.


MDN에 따르면 

> NodeList 가 Array 는 아니지만, forEach() 를 사용하여 반복할 수 있습니다. 또한 Array.from() 을 사용하여 Array 로 변환 할 수도 있습니다.