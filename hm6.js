//Задание 1
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 10) {
    console.log(arr[i]);
  } else {
    break;
  }
}

//Задание 2
const arr = [1, 5, 4, 10, 0, 3];

const num = arr.indexOf(4);
console.log(num);
// второй вариант
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    console.log(i);
  }
}
// третий вариант
const arr = [1, 5, 4, 10, 0, 3];

arr.forEach((el, i) => {
  if (el === 4) {
    console.log(i);
  }
});
// четвертый вариант
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    console.log(i);
  }
}

//Задание 3
const arr = [1, 3, 5, 10, 20];

const items = arr.join(" ");
console.log(items);

//Задание 4
const arr = [];

for (let i = 0; i < 3; i++) {
  const innerArr = [];
  for (let j = 0; j < 3; j++) {
    innerArr.push(1);
  }
  arr.push(innerArr);
}
console.log(arr);

//Задание 5
const arr = [1, 1, 1];

arr.push(2, 2, 2);
console.log(arr);

//Задание 6
const arr = [9, 8, 7, "a", 6, 5];

arr.sort().pop();
console.log(arr);
//второй способ
const arr = [9, 8, 7, "a", 6, 5];

const newArr = arr.sort().filter((item) => item !== "a");
console.log(newArr);

//Задача 7
const arr = [9, 8, 7, 6, 5];
const answer = Number(prompt("Угадай число"));

if (arr.includes(answer)) {
  alert("Верно");
} else {
  alert("неверно");
}

//Задача 8
const string = "abcdef";

const reverse = a.split("").reverse().join("");
console.log(reverse);

//Задание 9
const arr = [
  [1, 2, 3],
  [4, 5, 6],
];

const newArr = [...arr[0], ...arr[1]];
console.log(newArr);

//Задача 10
const arr = [1, 5, 3, 2];

for (let i = 0; i < arr.length - 1; i++) {
  console.log(arr[i] + arr[i + 1]);
}

//Задание 11
const arr = (...arr) => {
  const newArr = arr.map((item) => item ** 2);
  console.log(newArr);
};

arr(2, 4, 5);

//Задание 12
const arr = (...arr) => {
  const newArr = arr.map((item) => item.length);
  console.log(newArr);
};

arr("здарова", "хай", "ку");

//Задание 13
const arr = (...arr) => {
  const newArr = arr.filter((item) => item < 0);
  console.log(newArr);
};

arr(1, -4, 6, -5, 3);

//Задание 14
const arr = [];
const newArr = [];

for (let i = 0; i < 10; i++) {
  const a = Math.round(Math.random() * 10);
  arr.push(a);
  if (a % 2 === 0) {
    newArr.push(a);
  }
}
console.log(arr);
console.log(newArr);

//Задание 15
const arr = [];

for (let i = 0; i < 6; i++) {
  const a = Math.round(Math.random() * 10);
  arr.push(a);
}
const c = arr.reduce((interm, value) => interm + value);
console.log(arr);
console.log(c / 6);
