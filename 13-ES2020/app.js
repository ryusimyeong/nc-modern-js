let array = [1, [2], [[3]], [[[4]]], [[[[5]]]]];

console.log(array); // [1, [2], [[3]], [[[4]]], [[[[5]]]]];

array = array.flat(1);

console.log(array); // [1, 2, [3], [[4]], [[[5]]]];

array = array.flat(2);

console.log(array); // [1, 2, 3, 4, [5]];

array = array.flat(3);

console.log(array); // [1, 2, 3, 4, 5];

