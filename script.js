const first = document.getElementById("first-field");
const second = document.getElementById("second-field");
const resultEL = document.getElementById("output");

const sumBtn = document.getElementById("sum-Btn");
sumBtn.addEventListener("click", function() {
    let num1 = parseInt(first.value, 10);
    let num2 = parseInt(second.value, 10);
    let sum = num1 + num2;
    resultEL.innerText = "Ans: " + sum;
    first.value = ""
    second.value = ""
})

const subBtn = document.getElementById("sub-Btn");
subBtn.addEventListener("click", function() {
    let num1 = parseInt(first.value, 10);
    let num2 = parseInt(second.value, 10);
    let sub = num1 - num2;
    resultEL.innerText = "Ans: " + sub;
    first.value = ""
    second.value = ""
})

const mulBtn = document.getElementById("mul-Btn");
mulBtn.addEventListener("click", function() {
    let num1 = parseInt(first.value, 10);
    let num2 = parseInt(second.value, 10);
    let mul = num1 * num2;
    resultEL.innerText = "Ans: " + mul;
    first.value = ""
    second.value = ""
})

const divBtn = document.getElementById("div-Btn");
divBtn.addEventListener("click", function() {
    let num1 = parseInt(first.value, 10);
    let num2 = parseInt(second.value, 10);
    let div = num1 / num2;
    resultEL.innerText = "Ans: " + div;
    first.value = ""
    second.value = ""
})
