let birthdayDate = document.querySelector('#birthday');
let resultShow = document.querySelector('#result');
let errorShow = document.querySelector('#error');
function daysToBirthday(){
    let birthdayStr = birthdayDate.value;
    let birthdayTimeStamp = Date.parse(birthdayStr);
    let currentTimestamp = Date.now();
    let timeToDayX = birthdayTimeStamp - currentTimestamp;
    let daysToDayX = Math.floor(timeToDayX/(1000*24*60*60));
    let daysToDayXStr = daysToDayX.toString();
    console.log(daysToDayXStr);
    let daysText;
    let result = document.getElementById("gift_cardID");
    const img = document.createElement('img');
   if (daysToDayXStr.endsWith('1')){
        resultShow.innerHTML = `Подарки будут через  ${daysToDayX} день`;
    }
    else if(daysToDayXStr=='12' || daysToDayXStr=='13' || daysToDayXStr=='14' ||daysToDayXStr=='112' || daysToDayXStr=='113' || daysToDayXStr=='114'||daysToDayXStr=='212' || daysToDayXStr=='213' || daysToDayXStr=='214' ||daysToDayXStr=='11' || daysToDayXStr=='111' || daysToDayXStr=='211' || daysToDayXStr=='311' || daysToDayXStr=='411'){
        resultShow.innerHTML = `Подарки будут через  ${daysToDayX} дней`;
    }
    else if ((daysToDayXStr.endsWith('2') ||daysToDayXStr.endsWith('3') ||daysToDayXStr.endsWith('4'))){
        resultShow.innerHTML = `Подарки будут через  ${daysToDayX} дня`;
    }
    else if(daysToDayXStr=='NaN'){
        resultShow.innerHTML = '';
    }
    else{
        resultShow.innerHTML = `Подарки будут через ${daysToDayX} дней`;
    };
    errorShow.innerHTML='';
    if (birthdayStr=="") {errorShow.innerHTML='введите дату рождения';  
}

    console.log(birthdayStr)


}