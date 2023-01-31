let textarea=document.querySelector("#textArea");
let textarea2=document.querySelector("#textArea2");

let btn=document.querySelector("#btn");

btn.addEventListener("click",()=>{
   valueChanged();
    emptyValue();
});


function valueChanged(para){
    textarea2.textContent=textarea.value;
}

function emptyValue(){
    textarea.value=" ";
}
