const cookieBox =document.querySelector(".cookie"),
cookieBtn = cookieBox.querySelector("button");
var userNameEn = document.getElementById("user-name-en"),
userNameEx = document.getElementById("user-name-ex"),
checkBox = document.getElementById("check-box");

var popUp = document.getElementById("pop-up_true");
var popUpEx = document.getElementById("pop-upEx_true");

var popUpFalse = document.getElementById("pop-up_false");
var subEn = document.getElementById("sub-en");
var subEx = document.getElementById("sub-ex");
var subFormEn = document.getElementById("sub-form_en");
var subFormEx = document.getElementById("sub-form_ex");

var enSubTime = document.getElementById("en-time");
var exSubTime = document.getElementById("ex-time");


window.onload = function (){
        
    if(document.cookie){ 
        var userName = localStorage.getItem('name');
        userNameEn.value = userName;
        userNameEx.value = userName;
        checkBox.style.display="flex";

        var exTime = localStorage.getItem("exTime");
        var enTime = localStorage.getItem("enTime");

        enSubTime.innerHTML = "כניסה בוצעה בשעה: " + enTime;
        exSubTime.innerHTML = "יציאה בוצעה בשעה: " + exTime;

        var expPop = localStorage.getItem("exp");
        var expPopEx = localStorage.getItem("expEx");

        if(expPop == datePattern){
            popUp.style.display="block";
            subEn.style.display="none";
        }else{
            popUpFalse.style.display="block";
        }

        if(expPopEx == datePattern){
            popUpEx.style.display="block";
            subEx.style.display="none";

        }   
    }       
    else{
        cookieBox.style.display="flex"
    }
    // alert("תאריך עכשיו: " + datePattern + "\n" +  "תאריך כניסה: " + expPop + "\n" +  "תאריך יציאה: " + expPopEx)
}

cookieBtn.onclick = ()=>{

    document.cookie = "cookie=codingNepal;  max-age="+60*60*24*365;
    if(document.cookie){
        cookieBox.classList.add("hide");
        checkBox.style.display="flex";
    }
    else{
        alert("cookie can't be submit")
    }
}



function remember(){
    user = userNameEn.value;
    localStorage.setItem('name', user);        
    }

var date =new Date();
var hours = date.getHours();
var minute = date.getMinutes();        
var year = date.getFullYear();
var month = date.getMonth()+1; 
var todayDate = String(date.getDate()).padStart(2,'0');


if(minute < 10){
    minute = "0" + minute;
}
if(hours < 10){
    hours = "0" + hours;
}
if(month < 10){
    month = "0" + month;
}

var datePattern = year + '-' + month +'-'+ todayDate;
var timePattern = hours +':'+ minute;

    
var formEn = document.forms[0]
var formEx = document.forms[1]
var radioEn = document.getElementById('entrance');
var radioEx = document.getElementById('exit');
var body = document.body;
var extra1 = document.getElementById("extra1");
var extra2 = document.getElementById("extra2");

var day = document.getElementById("day-time");

if(hours >= 13 ){
    radioEx.checked=true;
    body.style.background="#87d1f443";
    formEn.style.display="none";
    formEx.style.display="flex";
}
else{
    radioEx.checked=false;
    body.style.background="fff";
    formEn.style.display="flex";
    formEx.style.display="none";
}

if(hours < 5 ){
day.innerHTML="למה אתה ער??? ";
}
if(hours >= 5 && hours < 13){
    day.innerHTML="בוקר טוב";
}
if(hours >= 13 && hours < 17){
    day.innerHTML="צהריים טובים";
}
if(hours >= 17 && hours < 21){
    day.innerHTML="ערב טוב";
}
if(hours >= 21 ){
    day.innerHTML="לילה טוב";
}

document.getElementById("time-picker-en").value = timePattern;
document.getElementById("date-picker-en").value = datePattern;
document.getElementById("time-picker-ex").value = timePattern;
document.getElementById("date-picker-ex").value = datePattern;

function show(val){
    if(val == 1){
        formEn.style.display="flex";
        formEx.style.display="none";
            body.style.background="#fff";
        // extra1.style.background="#5c73b9";
        // extra2.style.background="#87d1f4";
        day.innerHTML="ברוך הבא";
    }
    
    if(val == 2){
        formEn.style.display="none";
        formEx.style.display="flex";
        body.style.background="#87d1f443";
        // extra1.style.background="#fff";
        // extra2.style.background="#5c73b9";
        day.innerHTML="להתראות";

    } 

}

if(document.cookie){
    function enter(){
        localStorage.setItem("exp", datePattern);
        localStorage.setItem("enTime", timePattern);
        
        // localStorage.setItem("fillEnTime", document.getElementById("time-picker-en").value);
    }
    function exit(){
        localStorage.setItem("expEx", datePattern);
        localStorage.setItem("exTime", timePattern);
        // localStorage.setItem("fillExTime", document.getElementById("time-picker-ex").value);

    }
}

function moveEx(){           
    document.getElementById("time-picker-en").value = "";
    radioEn.checked=true;
    formEn.style.display="flex";
    formEx.style.display="none";
    body.style.background="#fff";
    day.innerHTML="ברוך הבא";

}

function closeExp(){
    popUp.style.display="none";
    subEn.style.display="block";
    userNameEn.value="";
}
function closeEx(){
    popUpFalse.style.display="none"
    subEx.style.display="block";
}
function closeExpEx(){
    popUpEx.style.display="none";
    subEx.style.display="block";
    userNameEx.value="";
}


formEn.onsubmit = function(){
    subEn.style.display="none";
    subFormEn.style.display="block";

}
formEx.onsubmit = function(){
    subEx.style.display="none";
    subFormEx.style.display="block";

}

function not(){
    Notification.requestPermission().then(perm => {
    if(perm === "granted") {
        const notification = new Notification("hello");
    }
    })
}
    