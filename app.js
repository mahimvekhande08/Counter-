const add = document.querySelector("#add");
const substact = document.querySelector("#Substract");
const counterDisplay = document.querySelector("#count");
const resetbtn = document.querySelector("#resetbtn")

let count = 0;

add.addEventListener("click",() =>{
    count++;
    counterDisplay.textContent = count ;
});
substact.addEventListener("click",() =>{
    count-=1 ;
    counterDisplay.textContent = count ;
})
resetbtn.addEventListener("click",() =>{
    count = 0;
    counterDisplay.textContent = count
})