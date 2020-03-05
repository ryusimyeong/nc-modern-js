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