const para = document.querySelector("p");
// console.log(para)
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;
// para.addEventListener("mouseenter",()=>{

//     setInterval(()=>{
//           const str = text.split("").map((char,index)=>{
//           return characters.split("")[Math.floor(Math.random()*53)]
//           }).join("");
//           para.innerText = str;
//           },50)
// })
let iteration = 0;
function randomText(){
    const str = text.split("").map((char,index) =>{
        if(index < iteration){
            return char;
        }
        return characters.split("")[Math.floor(Math.random() * 52)]
    }).join("");
    para.innerText = str;
    iteration += 0.5;
}
para.addEventListener("mouseenter",()=>{
    setInterval(randomText,40);
})