//Задание 1
const min = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

min(10, 20);

//Задание 2
const even = (a) => {
  if (a % 2 === 0) {
    return "Число четное";
  } else {
    return "Число нечетное";
  }
};

even(2);

//Задание 3.1
const square1 = (a) => {
  alert(a ** 2);
};

square(2);

//Задание 3.2
const square2 = (a) => {
  let sqr = a ** 2;
  return sqr;
};

square2(5);

//Задание 4
const userAge = () => {
  const age = prompt("Сколько вам лет?");
  if (age < 0) {
    alert("Вы ввели неправильное значение");
  } else if (age <= 12) {
    alert("Привет, друг!");
  } else {
    alert("Добро пожаловать!");
  }
};

//Задание 5
const isNan = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return "Одно или оба значения не являются числом";
  } else {
    return a * b;
  }
};

console.log(isNan(3, 3));
console.log(isNan("три", 3));

//Задание 6
const sqrUserNum = () => {
  const n = prompt("Придумай значение для переменной n");
  if (isNaN(n)) {
    return "Переданный параметр не является числом";
  } else {
    const sqr = n ** 2;
    return `n в кубе равняется ${sqr}`;
  }
};

sqrUserNum();

//Задание 7
function getArea() {
  return 3.14 * this.radius ** 2;
}

function getPerimeter() {
  return 2 * 3.14 * this.radius;
}

const circle1 = {
  radius: 10,
  area: getArea,
  perimeter: getPerimeter,
};

const circle2 = {
  radius: 20,
  area: getArea,
  perimeter: getPerimeter,
};

console.log(circle1.area());
console.log(circle1.perimeter());
console.log(circle2.area());
console.log(circle2.perimeter());
