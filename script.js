//Игра "Угадай число"
const guessNum = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let userNum = null;

  while (userNum !== randomNumber) {
    userNum = prompt("Я придумал число от 1 до 100. Попробуй его угадать");

    // Проверка на нажатие "Отмена"
    if (userNum === null) {
      alert("Игра окончена.");
      break;
    }

    userNum = Number(userNum);

    userNum > 100 || userNum < 1
      ? alert("Ты должен ввести цифру от 1 до 100")
      : userNum > randomNumber
      ? alert("Мое число меньше, попробуй еще")
      : userNum < randomNumber
      ? alert("Мое число больше, попробуй еще")
      : alert("Верно, молодец!");
  }
};

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

//Игра "Переверни текст"
function reverseText() {
  const userWord = String(prompt("Введи текст"));
  const reverseWord = userWord.split("").reverse().join("");
  alert(reverseWord);
}

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

  for (let i = 0; i < quiz.length; i++) {
    const userAnswer1 = Number(
      prompt(`${quiz[i].question}\n${quiz[i].options}`)
    );
    if (userAnswer1 === quiz[i].correctAnswer) {
      alert("молодец");
      score++;
    } else {
      alert("не верно");
    }
  }

  alert(
    `Квиз окончен! Ты ответил(а) верно на ${score} из ${quiz.length} вопросов`
  );
}

//Игра "Камень, ножницы, бумага"
function rockPaperScissors() {
  const userChoice = prompt("Выбери камень, ножницы или бумага").toLowerCase();
  const arr = ["камень", "ножницы", "бумага"];
  const randomNum = Math.floor(Math.random() * 3);
  const compChoice = arr[randomNum];

  if (!arr.includes(userChoice)) {
    alert("Ошибка: введено некорректное значение");
    return;
  }

  if (userChoice === compChoice) {
    alert("Ничья");
  } else if (
    (userChoice === "камень" && compChoice === "ножницы") ||
    (userChoice === "ножницы" && compChoice === "бумага") ||
    (userChoice === "бумага" && compChoice === "камень")
  ) {
    alert(`Ты выиграл, у компьютера ${compChoice}`);
  } else {
    alert(`Ты проиграл, у компьютера ${compChoice}`);
  }
}
