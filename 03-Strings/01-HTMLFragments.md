# #3.1 HTML Fragments

JS 안에서 HTML을 작성할 수 있다.

ES5 이전 HTML 조작
```js
// class name이 wrapper 인 요소가 있다고 가정
const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerText = "Hello";
    h1.className = "title";
    div.append(h1);
    wrapper.append = div;
};
// setTimeout(callback(), ms) : callback()을 ms 초 이후에 실행
setTimeout(addWelcome, 5000);
```

template literal을 이용한 HTML 조작
```js
const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
    const div = `
        <div class="hello">
            <h1 class="title">Hello</h1>
        </div>
    `;
    wrapper.innerHTML = div;
};

setTimeout(addWelcome, 5000);
```

**백틱은 space 나 tab을 인식**하기 때문에 HTML의 depth를 표현할 수 있다.