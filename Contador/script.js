const byOne = document.getElementsByClassName("by-one")[0];
const byTen = document.getElementsByClassName("by-ten")[0];
const byHundred = document.getElementsByClassName("by-hundred")[0];
const h1 = document.getElementsByTagName("h1")[0];
const plus = document.getElementsByClassName("plus-button")[0];
const minus = document.getElementsByClassName("minus-button")[0];
let number = 0;

const counterPlus = () => {
    return h1.innerHTML = Number( h1.innerHTML) + number;
}

const counterMinus = () => {

    let result = Number(h1.innerHTML) - number;
    
    if (result < 0) {
       return h1.innerHTML = 0;
    }

    return h1.innerHTML = result;
    
}
byOne.addEventListener('click', () => number = 1);
byTen.addEventListener('click', () => number = 10);
byHundred.addEventListener('click', () => number = 100);
plus.addEventListener('click', counterPlus);
minus.addEventListener('click', counterMinus);

