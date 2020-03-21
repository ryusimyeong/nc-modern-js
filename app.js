const map = new Map();
const weakMap = new WeakMap();

// set(key, value) 요소 추가
map.set("me", 123);
// delete(key) 요소 추가
map.delete("me", 123);
// has(key) 해당 키 존재 여부 
map.has("me");
// get(key) 해당 키의 value 
map.get("me");
// weakMap은 key가 Object 타입이어야 한다. 배열이나 객체.
weakMap.set(["qwe", "qwe"], 123);