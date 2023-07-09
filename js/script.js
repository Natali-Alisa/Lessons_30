'use strict';

// 1. Спросить у пользователя чётное число в интервале от 10 до 50 и поделить его пополам и вывести в консоль результат.
let userNamber = prompt('Вкажіть ціле парне число від 10 до 50');
let userNamberNew = userNamber / 2;
console.log(Math.round(userNamberNew));



// 2. Посчитать пример, без консоли (на листике), потом проверить в консоли
// x= - 520

let num = -124;
let x = 100 + (num *= 5);
console.log (x);




// 3. Напишите результаты с учётом преобразования типов данных без компьютера на листике, потом проверь себя  на компьютере

// res_1 = 155
// res_2 = -5
// res_3 = 1
// res_4 = 23
// res_5 = 200
// res_6 = 22px


let res_1 = "" + 15 + 5; 
console.log (res_1);

let res_2 = "" - 10 + 5; 
console.log (res_2);

let res_3 = false + true; 
console.log (res_3);

let res_4 = 69 / "3"; 
console.log (res_4);

let res_5 = "10" * "20"; 
console.log (res_5);

let res_6 = 12+ 10 + "px"; 
console.log (res_6);

// 4. Що повернуть вирази
// 2 && 0 && 3 - 0
// 2 || 0 || 3 - 2
// 2 && 0 || 3 - 3


let res_7 = 2 && 0 && 3;

let res_8 = 2 || 0 || 3;

let res_9 = 2 && 0 || 3;

// 5. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

let sum =(+(0.1+0.2).toFixed(2));
console.log (sum);