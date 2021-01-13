let operator;
const selectBtn = document.querySelector(".select-btn")
const kbd = document.querySelectorAll("kbd");

kbd.forEach(element => element.addEventListener("click", findOperator))

document.querySelector(".calculate").addEventListener("click", calculate);

selectBtn.addEventListener("click", function() {
    document.querySelector(".options").classList.toggle("hidden");
})

function findOperator(e) {
    if(e.target.innerText === "+") {
        operator = "+";
    } else if(e.target.innerText === "-"){
        operator = "-";
    } else if(e.target.innerText === "×"){
        operator = "*";
    } else if(e.target.innerText === "÷"){
        operator = "/";
    }
    updateSelectBtn(e)
}

function updateSelectBtn(e) {
    selectBtn.innerText = `${e.target.innerText}`;
    selectBtn.style.fontSize = "2rem";
}

function calculate(e) {
    const x = document.querySelector("#first").value;
    const y = document.querySelector("#second").value;
    const total = eval(x + operator + y);
    document.querySelector(".answer").innerText = total;
    setTimeout(reset, 1000);
}

function reset() {
    document.querySelector("#first").value = "NULL";
    document.querySelector("#second").value = "NULL";

    document.querySelector(".options").classList.toggle("hidden");
    selectBtn.innerText = "Select operator";
    selectBtn.style.fontSize = "1rem";
}
