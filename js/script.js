let currentDate = new Date(); //  получить текущую дату
let currentDateMs = currentDate.getTime(); // получить текущую дату в миллисекундах
let dayNumber = (currentDate.getDay() + 6) % 7; // в объекте Date обратный отсчет дней недели начинается с воскресенья, поэтому мы сдвигаем его так, чтобы он начинался с понедельника
let result = currentDateMs - 86400000 * dayNumber; // количество мл.сек. в дне (1000 * 3600 * 24 = 86400000) умножается на номер текущего дня (0-6) от текущей даты, а также из-за этого нам не нужно проверять, понедельник ли это, поскольку номер понедельника здесь равен 0, и это исключит ненужное вычитание
let resultDate = new Date(result);

console.log(resultDate.toDateString()); // тест
console.log(resultDate.getDate()) // тест

let startDate = String(resultDate.getDate())
    // если дата из 1 символа (значит до 10) то...
    if (resultDate.getDate.length == 0) {
        startDate = '0' + startDate
    }

let startMouth = String(resultDate.getMonth() + 1)  // найти нормальный фикс месяца, js начинает с 0 месяца 
    if (resultDate.getMonth.length == 0) {
        startMouth = '0' + startMouth
    }

let startYaer = String(resultDate.getFullYear())

let endDate = String(resultDate.getDate() + 6)
    if (endDate.length == 0) {
        endDate = '0' + endDate
    }

console.log(String('0' + resultDate.getDate()))
console.log("start"+" "+startDate+" "+startMouth+" "+startYaer)
console.log("end"+" "+endDate)
console.log("https://mauniver.ru/student/timetable/new/print.php?key=db41c738-199f-11ef-9f67-1cc1de6f817c&perstart="+startYaer+"-"+startMouth+"-"+startDate+"&perend=2024-09-08")
document.getElementById("result").src="https://mauniver.ru/student/timetable/new/print.php?key=db41c738-199f-11ef-9f67-1cc1de6f817c&perstart="+startYaer+"-"+startMouth+"-"+startDate+"&perend=2024-09-08";
