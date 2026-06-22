let submit=document.getElementById("submit-btn");
let contact=document.getElementById("contact-btn");

submit.addEventListener("click",function(){
    console.log("button clicked successfully");
});
contact.addEventListener("click", function(){
    console.log("contact button")
});
 
window.addEventListener("click",()=>{
    console.log("You clicked the window");
})
let limited=document.getElementById("limited")
function counting(){
    for(let count=0;count<5;count++){
        console.log("You clicked me")   
    }
    limited.removeEventListener("click",counting)
}
limited.addEventListener("click",counting)

// //modules and how to import and export them
// export function addition(a,b){
//     let sum =a+b;
//     return (sum);
// }
// console.log(addition(4,3));