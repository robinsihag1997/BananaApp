let inputValue=document.querySelector("#textArea");
let outputValue=document.querySelector("#textArea2");

let btn=document.querySelector("#btn");

// let url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
let url="https://api.funtranslations.com/translate/minion.json"



btn.addEventListener("click",()=>{
   valueChanged(inputValue.value);
    emptyValue();
});


function valueChanged(para){
    let completeUrl=url+"?"+"text="+para;
    fetch(completeUrl)
    .then(response=>response.json())
    // .then(data=>console.log(data.contents.text))
    .then(data=>outputValue.textContent=data.contents.translated)
    .catch(error=>alert(`error occurred please try again : ${error}`));



    // outputValue.textContent=inputValue.value;
}

function emptyValue(){
    inputValue.value=" ";
}

