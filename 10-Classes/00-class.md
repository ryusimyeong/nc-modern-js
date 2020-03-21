# #10.0 intro

많은 양의 코드를 구조화해서 재사용할 때 좋다.

일종의 청사진이다. 설계도

화려한 object?

```js
// 이 상태는 클래스가 그저 설계도. 오브젝트의 공장.
class User {
  // 생성자: class를 구성(constructor)하는 것.
  // 파라미터를 받을 수 있다.
  constructor(name) {
    this.username = name;
  }
  sayHello() { // 인스턴스(클래스)에 종속된 함수 = 메소드
    console.log(`Hello my name is ${this.username}`);
  }
}

// 클래스를 통해 인스턴스 생성
// user1은 인스턴스 - class의 내용을 담고 있는 객체
// ()안에 생성자의 파라미터로 값을 보낸다.
const user1 = new User("Hello");
const user2 = new User("World");

console.log(User.username); // undefined
console.log(user1.username); // Nico
console.log(user2.username); // Nico

user1.sayHello();
user2.sayHello();

// 아래의 일련의 과정은 그저 오브젝트를 복사한 것에 지나지 않는다.
const example = {
  username: "Nico",
  sayHello() {
    console.log("Hello World");
  }
};
```

# #10.1 Extending Classes

클래스 안의 `this`는 클래스 그 자체를 가리킨다.

그런데 어디에 있느냐에 따라 지칭하는 대상이 달라진다. 브라우저에서는 window.

```js
class User {
  constructor(username, lastName, email, password) {
    this.username = username;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  // 원하는 만큼의 프로퍼티를 만들 수 있다.
  sayHello() {
    console.log(`Hello my name is ${this.username}`);
  }
  getProfile() {
    console.log(`${this.username} ${this.lastName} ${this.email} ${this.password}`);
  }
  updatePassword(currentPassword, newPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("Can't change Password");
    }
  }
}

const user1 = new User("Simyeong", "Ryu", "rsm0503@gmail.com", "1234");

user1.sayHello();
user1.getProfile();

console.log(user1.password);
user1.updatePassword("12343", "12345");
console.log(user1.password);

// class extends
class Admin extends User {
  deleteWebsite() {
    console.log("Deleteing...");
  }
}

// User의 생성자를 그대로 이용할 수 있다.
const admin1 = new Admin("Simyeong", "Ryu", "rsm0503@gmail.com", "1234", true);

admin1.deleteWebsite(); // Admin에 정의된 함수를 사용 가능
user1.deleteWebsite(); // Typeerror. 사용 불가.

console.log(admin1.email); // Admin은 User에 정의된 프로퍼티 사용 가능.
```

부모 클래스의 생성자 이용하기 + 생성자 파라미터 객체로 받기

```js
class User {
  /**
  constructor(options) {
    this.username = options.username;
    this.lastName = options.lastName;
    this.email = options.email;
    this.password = options.password;
  }
  /*/ // 위와 아래는 같다.
  constructor({ username, lastName, email, password }) {
    this.username = username;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  /**/
  // 원하는 만큼의 프로퍼티를 만들 수 있다.
  sayHello() {
    console.log(`Hello my name is ${this.username}`);
  }
  getProfile() {
    console.log(`${this.username} ${this.lastName} ${this.email} ${this.password}`);
  }
  updatePassword(currentPassword, newPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("Can't change Password");
    }
  }
}
// 많은 수의 파라미터를 보내야 한다면 객체를 이용한다.
const user1 = new User({
  username: "Simyeong",
  lastName: "Ryu",
  email: "rsm0503@gmail.com",
  password: "1234"
});

user1.sayHello();
user1.getProfile();

console.log(user1.password);
user1.updatePassword("12343", "12345");
console.log(user1.password);

// class extends
class Admin extends User {
  // 이렇게 생성자를 새로 정의하면 User의 생성자는 사라져버린다.
  constructor({ username, lastName, email, password, superAdmin, isActive }) {
    // class 안에서만 사용 가능한 함수. 부모 클래스의 생성자를 호출한다.
    super({ username, lastName, email, password });
    this.superAdmin = superAdmin;
    this.isActive = isActive;
  }

  deleteWebsite() {
    console.log("Deleteing...");
  }
}

const admin1 = new Admin({
  username: "Simyeong",
  lastName: "Ryu",
  email: "rsm0503@gmail.com",
  password: "1234",
  superAdmin: true,
  isActive: true
});

console.log(admin1.email); // 부모클래스에서 정의된 생성자를 이용할 수 있게 된다.
```

클래스 안에서 `this` 는 지칭 대상에 변할 수 있으므로 조심한다.

```js
class Counter {
  constructor({ initNumber = 0, counterId, plusId, minusId }) {
    this.count = initNumber;
    this.counter = document.getElementById(counterId);
    this.plusBtn = document.getElementById(plusId);
    this.minusBtn = document.getElementById(minusId);
    this.addEventListener();
  }
  addEventListener() {
    console.log(this); // Counter
    // EventListener를 거치면 this가 클래스에서 해당 HTML 요소로 변한다.
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  }
  increase() {
    console.log(this); // this === Button
    this.count = this.count + 1;
    this.paintCounter();
  }
  decrease() {
    console.log(this); // this === Button
    this.count = this.count - 1;
    this.paintCounter();
  }
  paintCounter() {
    this.counter.innerText = this.count;
  }
}

new Counter({
  counterId: "count",
  plusId: "plus",
  minusId: "minus"
});
```

클래스의 함수(메소드)의 `this`가 항상 클래스 자체를 가리키게 하고 싶다면 arrow function으로 정의한다.

```js
  addEventListener = () => {
    console.log(this); // Counter
    // EventListener를 거치면 this가 클래스에서 해당 HTML 요소로 변한다.
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  }
  increase = () => {
    console.log(this); // this === Button
    this.count = this.count + 1;
    this.paintCounter();
  }
  decrease = () => {
    console.log(this); // this === Button
    this.count = this.count - 1;
    this.paintCounter();
  }
  paintCounter = () => {
    this.counter.innerText = this.count;
  }
}
```

클래스는 재활용하기가 쉽다.

```js
class Counter {
  constructor({ initNumber = 0, counterId, plusId, minusId }) {
    this.count = initNumber;
    this.counter = document.getElementById(counterId);
    this.plusBtn = document.getElementById(plusId);
    this.minusBtn = document.getElementById(minusId);
    this.counter.innerText = this.count;
    this.addEventListener();
  }
  addEventListener = () => {
    console.log(this); // Counter
    // EventListener를 거치면 this가 클래스에서 해당 HTML 요소로 변한다.
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  }
  // 클래스 안에서 this를 항상 클래스로 유지하고 싶다면 함수를 화살표 함수로 정의하자.
  increase = () => {
    console.log(this); // Button
    this.count = this.count + 1;
    this.paintCounter();
  }
  decrease = () => {
    console.log(this); // Button
    this.count = this.count - 1;
    this.paintCounter();
  }
  paintCounter = () => {
    this.counter.innerText = this.count;
  }
}
// 매우 간단히 재활용이 가능하다.
new Counter({ counterId: "count", plusId: "plus", minusId: "minus" });
new Counter({ counterId: "count2", plusId: "plus2", minusId: "minus2", initNumber: 555 });
```

예시 HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div>
    <h1>Count 1</h1>
    <span id="count"></span>
    <button id="plus">++</button>
    <button id="minus">--</button>
  </div>
  <div>
    <h1>Count 2</h1>
    <span id="count2"></span>
    <button id="plus2">++</button>
    <button id="minus2">--</button>
  </div>
  <script src="app.js"></script>
  <script src="app2.js"></script>
</body>

</html>
```