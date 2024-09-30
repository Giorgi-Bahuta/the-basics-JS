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
