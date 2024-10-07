//Zadanie 1
const text = "js";

console.log(text.toUpperCase());

//Zadanie 2
function identical(words, pos) {
  const oneBeginning = [];
  words.forEach((word) => {
    if (word.toUpperCase().startsWith(pos.toUpperCase())) {
      oneBeginning.push(word);
    }
  });
  return oneBeginning;
}

identical(["Яблоко", "груша", "ягоды", "Ягуар"], "яг");

//Zadanie 3
const num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//Zadanie 4
function maxNum(...num) {
  console.log(Math.max(...num));
}

maxNum(52, 53, 49, 77, 21, 32);

//Zadanie 5
console.log(Math.floor(Math.random() * 10) + 1);

//Zadanie 6
// function randomArr(num) {
//   const arr = [];
//   while (arr.length < num / 2) {
//     arr.push(Math.round(Math.random() * num));
//   }
//   return arr;
// }

// randomArr(6);

function randomArr(num) {
  const arr = [];
  for (let i = 1; i <= num / 2; i++) {
    arr.push(Math.round(Math.random() * num));
  }
  return arr;
}

randomArr(6);

//Zadanie 7
function randomNumber(num1, num2) {
  return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

randomNumber(4, 10);

//Zadanie 8
console.log(new Date());

//Zadanie 9
const myDate = new Date();
const date = myDate.getDate();
myDate.setDate(date + 73);
console.log(myDate);

//Zadanie 10
function myDate(date) {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const daysOfWeek = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = daysOfWeek[date.getDay()];

  const formattedDate = `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.`;
  const formattedTime = date.toLocaleTimeString("ru-RU");

  return `${formattedDate}\n${formattedTime}`;
}

// Пример использования
const date = new Date();
console.log(myDate(date));
