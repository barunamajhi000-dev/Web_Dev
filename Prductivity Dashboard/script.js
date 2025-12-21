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
