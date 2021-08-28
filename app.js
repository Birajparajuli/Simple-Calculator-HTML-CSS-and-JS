let display = document.getElementById("cal-display");
let buttons = document.querySelectorAll('#btn');

buttons.forEach((btn) => { btn.addEventListener("click", (event) => {
     console.log(event.srcElement.innerHTML);
     let text = event.srcElement.innerHTML;

     if(text === "AC"){
         display.innerHTML="0";
     }else if(text==="DEL"){
        display.innerHTML =display.innerHTML.slice(0,-1); 
     }else if(text === "="){
         display.innerHTML = eval(display.innerHTML);
     }else if(display.innerHTML !== "0"||text==="."){
         display.innerHTML += text;
     }else{
         display.innerHTML= text;
     }
    });
 });