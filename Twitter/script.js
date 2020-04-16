const textarea = document.getElementById("textarea");
const sendButton = document.getElementsByClassName("send")[0];
const counter = document.getElementsByTagName("p")[0];

const toggleColor = () => {
    if(counter.innerHTML < 0) {
        textarea.classList.add("red-letter");
        counter.classList.add("red-letter");
        sendButton.disabled = true;
    }
    else if (counter.innerHTML >= -1 ) {
        textarea.classList.remove("red-letter");
        counter.classList.remove("red-letter");
        sendButton.disabled = false;
    }
}
// (e) => p.innerHTML = 240 - textarea.innerHTML.value
const characterCounter = (event) => {
    if(event.keyCode !== 8) {
        counter.innerHTML = Number(counter.innerHTML) - 1;
    }
    else {

        if (counter.innerHTML > 240) {
            counter.innerHTML = 240;
        } else {
            counter.innerHTML = Number(counter.innerHTML) + 1;
        }
        
    }    
}

const sendInfo = () => {
    textarea.value = "";
    counter.innerHTML = 240;
    alert("Su texto ha sido enviado");
}

textarea.addEventListener('keydown', characterCounter);
textarea.addEventListener('keydown', toggleColor);
sendButton.addEventListener('click', sendInfo);