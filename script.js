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
