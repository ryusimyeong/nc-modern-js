# #7.0 For ... of

기본적인 for문과 배열의 forEach() 메소드를 합쳐 놓은 것 같다.

`For ~ of ~~`구문은 `forEach()`와 비교할 때 크게 아래 세 가지가 다르다. 

1. item을 const로 선언할지 let으로 선언할지 선택할 수 있다.
2. if문 등을 활용해서 흐름제어를 할 수 있다.
3. 배열 뿐만 아니라 String, NodeList, Typed Array, Map, Set 등 iterable한 것들에 다 사용할 수 있다.

```js
const friends = ["Nico", "Lynn", "ha", "hu", "Dal", "mark", "aadf", "asdfasdf", "vcf"];

for(let i = 0; i < friends.length; i++) {
    console.log(`${i} I love Kimchi`);
}

// forEach의 인자는 요소, 인덱스, 현재 array
// 배열에만 사용 가능하다.
friends.forEach((currentItem, currentIndex, currentArray) => console.log(currentItem, currentIndex, currentArray));


// forEach와는 다르게 item을 const나 let으로 선택할 수 있다.
// 배열 뿐만 아니라 String에도 사용 가능하다.
for (const friend of friends) {
    console.log(friend);
}

for (const letter of "friends asdfasdfadsfasdf") {
    console.log(letter);
}

// for of 는 array, String, NodeList, Typed Array, Map, Set에 다 사용할 수 있다.

// if문 등을 사용해서 루프를 멈출 수도 있다.
for (const friend of friends) {
    if (friend === "mark") {
        break;
    } else {
        console.log(friend);
    }
}
```