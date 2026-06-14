let toggleButton=document.getElementById("modeToggle");
let body=document.body
toggleButton.addEventListener("click",function(){
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")){
        toggleButton.textContent="Switch to Light Mode";
    }else{
        toggleButton.textContent="Switch to Dark Mode";
    }
});