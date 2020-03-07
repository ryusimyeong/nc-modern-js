const friends = ["Nico", "Lynn", "ha", "hu", "Dal", "mark", "aadf", "asdfasdf", "vcf"];

for(let i = 0; i < friends.length; i++) {
    console.log(`${i} I love Kimchi`);
}

// forEach의 인자는 요소, 인덱스, 현재 array
// 배열에만 사용 가능하다.
friends.forEach((currentItem, currentIndex, currentArray) => console.log(currentItem, currentIndex, currentArray));


// forEach와는 다르게 item을 const나 let으로 선택할 수 있따.
// 배열 뿐만 아니라 String에도 사용 가능하다.
for (const friend of friends) {
    console.log(friend);
}

for (const letter of "friends asdfasdfadsfasdf") {
    console.log(letter);
}

// for of 는 어레이, 스트링 노드리스트. 타입드어레이, 맵, 셋에 다 사용 가능

// if문 등을 사용해서 루프를 멈출 수도 있다.
for (const friend of friends) {
    if (friend === "mark") {
        break;
    } else {
        console.log(friend);
    }
}