let width = 50
let height = 40
const container = document.getElementById("container")
const cellEl = document.querySelector('.grid-item')
const resetBtn = document.getElementById("reset-btn")
const changeGridSizeBtn = document.getElementById("change-grid-size-btn")





function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      const cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
};

const handleInnerTargets = function(event) {
    if(event.target !== event.currentTarget){
        event.target.style.backgroundColor = 'blue';
    }
}

//container.addEventListener("mouseover", function(event) {
//    if(event.target.id === event.currentTarget) {
//        return;
//    }
//    event.target.style.backgroundColor = 'blue'
//})

function reloadPage() {
    location.reload()
}

function getWidth() {
    width = prompt("Set Width: ")
    return width
}

function getHeight() {
    height = prompt("Set Height: ")
    return height
}


makeRows(width, height);
  
document.querySelector("#container").addEventListener("mouseover", handleInnerTargets);

resetBtn.addEventListener("click", reloadPage)

changeGridSizeBtn.addEventListener('click', function() {
    getWidth()
    getHeight()
    makeRows(width, height)
})