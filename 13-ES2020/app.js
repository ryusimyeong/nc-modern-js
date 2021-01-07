const today = new Date();
// padStart와 padEnd는 String type에만 사용 가능하기 때문에 형변환이 필요하다.
let hours = String(today.getHours()).padStart(2, '0').padEnd(3, 'h');
let minutes = String(today.getMinutes()).padStart(2, '0').padEnd(3, 'm');
let seconds = String(today.getSeconds()).padStart(2, '0').padEnd(3, 's');

console.log(`${hours}:${minutes}:${seconds}`); // 12h:3m:15s 출력