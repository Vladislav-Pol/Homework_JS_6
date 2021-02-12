// 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.

let $1string = "aaa@bbb@ccc";

alert("--- Задание 1 ---\n" + $1string.replace(/@/g, "!"));

// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025.

let $2date = "2025-12-31";

$2date = $2date.replace(/(\d{4})(-)(\d{2})(-)(\d{2}$)/, `$5/$3/$1`);

alert("--- Задание 2 ---\n" + ($2date));

// 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).

let $3string = "Я учу javascript!",
    $3subString1 = $3string.substr(2, 3) + " " + $3string.substr(6, 10),
    $3subString2 = $3string.substring(2, 5) + " " + $3string.substring(6, 16),
    $3subString3 = $3string.slice(2, 5) + " " + $3string.slice(6, 16);

alert("Вырезано с помощью substr()       -" + $3subString1 +
    "\nВырезано с помощью substring()  -" + $3subString2 +
    "\nВырезано с помощью slice()          -" + $3subString3);

// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let $4array = [4, 2, 5, 19, 13, 0, 10],
    $4sum = 0;

for (let a of $4array)
    $4sum += Math.pow(a, 3)

alert("Квадратный корень из суммы кубов элементов массива:\n[4, 2, 5, 19, 13, 0, 10]\n составляет " + Math.sqrt($4sum));

// 5. Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
//     равных соответственно 3 и 5, 6 и 1.

let c;
function subtraction(a, b){
    return c = Math.abs(a - b)
}

alert("Модуль разности чисел 3 и 5 равен " + subtraction(3, 5) +
    "\nМодуль разности чисел 6 и 1 равен " + subtraction(6, 1));

// 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
//     Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).

function formatDate($date){
    let returnDate;
    returnDate = $date.getHours() + ":" + $date.getMinutes() + ":" + $date.getSeconds() + " ";
    returnDate += $date.getDate() > 10 ? $date.getDate() : "0" + $date.getDate();
    returnDate += ".";
    returnDate += $date.getMonth() > 9 ? ($date.getMonth() + 1) : "0" + ($date.getMonth() + 1);
    returnDate += "." + $date.getFullYear();
    return returnDate;
}

alert("Текущая дата " + formatDate(new Date()));

// 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.

let $7text = "aa aba abba abbba abca abea",
    $7regex = /ab+a/gi;

alert($7text.match($7regex));

// 8. Напишите ф-цию строгой проверки ввода номер телефона в
// международном формате (<код страны> <код города или сети> <номер
//     телефона>). Функция должна возвращать true или false. Используйте
//     регулярные выражения.

function ValidatePhone($phone){
    let regex = /\+375\s*\(?\s*\d{2,6}\s*\)\s*(\d\W*){5,10}/,
        flag = regex.test($phone);
    flag ? alert("Номер " + $phone + " принят") : alert("Формат номера " + $phone + " не подходит");
    return flag
}
let phone;
do
    phone = prompt("Введите номер телефона в международном формате\n +375 (код оператора или города) номер телефона", "+375 (29) 123 45 67")
while (!ValidatePhone(phone))

//     9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
//     условия:
//     - весь адрес не должен содержать русские буквы и спецсимволы, кроме
//     одной «собачки», знака подчеркивания, дефиса и точки;
//     - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
//     имя может содержать только буквы, цифры, но не быть первыми и
//     единственными в имени;
//     - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
//     не может быть длиной менее 2 и более 11 символов.
//     Функция должна возвращать true или false. Используйте регулярные
//     выражения.

function ValidateEmail($email){
    let flag = true,
        regex1 = /[\w.-]*@[\w.-]*/,
        regex2 = /[a-z][a-z0-9]{2,}@.*/i,
        regex3 = /.*@.*\.\w{2,11}$/;
    if (regex1.test($email)
        && regex2.test($email)
        && regex3.test($email))
        alert("Адрес электронной почты " + $email + " принят")
    else{
        flag = false;
        alert("Формат адреса электронной почты " + $email + " не подходит");
    }
    return flag
}

let email;
do
    email = prompt("Введите адрес электронной почты", "test@test.test")
while (!ValidateEmail(email))

//     10. Напишите ф-цию, которая из полного адреса с параметрами и без,
//     например: https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
//     доменного имени (https://tech.onliner.by), остальную часть адреса без
//     параметров (/2018/04/26/smart-do-200/), параметры
//     (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
//     может и не быть каких-либо составляющих. Ф-ция должна возвращать
//     массив.

let $10regex = /(http[s]?:[\/]{2}[\w.]*)([\w\/-]*)([\?\w=&]*)([#\w]*)/i,
    $10string = "https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3";
function ReturnUrlSections(url, regex){
    let text = "Части URL",
        array = url.match(regex);
    for (let i = 1; i < array.length; i++)
        text += "\n\n" + array[i]
    alert(text)
}

ReturnUrlSections($10string, $10regex);

