const buttons = document.querySelectorAll("button");

console.log(buttons); // NodeList: Array처럼 보이지만 아님. 
// getElementsByClassName으로 하면 HTMLCollection이 나온다.
// NodeList나 HTMLCollection은 배열같아 보이지만 아니다. Array-like object 다.

buttons.forEach(button => {
    button.addEventListener("click", () => console.log("I've been clicked"));
});