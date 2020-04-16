const range = document.getElementsByClassName("range-value")

const p = document.getElementsByClassName("actual-value")

const addValue = (index)=>{
    p[index].innerHTML = range[index].value
}

range[0].addEventListener("change", function(){addValue(0)})
range[1].addEventListener("change", function(){addValue(1)})
range[2].addEventListener("change", function(){addValue(2)})