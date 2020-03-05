# #1.2 Block Scope

`let`과 `const`는 `block scope`가 있다.

블록 스코프는 기본적으로 버블인데, 변수들이 접근가능한지 아닌지를 감지한다.

```js
if (true) {
    const hello = "hi";
}

console.log(hello); // 에러.
```

`hello`는 `if` 블록 안에서 선언되었기 때문에 그 블록 밖에서는 사용할 수 없다(존재하지 않음). let도 마찬가지다.

```js
function a() {
    var hello = "hi"
}

console.log(hello); // 에러.
```

```js
if (true) {
    var hello = "hi";
}

console.log(hello); // 사용 가능.
```

var 는 블록 스코프가 없고 function scope만 갖고 있기 때문에 다른 function에서 변수에 접근하는 걸 막을 수는 있지만 if, else, try, catch, for 등에서는 막을 수 없다.

블록 = `{}` 
1) 블록 외부에서 선언된 변수는 블록 내부나 외부에서 접근 가능하다.
2) 블록 내부에서 선언된 변수는 블록 내부에서만 접근이 가능하며, 외부에선 불가하다.

```js
let hello = "hi";
if (true) {
    console.log(hello); // 가능
    const a = "a";
}
console.log(a); // 불가
```

### 결론

var = function scope

let, const = block scope