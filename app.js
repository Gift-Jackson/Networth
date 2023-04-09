const input = document.querySelector("#name");
const showBtn = document.querySelector(".showbtn");
const clearBtn = document.querySelector(".clearbtn");
const buddyName = document.querySelector(".buddyName");
const text = document.querySelector(".text");
const net = document.querySelector(".net");
const naira = document.querySelector(".naira");
const errorMsg = document.querySelector(".errorMsg");
const person = document.querySelector(".person");
let count = 0;

showBtn.addEventListener("click", ()=>{
   if(input.value === ""){
    // alert("Enter Buddy's Name!");
    input.classList.add("error");
    errorMsg.style.opacity = "1";
    setTimeout(function(){
        input.classList.remove("error");
        errorMsg.style.opacity = "0";
    }, 2500);
   }
   else{
    // alert("ready");
    buddyName.textContent = input.value;
    text.style.display = "inline";
    naira.style.display = "inline";
    person.style.display = "inline";
    count = Math.floor(Math.random() * 2000);
    net.textContent = count;
    clearBtn.style.opacity = "1";
   }
   input.value = "";
});

clearBtn.addEventListener("click", ()=>{
    buddyName.textContent = "";
    text.style.display = "none",
    naira.style.display = "none",
    person.style.display = "none",
    net.textContent = "";
    clearBtn.style.opacity = "0";
})

