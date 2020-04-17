const textarea = document.getElementById("textarea");
const sendButton = document.getElementsByClassName("send")[0];
const counter = document.getElementsByTagName("p")[0];

const toggleColor = () => {
    if(textarea.value.length >= 240) {
        textarea.classList.add("red-letter");
        counter.classList.add("red-letter");
        sendButton.disabled = true;
    }
    else if (textarea.value.length <= 241 ) {
        textarea.classList.remove("red-letter");
        counter.classList.remove("red-letter");
        sendButton.disabled = false;
    }
}
// (e) => p.innerHTML = 240 - textarea.innerHTML.value
const characterCounter = () => {   
        counter.innerHTML = 240 - Number(textarea.value.length);   

              
    }    


const sendInfo = () => {
    textarea.value = "";
    counter.innerHTML = 240;
    alert("Su texto ha sido enviado");
}

textarea.addEventListener('keydown', toggleColor);
textarea.addEventListener('keydown', characterCounter);
textarea.addEventListener('keyup', characterCounter);
sendButton.addEventListener('click', sendInfo);
