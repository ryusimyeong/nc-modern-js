const userObj = {
  username: "Simyeong",
  age: 28,
  password: "1234"
};

const userFilter = {
  get: (target, prop, receiver) => {
    return prop === "password" ? `${"*".repeat(5)}` : target[prop];
  },
  set: () => {
    console.log("wrote something");
  }
};

// Proxy(targetObj, handlerObj)
const filterdUser = new Proxy(userObj, userFilter);
console.log(filterdUser.username); // "Simyeong"
console.log(filterdUser.age); // 28
console.log(filterdUser.password); // *****