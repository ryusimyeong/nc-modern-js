# #3.2 HTML Fragments part 2

```js
// class name이 wrapper인 요소가 있다고 가정
const wrapper.querySelector('.wrapper');

const friends = ['me', 'lynn', 'dal', 'mark'];

const ul = document.createElement("ul");
const li = document.createElement("li");
friends.forEach(friend => {
    li.innerText = friend;
    ul.append(li);
});

wrapper.append(ul);
```
을

```js
// class name이 wrapper인 요소가 있다고 가정
const wrapper.querySelector('.wrapper');

const friends = ['me', 'lynn', 'dal', 'mark'];

const list = `
    <h1>People I love</h1>
    <ul>
        ${friends.map(friend => `<li>${friend}</li>`).join("")} 
    </ul>
`; // join(): ()안의 문자를 이용하여 배열을 하나의 문자열로 만든다.

wrapper.innerHTML = list;
```