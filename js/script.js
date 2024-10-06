function currentWeek() {
    Date.prototype.GetFirstDayOfWeek = function() {
        return (new Date(this.setDate(this.getDate() - this.getDay()+ (this.getDay() == 0 ? -6:1) )));
    }
    
    Date.prototype.GetLastDayOfWeek = function() {
        return (new Date(this.setDate(this.getDate() - this.getDay() +7)));
    }

    let today = new Date(),
        startDate = String(today.GetFirstDayOfWeek().getDate()),
        startMouth = String(today.getMonth()+1),
        endDate = String(today.GetLastDayOfWeek().getDate()),
        endMouth = parseInt(startDate) > parseInt(endDate) ? String(today.getMonth()+2) : String(today.getMonth()+1),
        startYaer = String(today.getFullYear()),
        endYaer = String(today.getFullYear())

    startDate = startDate.length <= 1 ? "0" + startDate : startDate
    startMouth = startMouth.length <= 1 ? "0" + startMouth : startMouth
    endDate =  endDate.length <= 1 ? "0" + endDate : endDate
    endMouth = endMouth.length <=1 ? "0" + endMouth : endMouth
    endDate = endDate.length == 0 ? "0" + endDate : endDate

    console.log("Начало недели:"+" "+startDate) // проверка значений
    console.log("Конец недели:"+" "+endDate) // проверка значений
    console.log("Резульатат сборки: "+"\n"+"https://mauniver.ru/student/timetable/new/print.php?key=db41c738-199f-11ef-9f67-1cc1de6f817c&perstart="+startYaer+"-"+startMouth+"-"+startDate+"&perend="+endYaer+"-"+endMouth+"-"+endDate) // проверка результата сборки
    document.getElementById("result_iframe").src="";
    document.getElementById("result_iframe").src="https://mauniver.ru/student/timetable/new/print.php?key=db41c738-199f-11ef-9f67-1cc1de6f817c&perstart="+startYaer+"-"+startMouth+"-"+startDate+"&perend="+endYaer+"-"+endMouth+"-"+endDate;
}

 function nextWeek() {
    Date.prototype.GetFirstDayOfWeek = function() {
        return (new Date(this.setDate(this.getDate() - this.getDay() +1)));
    }
    
    Date.prototype.GetLastDayOfWeek = function() {
        return (new Date(this.setDate(this.getDate() - this.getDay() +7)));
    }
    
    let today = new Date(),
    startDate = String(today.GetFirstDayOfWeek().getDate()),
    startMouth = String(today.getMonth()+1),
    endDate = String(today.GetLastDayOfWeek().getDate()),
    endMouth = parseInt(startDate) > parseInt(endDate) ? String(today.getMonth()+2) : String(today.getMonth()+1),
    startYaer = String(today.getFullYear()),
    endYaer = String(today.getFullYear())

    startDate = startDate.length <= 1 ? "0" + startDate : startDate
    startMouth = startMouth.length <= 1 ? "0" + startMouth : startMouth
    endDate =  endDate.length <= 1 ? "0" + endDate : endDate
    endMouth = endMouth.length <=1 ? "0" + endMouth : endMouth
    endDate = endDate.length == 0 ? "0" + endDate : endDate

    console.log("Начало недели:"+" "+startDate) // проверка значений
    console.log("Конец недели:"+" "+endDate) // проверка значений
    console.log("Резульатат сборки: "+"\n"+"https://mauniver.ru/student/timetable/new/print.php?key=db41c738-199f-11ef-9f67-1cc1de6f817c&perstart="+startYaer+"-"+startMouth+"-"+startDate+"&perend="+endYaer+"-"+endMouth+"-"+endDate) // проверка результата сборки
    document.getElementById("result_iframe").src="";
    document.getElementById("result_iframe").src="https://mauniver.ru/student/timetable/new/print.php?key=db41c738-199f-11ef-9f67-1cc1de6f817c&perstart="+startYaer+"-"+startMouth+"-"+startDate+"&perend="+endYaer+"-"+endMouth+"-"+endDate;
}

currentWeek(); 

document.getElementById("btn_corrent_week").addEventListener('click', function btnCorrentWeekClick() {currentWeek()});
document.getElementById("btn_next_week").addEventListener("click", function btnNextWeekClick() {nextWeek();});
