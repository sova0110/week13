//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
let currentDate = new Date();
console.log(currentDate);
//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
let currentYear = currentDate.getFullYear();
console.log(currentYear);
//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
let currentMonth = currentDate.getMonth();
console.log(currentMonth);
//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
let currentDay = currentDate.getDate();
console.log(currentDay);
//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
let birthday = new Date(2024, 9, 1);
console.log(birthday);
//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
let futureDate = new Date(2024, 6, 15);
console.log(futureDate);
//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
let diff1 = (futureDate-currentDate)/(1000*24*60*60);
console.log(Math.round(diff1));
//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
let pastDate = new Date(2023, 6, 15);
console.log(pastDate);
//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
let diff2 = (currentDate-pastDate)/(1000*24*60*60);
console.log(Math.round(diff2));
//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
let nextWeek = new Date(2024, 5, 1);
console.log(nextWeek);
//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());
//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
    let futureYear = new Date();
    futureYear.setFullYear(futureYear.getFullYear() + 5);
    console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
futureDateInFutureYear = new Date(2025, 9, 1);
console.log(futureDateInFutureYear);
//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
let diffYear = futureYear.getFullYear() - currentDate.getFullYear();
console.log(diffYear);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
let date = Date.parse(strDate);
function timestampToDate(ts) {
    var d = new Date();
    d.setTime(ts);
    return ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear();
}
console.log(timestampToDate(date));
//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
let timestamp = Date.parse(strDate);
console.log(timestamp);
//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const wtongDate = '2023/06/15';
let date2=Date.parse( wtongDate);
if (date2=='NaN'){
    console.log('неправиьный формат даты')}
else{
        console.log('корректный формат даты')
    }

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number>0){
    console.log('число положительное')
}
else{
    console.log('число положительное')
}
//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number%2==0){
    console.log('число четное')
}
else{
    console.log('число нечетное')
}
//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number%3==0){
    console.log('кратноеи 3')
}
else{
    console.log('некратное 3')}
//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number>0 && number<10){
    console.log('однозначное')
}
else{
    console.log('многозначное')}
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number>9 && number<100){
    console.log('двухзначное')
}
else{
    console.log('больше чем двухзначное')}
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number>=0){
    console.log('положительное или 0')
}
else{
    console.log('отрицательное')
}
//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number%5==0){
    console.log('кратное 5');
}
else if(number%7==0){
    console.log('кратное 7');
}
else{
    console.log('ни кратно ни 5 ни 7');
}
//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number<=0){
    console.log('отрицательное или 0')
}
else{
    console.log('положительное и не 0')
}
//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number>=100 && number<=999){
    console.log('положительное трехзначное число')
}
else{
    console.log('не положительное трехзначное число')}
//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let day=10;
switch(day){
    case 1:
        day = 1;
        console.log('понедельник');
        break;
    case 2:
        day = 2;
        console.log('вторник');
        break;
    case 3:
        day = 3;
        console.log('среда');
        break;
    case 4:
        day = 4;
        console.log('четверг');
        break;
    case 5:
        day = 5;
        console.log('пятница');
        break;
    case 6:
        day = 6;
        console.log('суббота');
        break;
    case 7:
        day = 7;
        console.log('воскресенье');
        break;
    default:
        console.log('такого дня нет');
}

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'E';
let fullName;

switch (direction) {
    case 'W':
        fullName = 'Запад';
        console.log(fullName);
        break;
    case 'N':
        fullName = 'Севере';
        console.log(fullName);
        break;
    case 'S':
        fullName = 'Юг';
        console.log(fullName);
        break;
    case 'E':
        fullName = 'Восток';
        console.log(fullName);
        break;
    default:
        console.log('такого направления нет');
    
}
