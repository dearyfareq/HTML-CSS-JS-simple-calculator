let result = "";
let screen = document.querySelector(".screen");
let btn = document.querySelectorAll(".btn");

console.log(screen)
console.table(btn)
Array.from(btn).forEach((button) =>{
    button.addEventListener("click", () =>{
        if(button.innerHTML == "="){ 
            result = eval(result);
            screen.value = result;
        }
        else if(button.innerHTML == "C"){
            result = "";
            screen.value = result;
        }
        else if(button.innerHTML == "Del"){
            result = screen.value.slice(0,-1);
            screen.value = result;
            console.log(result)
        }
        else{
            result = result + button.innerHTML;
            screen.value = result;
        }
    })
}
)