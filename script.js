'use strict'

// "Загадывание случайного числа от 1 до 100"

function game(x, count) {
    let number = prompt('Угадай число от 1 до 100');

    function isNumber(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }

    function reload(text) {
        count--;
        alert(text + ', осталось попыток ' + count);
        game(x, count);
    }


    if (number == null) {
        alert('Игра окончена');
    } else if (count == 0) {
        reload('Попытки закончились, хотите сыграть еще?')
    }else if (!isNumber(number)) {
        reload('Введи число!')
    } else if (+number > x) {
        reload('Загаданное число меньше');
    } else if (+number < x) {
        reload('Загаданное число больше');
    } else if (+number == x) {
        alert('Поздравляю, Вы угадали!!!');
    }
}

game(14, 10);