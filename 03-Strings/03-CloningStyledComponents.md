# #3.3 Cloning Styled Components

`Styled Components` : 리액트의 라이브러리. JS에서 css를 쓸 수 있고, HTML을 얻게 한다.

```js
// 만들고 싶은 element를 만들고, 적용하고 싶은 CSS도 만들고, 해당 CSS를 적용한 element를 얻는다.
const styled = css => console.log(css);

styled`border-radius: 10px;
color:blue`; // 템플릿 리터럴로 함수 호출하기. 문자열은 인자로 들어간다.
```

#### 클론 코드

```js
const styled = aElement => {
    const el = document.createElement(aElement);
    // 변수를 리턴하면 `` 템플릿 리터럴이 적용될 함수가 사라진다. 따라서 함수를 하나 더 리턴한다.
    return args => {
        const styles = args[0];
        el.style = styles;
        return el;
    };
};

const title = styled('h1')`
    background-color: red;
    color: blue;
`;

const subtitle = styled("span")`
    color: green;
`;

title.innerText = "We just cloned";
subtitle.innerText = "style component";

document.body.append(title, subtitle);
console.log(title);
```
