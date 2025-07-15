 let btn= document.querySelector(".btn");
 let wordInput=document.querySelector(".input");
 let mess=document.querySelector(".meaning");

 btn.addEventListener("click",()=>{
  let word= wordInput.value.trim();
  if (word === "") {
        mess.innerText = "Please enter a word.";
        return;
    }
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => {
        let def= data[0].meanings[0].definitions[0].definition;
        mess.innerText=`Meaning ${def}`;
        
    })
.catch(error => {
            mess.innerText = "Word not found or an error occurred.";
            console.error(error);
        });
 })