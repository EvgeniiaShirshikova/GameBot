const gameBotFunction = function() {
    function randomGenerate(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    let mysteryNumber = randomGenerate(1, 100);
    let answerNum = '';
    let tries = 3;
        
    const checkIsNumber = function(x) {
        return !isNaN(parseFloat(x)) && isFinite(x)
    }

    return function getResult() {
        answerNum = prompt('Угадайте число от 1 до 100. У вас 3 попытки');

        if (answerNum === null) {
            alert('Вы завершили игру')
            return
        }

        while (!checkIsNumber(answerNum) || answerNum.trim() === '') {
            alert('Вы ыыели строку.');
            answerNum = prompt('Угадайте число от 1 до 100.');
        }

        answerNum = Number(answerNum);

        if (mysteryNumber > answerNum) {
            alert('Загаданное число больше. ' + 'Осталось попыток: ' + tries)
        } else if (mysteryNumber < answerNum) {
            alert('Загаданное число меньше. ' + 'Осталось попыток: ' + tries)
        } else if (mysteryNumber === answerNum) {
            const isUserWantsNewGame = confirm('Поздравляю, вы угадали!!! Хотите сыграть еще?')
            if (isUserWantsNewGame) {
                tries = 3
                mysteryNumber = randomGenerate(1, 100)
            } else {
                tries = 0
            }
        }


        if (tries > 0) {
            tries--
            getResult();
        } else {
            const maybeAgain = confirm('Попыток больше нет, игра окончена. Хотите начать заново?')
            if (maybeAgain) {
                tries = 3
                getResult();
            } else {
                alert('Вы завершили игру')
                return
            }
        }
    }
}

let launchGameBot = gameBotFunction();
launchGameBot();