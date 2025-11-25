const panels = document.querySelectorAll('.panel');
console.log(panels);

panels.forEach(panel=>{
    panel.addEventListener('click',function(){
        removeactiveClasses();
        panel.classList.add('active');
        
    });
});
function removeactiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}