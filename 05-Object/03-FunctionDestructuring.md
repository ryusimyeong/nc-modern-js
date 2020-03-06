# #5.3 Function Destructuring

함수를 사용하는 object destructuring

```js
function saveSettings(followAlert, unfollowAlert, marketingAlert, themeColor);

saveSettings(true, true, true, "green");
```

위와 같이 하면 매개변수가 너무 길게 늘어져서 보기 힘들다. 또한 함수 선언문과 함수 실행 사이에 6000줄 이상의 코드가 있다고 생각해보면 인자로 들어가고 있는 값들이 대체 뭘 위한 값인지 알기 어렵다. 

따라서, 아래와 같이 object로 담아서 한 번에 처리하는 것이 여러모로 바람직하다.
```js
function saveSettings(settings) {
    // 만약 마케팅 수신을 거부했을 때 특정 동작을 실행하게 하고 싶다면?
    if(!marketingAlert) {
        // 기능
    }

    // 만약 alert와 color를 따로 저장해야 한다면?
    // 이때 유저가 color값을 입력하지 않으면 오류가 난다.
    saveColor(settings.themeColor);
};

saveSettings({
    followAlert: true,
    unfollowAlert: true,
    marketingAlert: true,
    themeColor: "green"
})
```

근데 위의 방법 또한 함수를 실행할 때는 편한데, 함수를 작성할 때는 어렵다. 

1. 변수의 가독성 증가
2. 변수의 기본값 정의

destructuring 으로 두 가지를 해결한다.

```js
function saveSettings({followAlert, unfollowAlert, marketingAlert, themeColor = "blue"}) {
    console.log(themeColor); // blue 출력
};

saveSettings({
    followAlert: true,
    unfollowAlert: true,
    marketingAlert: true,
    // themeColor: "green"
})
```
혹은
```js
function saveSettings({ notifications, color: { theme = "blue" }}) {
    
};

saveSettings({
    notifications: {
        followAlert: true,
        unfollowAlert: true,
        marketingAlert: true
    },
    color: {
        theme: "green"
    }
})
```