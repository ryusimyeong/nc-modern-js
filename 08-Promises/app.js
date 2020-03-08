const amISexy = new Promise((resolve, reject) => {
    resolve(2);
});

// then은 원하는 만큼 할 수 있다. then들은 정의된 순서로 실행된다.
amISexy
    .then(number => number * 2)
    .then(number => number * 2)
    .then(number => number * 2)
    .then(number => number * 2)
    .then(number => number * 2)
    .then(() => {
        throw Error("Something is wrong");
    })
    .then(number => console.log(number))
    .catch(e => console.log(e));
    
// 다음 then으로 값을 넘겨야 할 땐 반드시 return 값이 존재해야 한다.    
// 그 return값이 다음 then에서의 변수다.
