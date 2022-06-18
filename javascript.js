let sizeValue = 16;
const grid = document.getElementById("grid");
let gridElement = [];
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const sizeValueDisplay = document.getElementById("sizeValue");


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

function startGrid () {
    for (let i = 0; i < sizeValue * sizeValue; i++) {
        gridElement = document.createElement("div");
        gridElement.classList.add("gridElement16");
        gridElement.classList.add("divClass");
        grid.appendChild(gridElement);
    }
}

function resizeGrid (sizeValue, increment) {
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

startGrid();




