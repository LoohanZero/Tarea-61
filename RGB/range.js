const range = document.getElementsByClassName("range-value")
const p = document.getElementsByClassName("actual-value")
const finalColor = document.getElementById("final-color")
let bodyBody = document.body; 



const addValue = (index)=>{
    p[index].innerHTML = range[index].value
}

const createFinalValue = () => {
    finalColor.innerHTML = `rgb(${p[0].innerHTML}, ${p[1].innerHTML}, ${p[2].innerHTML})`
    changeBodyColor()
}

const changeBodyColor = () => {
    bodyBody.style.backgroundColor = finalColor.innerHTML;

}

range[0].addEventListener("change", function(){addValue(0)})
range[1].addEventListener("change", function(){addValue(1)})
range[2].addEventListener("change", function(){addValue(2)})


range[0].addEventListener("change", createFinalValue)
range[1].addEventListener("change", createFinalValue)
range[2].addEventListener("change", createFinalValue)
