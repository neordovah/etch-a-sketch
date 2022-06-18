let sizeValue = 16;
let toggle = 1;
const grid = document.getElementById("grid");
let gridElement = [];
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const sizeValueDisplay = document.getElementById("sizeValue");
const clearButton = document.getElementById("clear");
const eraserButton = document.getElementById("eraser");
const penButton = document.getElementById("pen");

let mouseClickToggle = 0;


function removeGridMinus (sizeValue) {
    let removeDivs = document.querySelectorAll(".divClass");
       for (let i = 0; i < (sizeValue + 16) * (sizeValue + 16); i++) {
            removeDivs[i].remove();
        }
}

function removeGridPlus (sizeValue) {
    let removeDivs = document.querySelectorAll(".divClass");
       for (let i = 0; i < (sizeValue - 16) * (sizeValue - 16); i++) {
            removeDivs[i].remove();
        }
}

function changeBackgroundElement () {
    allElements = document.getElementsByClassName("divClass");

    Array.from(allElements).forEach(element => {
        element.addEventListener("mousemove", () => {
            if (toggle == 1 && mouseClickToggle == 1) {
                element.classList.add("backgroundColor");
            }
            else if (toggle == 0 && mouseClickToggle == 1){
                element.classList.remove("backgroundColor");
            }
        })
    });
}

    grid.addEventListener("mousedown", () => {
        mouseClickToggle = 1;
    })
    grid.addEventListener("mouseup", () => {
        mouseClickToggle = 0;
    })


function resizeGrid (sizeValue, increment) {
    toggle = 1;
    if (increment == 1) {    
        removeGridPlus(sizeValue);
    }
    if (increment == -1) {    
        removeGridMinus(sizeValue);
    }

    for (let i = 0; i < sizeValue * sizeValue; i++) {
            gridElement = document.createElement("div");
            if (sizeValue == 16) {
                gridElement.classList.add("gridElement16");
                gridElement.classList.add("divClass");
            }
            else if (sizeValue == 32) {
                gridElement.classList.add("gridElement32");
                gridElement.classList.add("divClass");
            }
            else if (sizeValue == 48) {
                gridElement.classList.add("gridElement48");
                gridElement.classList.add("divClass");
            }
            else {
                gridElement.classList.add("gridElement64");
                gridElement.classList.add("divClass");
            }
            grid.appendChild(gridElement);
    }
    changeBackgroundElement();
}

minus.addEventListener('click', () => {
    let increment = 0;
    if (sizeValue > 16) {
        increment = -1;
        sizeValue = sizeValue - 16;
        resizeGrid(sizeValue, increment);
    }
    sizeValueDisplay.innerHTML = sizeValue + " x " + sizeValue;
})

plus.addEventListener('click', () => {
    let increment = 0;
    if (sizeValue < 64) {
        increment = 1;
        sizeValue = sizeValue + 16; 
        resizeGrid(sizeValue, increment);
    }
    sizeValueDisplay.innerHTML = sizeValue + " x " + sizeValue;
})

clearButton.addEventListener('click', () => {
    let increment = 0;
    removeGridMinus(sizeValue - 16);
    resizeGrid(sizeValue);
})

eraserButton.addEventListener("click", () => {
    toggle = 0;
})

penButton.addEventListener("click", () => {
    toggle = 1;
})


resizeGrid(sizeValue);




