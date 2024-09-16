//Задание 1
let z = 10;
alert(z);

z = 20;
alert(z);

//Задание 2
const firstIphone = 2005;
alert(firstIphone);

//Задание 3
const crtJs = "Я";
alert(crtJs);

//Задание 4
let a = 10;
let b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);

//Задание 5
let result = 2 ** 5;
alert(result);

//Задание 6
let x = 9;
let y = 2;
alert(x % y);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Задание 8
let ageU = prompt("Сколько вам лет?");
alert(ageU);

//Задание 9
let user = {
  name: "Pasha",
  age: 20,
  isAdmin: true,
};

//Задание 9.1
user["city of residence"] = "Moscow";

//Задание 9.2
user.age = 35;

//Задание 9.3
delete user["city of residence"];

//Задание 9.4
let info = prompt("что хочешь узнать?");
alert(user[info]);

//Задание 10
let whatName = prompt("Как тебя зовут?");
alert(`Привет, ${whatName}!`);