//Declare the variabels, one will display the results, one array for the buttons and one for the input
let result = "";
let screen = document.querySelector(".screen");
let btn = document.querySelectorAll(".btn");

//console.log(screen)
//console.table(btn)

//for each button in the array check for a click and then do the following:
Array.from(btn).forEach((button) =>{
    button.addEventListener("click", () =>{
        
        // if it is = then evaluate the result then the input's value becomes the result
        if(button.innerHTML == "="){ 
            result = eval(result);
            screen.value = result;
        }
        
        // if it is C then clear everything then set that as the input value
        else if(button.innerHTML == "C"){
            result = "";
            screen.value = result;
        }

        // if it is Del then slice or remove the last index as strings can be treated as arrays
        else if(button.innerHTML == "Del"){
            result = screen.value.slice(0,-1);
            screen.value = result;
            console.log(result)
        }

        //anything else will be added to the value inside the input screen the evaluated
        else{
            result = result + button.innerHTML;
            screen.value = result;
        }

        //without any conditions, change the color of every button on click then revert back after 100ms
        button.style.backgroundColor = "white";
        button.style.color = "#191825"
        setTimeout(() => 
        {button.style.backgroundColor = "#191825" 
         button.style.color = "white"} ,100)

    })
}
)
