function openFeatures(){
    var allElems= document.querySelectorAll('.elem');
// console.log(allElems);
var allFullElems = document.querySelectorAll('.fullElem');
var allFullElemsBack = document.querySelectorAll('.fullElem .back')
allElems.forEach(function(elem){
    // console.log(elem)
    elem.addEventListener("click",function(){
        // console.log(elem.id);
        allFullElems[elem.id].style.display = 'block';
    })
})
 allFullElemsBack.forEach(function(elem){
    // console.log(elem)
    elem.addEventListener('click',function(){
        allFullElems[elem.id].style.display = 'none';
    })
})
};
openFeatures();
//if we don't want to refresh our static page
function todoList(){

    let currentTask=[];

    if(localStorage.getItem('currentTask')){
    currentTask =  JSON.parse(localStorage.getItem('currentTask'));
    }
    else{
    console.log("task is empty");
}
function renderTask(){
    var allTask = document.querySelector('.allTask');
    var sum = '';
    currentTask.forEach(function(elem , idx){
        sum = sum + `<div class="task">
                       <h5>${elem.task}</h5>
                        <button id=${idx}>Mark as Completed</button>
                        </div>`  
    })
    allTask.innerHTML = sum;
     localStorage.setItem('currentTask', JSON.stringify(currentTask));
      document.querySelectorAll('.task button').forEach(function (btn) {
            btn.addEventListener('click', function () {
                currentTask.splice(btn.id, 1)
                renderTask()
            })
        })

}
// console.log(form)
renderTask();
let form = document.querySelector(".addTask form");
let taskInput = document.querySelector(".addTask form input");
let taskdetailsInput = document.querySelector(".addTask form textarea");

form.addEventListener('submit',function(e){
    e.preventDefault() //to prevent reload in browser
    // console.log(taskdetailsInput);
    currentTask.push(
        {
        task : taskInput.value ,
        details : taskdetailsInput.value
        }
    );
    // console.log(currentTask);
    renderTask();
    taskInput.value='';
    taskdetailsInput.value='';
})
};
todoList();
function dailyPlanner() {
    var dayPlanner = document.querySelector('.day-planner')

    var dayPlanData = JSON.parse(localStorage.getItem('dayPlanData')) || {}

    var hours = Array.from({ length: 18 }, (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`)


    var wholeDaySum = ''
    hours.forEach(function (elem, idx) {

        var savedData = dayPlanData[idx] || ''

        wholeDaySum = wholeDaySum + `<div class="day-planner-time">
    <p>${elem}</p>
    <input id=${idx} type="text" placeholder="..." value=${savedData}>
</div>`
    })

    dayPlanner.innerHTML = wholeDaySum


    var dayPlannerInput = document.querySelectorAll('.day-planner input')

    dayPlannerInput.forEach(function (elem) {
        elem.addEventListener('input', function () {
            console.log('hello');
            dayPlanData[elem.id] = elem.value

            localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData))
        })
    })
}

dailyPlanner()
function motivation_quotes(){
    var motivation = document.querySelector(".motivation-2 h3");
    var motivation_auth = document.querySelector(".motivation-3 h2");
    async function fetchQuote(){
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();
    motivation.innerHTML = data.content;
    motivation_auth.innerHTML = data.author;
}
    }
motivation_quotes();
function pomodoroTimer(){


let timer = document.querySelector(".pomo-timer h1");
var startbtn = document.querySelector(".pomo-timer .start");
var pausebtn = document.querySelector(".pomo-timer .pause");
var resetbtn = document.querySelector(".pomo-timer .reset");

let totalSeconds = 25 * 60;
let timerInterval = null;

function updateTimer(){
    let minutes = Math.floor(totalSeconds/60);
    let seconds = totalSeconds % 60;

    timer.innerHTML = `${minutes} : ${seconds}`;
}
function startTimer(){
    timerInterval = setInterval(function(){
        totalSeconds--;
        updateTimer();
    },1000);
}
function pauseTimer(){
    clearInterval(timerInterval);
}
startbtn.addEventListener('click',startTimer);
pausebtn.addEventListener("click",pauseTimer);

}
pomodoroTimer();

var city = "Bhubaneswar";
var temp = document.querySelector(".header2 h2");
async function weatherAPICall(){
    let apiKey = "cc36868ef60340a8989130552252312"
    var response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    // console.log(response)
    var data = await response.json();
    // console.log(data.current.temp_c);
    temp.innerHTML = `${data.current.temp_c}<sup>&deg</sup><span>C</span>`

    
}
weatherAPICall();
var header1date = document.querySelector(".header1 h1");
var date = null;
const now = new Date();
// console.log(now.toString());       // Full local date & time
// console.log(now.toLocaleString()); // Localized date & time
// console.log(now.toLocaleTimeString()); // Localized time only
function timeDate(){
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
date = new Date();
var daysofW = daysOfWeek[date.getDay()];
var daysofD = now.toLocaleTimeString();
header1date.innerHTML= `${daysofW} , ${daysofD}`;

}

setInterval(()=>{
    timeDate();
},1000);


function changeTheme(){
var theme = document.querySelector(".theme");
var rootElement =document.documentElement;
var flag = 0;
theme.addEventListener("click",function(){
    // --primary:#F8F4E1;
    // --sec : #381c0a;
    // --tir : #FEBA17;
    // --tir2 : #74512D;
    if(flag==0){
    rootElement.style.setProperty("--primary","#F8F4E1");
    rootElement.style.setProperty("--sec","#222831");
    rootElement.style.setProperty("--tir","#948979");
    rootElement.style.setProperty("--tir2","#393E46");
    flag =1;
  
}
else {
    rootElement.style.setProperty("#F8F4E1","--primary");
    rootElement.style.setProperty("#222831","--sec");
    rootElement.style.setProperty("#948979","--tir");
    rootElement.style.setProperty("#393E46","--tir2");
    flag =0;
}

})
}
changeTheme();