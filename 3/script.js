const arr = [
    "Apple",
    "Banana",
    "Kiwi",
    "Grape",
    "Orange",
    "Fig",
    "Plum",
    "Cherry"
];

const newArr = [];

arr.forEach(element => {
    if (element.length % 2 === 0) {
        newArr.push(element);
    }
});

document.writeln(newArr);