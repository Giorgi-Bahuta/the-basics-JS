//Игра "Угадай число"
const guessNum = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let userNum = null;

  while (userNum !== randomNumber) {
    userNum = Number(
      prompt("Я придумал число от 1 до 100. Попробуй его угадать")
    );
    userNum > 100 || userNum < 1
      ? alert("Ты должен ввести цифру от 1 до 100")
      : userNum > randomNumber
      ? alert("Мое число меньше, попробуй еще")
      : userNum < randomNumber
      ? alert("Мое число больше, попробуй еще")
      : alert("Верно, молодец!");
  }
};

guessNum();

//Игра "Простая арифметика"
const randomTask = () => {
  const arr = ["+", "-", "*", "/"];
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  const symbol = arr[Math.floor(Math.random() * 4)];

  const userAnswer = prompt(
    `Напиши решение уравнения: ${num1} ${symbol} ${num2}`
  );

  let answer = null;

  if (symbol === "+") {
    answer = num1 + num2;
  } else if (symbol === "-") {
    answer = num1 - num2;
  } else if (symbol === "*") {
    answer = num1 * num2;
  } else if (symbol === "/") {
    answer = num1 / num2;
  }

  if (Number(userAnswer) === answer) {
    alert("Верно");
  } else {
    alert("Неправильно");
  }
};

randomTask();

//Игра "Переверни текст"
function reverseText() {
  const userWord = String(prompt("Введи текст"));
  const reverseWord = userWord.split(" ").reverse().join(" ");
  alert(reverseWord);
}

reverseText();

//Игра "Викторина"
function quizz() {
  const quiz = [
    {
      question: "Какого цвета небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2,
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2,
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2,
    },
  ];
  let score = 0;

  const userAnswer1 = Number(prompt(`${quiz[0].question}\n${quiz[0].options}`));
  if (userAnswer1 === (quiz[0].correctAnswer)) {
    alert("молодей");
    score++
  } else {
    alert('не верно')
  }

  const userAnswer2 = Number(prompt(`${quiz[1].question}\n${quiz[1].options}`));
  if (userAnswer2 === (quiz[1].correctAnswer)) {
    alert("молодей");
    score++
  } else {
    alert('не верно')
  }

  const userAnswer3 = Number(prompt(`${quiz[2].question}\n${quiz[2].options}`));
  if (userAnswer3 === (quiz[2].correctAnswer)) {
    alert("молодей");
    score++
  } else {
    alert('не верно')
  }

  alert(`Квиз окончен! Ты заработал ${score} балла(ов)`)
}
quizz();
