// input screen
const input = document.querySelector(".screen input");

// selecting all buttons
const buttons = document.querySelectorAll("button");

// if else loop for button click
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value=button.innerText;
        if (value === "C") {
            input.value = input.value.slice(0, -1);
        } else if (value === "AC") {
            input.value = "";
        } else if (value === "=") {
            calculate();
        } else if (value === "^") {
            input.value += "**";
        } else {
            input.value += value;
        }
    });
});

// function: calculation logic
function calculate() {
    try {
        input.value = eval(input.value);
    } catch {
        input.value = "Error";
    }
}

// keyboard listner
document.addEventListener("keydown", (event) => {
    // enter key
    if (event.key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // backspace key
    else if (event.key === "Backspace") {
        input.value = input.value.slice(0, -1);
    }

    //other numbers and operators
    else if ("0123456789+-*/%(){}[]".includes(event.key)) {
        input.value += event.key;
    }
});