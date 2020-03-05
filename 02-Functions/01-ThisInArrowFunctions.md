# #2.1 'this' in Arrow Functions

## arrow function 을 사용하지 말아야 할 때

`this` 키워드를 사용할 때 사용하지 말자.

화살표 함수의 this는 항상 window(전역 객체)이기 때문에 원하는 결과를 얻을 수 없다.

### MDN 문서의 말

화살표 함수 표현(arrow function expression)은 function 표현에 비해 구문이 짧고  자신의 **this, arguments, super 또는 new.target을 바인딩 하지 않습니다.** 화살표 함수는 **항상 익명**입니다. 이  함수 표현은 메소드 함수가 아닌 곳에 가장 적합합니다. 그래서 생성자로서 사용할 수 없습니다.

#### 예시

```js
// html 파일에 <button> 태그가 있다고 가정
const button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log(this); // 정상적으로 해당 버튼의 내용이 출력된다.
});

button.addEventListener("click", () => {
    console.log(this); // window 객체가 출력된다.
});

const handleButton = () => {
    console.log(this);
};

button.addEventListener("click", handleButton); // window 객체를 가져온다.
```

```js
const obj = {
    name: "sm",
    age: 28,
    getAge: () => {
        this.age++ // this 는 window
    };
}

obj.getAge();
obj.getAge();
obj.getAge();
// age에 변동 없다.

const obj = {
    name: "sm",
    age: 28,
    getAge() {
        this.age++ // this는 obj
    };
}

obj.getAge();
obj.getAge();
obj.getAge();
// age 1씩 증가.
```

#### bind, apply, call

bind, apply, call 등의 함수를 이용하면 this를 사용할 수 있다.
