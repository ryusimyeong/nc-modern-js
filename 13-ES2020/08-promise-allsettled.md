# Promise.allSettled()

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

`Promise.all()`은 내부의 비동기 처리가 모두 성공해야만 성공 메세지를 반환한다. 단 하나의 비동기 요청이라도 실패한다면 에러코드를 반환한다.

`Promise.all()`은 성공 시 각 요청에 해당하는 Response 객체를 담은 배열을 반환한다.

반면 `Promise.allSettled()`는 모두 성공할 필요는 없다. Promise가 끝나기만 하면 되는데, 이때 반환되는 값의 형태가 좀 다르다.

배열이긴 하나, 별도의 객체의 배열이 반환되는데, `status`, `value`혹은 `reason`라는 key값을 갖는 객체가 배열의 요소다.

`status`는 **요청의 성공 여부**로, 성공 시 `fulfilled`라는 값이 담기고 실패 시 `rejected`라는 값이 담긴다.

성공 시에는 `value`라는 key에 Response 객체가 담기고, 실패 시 `reason`이라는 key에 에러 메세지가 담긴다.

즉, 모든 Promise가 반드시 다 성공할 필요는 없을 때는 allSettled를 쓰고, 모든 Promise가 반드시 성공해야만 할 때는 Promise.all을 사용한다.

Promise들끼리의 상관도가 낮을 때는 allSettled를 사용하고, 각 Promise들의 상관도가 높아서 다 성공하거나, 다 실패해야 할 경우, 즉 원자성이 중요할 경우는 all을 사용한다.