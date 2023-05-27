let randomArray = [];
let arrayEle = document.getElementById("array-size");
document.querySelector("#animation-speed").disabled = true;

//Initial array generated when site is opened
generateArray();
function generateArray() {
    randomArray.length = 0;
    const bar = document.querySelector("#bars");
    let arraySize = arrayEle.value;
    bar.innerHTML = '';
    for (let i = 0; i < arraySize; i++) {
        randomArray.push(getRandomInt(5, 700));
    }
    const bars = document.querySelector("#bars");

    for (let i = 0; i < arraySize; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${40+10}px`;
        bar.style.width = `${40+10}px`;
        bar.style.padding = `${5+5}px`;
        bar.style.background = '#f98125';
        bar.classList.add('bar');
        bar.classList.add('bar-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
        bar.innerHTML = randomArray[i];
    }
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Generates Customized Array
function customizeArray() {
    randomArray.length = 0;
    const bar = document.querySelector("#bars");
    let arraySize = arrayEle.value;
    bar.innerHTML = '';
    a = getCustomInt(5, 700);
    const bars = document.querySelector("#bars");

    for (let i = 0; i < arraySize; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${40+10}px`;
        bar.style.width = `${40+10}px`;
        bar.style.padding = `${5+5}px`;
        bar.style.background = '#f98125';
        bar.innerHTML = a[i];
        bar.classList.add('bar');
        bar.classList.add('bar-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}
//Takes the customized input
function getCustomInt(min, max) {
    let arraySize = arrayEle.value;
    var ID = new Array();
    for (let i = 0; i < arraySize; i++) {
        ID[i] = prompt('Enter array Element ' + (i+1));
    }
    return ID;

}

//Swap function for sort algos
function swap(a, b) {
    let temp = a.innerHTML;
    a.innerHTML = b.innerHTML;
    b.innerHTML = temp;
}

//Updates generated array when array size is changed
arrayEle.addEventListener("input", generateArray);


const sortTypes = ["#insertion-sort", "#merge-sort", "#quick-sort", "#selection-sort", "#bubble-sort"]


function disableInputs() {

    for (i in sortTypes) {
        document.querySelector(sortTypes[i]).disabled = true;
    }
    document.querySelector("#random-button").disabled = true;
    document.querySelector("#array-size").disabled = true;
    document.querySelector("#animation-speed").disabled = false;
}

//Enables all inputs
function enableInputs() {
    for (i in sortTypes) {
        document.querySelector(sortTypes[i]).disabled = false;
    }
    document.querySelector("#random-button").disabled = false;
    document.querySelector("#array-size").disabled = false;
    document.querySelector("#animation-speed").disabled = true;
}


let waitTime = 250;
function animate(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

let animespeed = document.getElementById("animation-speed");
animespeed.addEventListener("input", () => {

    waitTime = 250 / (parseInt(animespeed.value));
})