#  #12.0 Generators

> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator

기본적으로, 일시정지할 수 있는 함수?

몇 가지 규칙을 사용해야 한다. 

function* 로 함수 선언.

yield는 return과 비슷

그렇게 많이 사용되진 않는다. async await 와 같은 기능을 구현할 때 사용되었을 것

```js
function* listPeople() {
  yield "Mark";
  yield "God";
  yield "Noel";
  yield "Liam";
  yield "Bonehead";
}

const listG = listPeople();
console.log(listG); // listPeople {<suspended>}
listG.next(); // {value: "Mark", done: false}
listG.next(); // {value: "God", done: false}
listG.next(); // {value: "Noel", done: false}
listG.next(); // {value: "Liam", done: false}
listG.next(); // {value: "Bonehead", done: false}
listG.next(); // {value: undefined, done: false}
console.log(listG); // listPeople {<closed>}
```

```js
const friends = ["Noel", "Liam", "Bonehead", "Tony", "Guigsy"];

function* friendsTeller() {
  for (const friend of friends) {
    yield friend;
  }
}

const friendLooper = friendsTeller();

friendLooper.next(); // {value: "Noel", done: false}
friendLooper.next(); // {value: "Liam", done: false}
friendLooper.next(); // {value: "Bonehead", done: false}
friendLooper.next(); // {value: "Tony", done: false}
friendLooper.next(); // {value: "Guigsy", done: false}
friendLooper.next(); // {value: undefined, done: false}
```

yield는 마치 return과 pop을 합쳐놓은 거 같다.