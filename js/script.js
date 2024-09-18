let resultDate

function currentWeek() {
    let currentDate = new Date(); //  получить текущую дату
    let currentDateMs = currentDate.getTime(); // получить текущую дату в миллисекундах
    let dayNumber = (currentDate.getDay() + 6) % 7; // в объекте Date обратный отсчет дней недели начинается с воскресенья, поэтому мы сдвигаем его так, чтобы он начинался с понедельника
    let result = currentDateMs - 86400000 * dayNumber; // количество мл.сек. в дне (1000 * 3600 * 24 = 86400000) умножается на номер текущего дня (0-6) от текущей даты, а также из-за этого нам не нужно проверять, понедельник ли это, поскольку номер понедельника здесь равен 0, и это исключит ненужное вычитание
    resultDate = new Date(result);
    let startDate = String(resultDate.getDate()) // если дата из 1 символа (значит до 10) то добавляем вначало "0" для правильного отображения
        if (resultDate.getDate.length > 0) {
            startDate = '0' + startDate
        }
    
    let startMouth = String(resultDate.getMonth() + 1) // нужно найти нормальный фикс месяца, js начинает с 0 месяца (при возможности)
        if (resultDate.getMonth.length == 0) {
            startMouth = '0' + startMouth
        }
    
    let startYaer = String(resultDate.getFullYear())
    
    let endDate = String(resultDate.getDate() + 6)
        if (endDate.length == 0) {
            endDate = '0' + endDate
        }
    
        console.log("Начало недели:"+" "+startDate) // проверка значений
        console.log("Конец недели:"+" "+endDate) // проверка значений
        console.log("Резульатат сборки: "+ "\n" + "https://mauniver.ru/student/timetable/new/print.php?key=db41c738-199f-11ef-9f67-1cc1de6f817c&perstart="+startYaer+"-"+startMouth+"-"+startDate+"&perend="+startYaer+"-"+startMouth+"-"+endDate) // проверка результата сборки
        document.getElementById("result_iframe").src="";
        document.getElementById("result_iframe").src="https://mauniver.ru/student/timetable/new/print.php?key=db41c738-199f-11ef-9f67-1cc1de6f817c&perstart="+startYaer+"-"+startMouth+"-"+startDate+"&perend="+startYaer+"-"+startMouth+"-"+endDate;
}

function nextWeek() {
    let currentDate = new Date(); //  получить текущую дату
    let currentDateMs = currentDate.getTime(); // получить текущую дату в миллисекундах
    let dayNumber = (currentDate.getDay() - 8) % 7; // в объекте Date обратный отсчет дней недели начинается с воскресенья, поэтому мы сдвигаем его так, чтобы он начинался со следующего понедельника
    let result = currentDateMs - 86400000 * dayNumber; // количество мл.сек. в дне (1000 * 3600 * 24 = 86400000) умножается на номер текущего дня (0-6) от текущей даты, а также из-за этого нам не нужно проверять, понедельник ли это, поскольку номер понедельника здесь равен 0, и это исключит ненужное вычитание
    resultDate = new Date(result);
    let startDate = String(resultDate.getDate()) // если дата из 1 символа (значит до 10) то добавляем вначало "0" для правильного отображения
        if (resultDate.getDate.length > 0) {
            startDate = '0' + startDate
        }
    
    let startMouth = String(resultDate.getMonth() + 1) // нужно найти нормальный фикс месяца, js начинает с 0 месяца (при возможности)
        if (resultDate.getMonth.length == 0) {
            startMouth = '0' + startMouth
        }
    
    let startYaer = String(resultDate.getFullYear())
    
    let endDate = String(resultDate.getDate() + 6)
        if (endDate.length == 0) {
            endDate = '0' + endDate
        }
    
        console.log("Начало недели:"+" "+startDate) // проверка значений
        console.log("Конец недели:"+" "+endDate) // проверка значений
        console.log("Резульатат сборки: "+ "\n" + "https://mauniver.ru/student/timetable/new/print.php?key=db41c738-199f-11ef-9f67-1cc1de6f817c&perstart="+startYaer+"-"+startMouth+"-"+startDate+"&perend="+startYaer+"-"+startMouth+"-"+endDate) // проверка результата сборки
        document.getElementById("result_iframe").src="";
        document.getElementById("result_iframe").src="https://mauniver.ru/student/timetable/new/print.php?key=db41c738-199f-11ef-9f67-1cc1de6f817c&perstart="+startYaer+"-"+startMouth+"-"+startDate+"&perend="+startYaer+"-"+startMouth+"-"+endDate;

}

currentWeek();
document.getElementById("btn_corrent_week")
    .addEventListener('click', function btnCorrentWeekClick() {
        currentWeek()
});
document
  .getElementById("btn_next_week")
  .addEventListener("click", function btnNextWeekClick() {
        nextWeek();
});
