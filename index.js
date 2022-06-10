let width = 50
let height = 50
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
  
  makeRows(width, height);

//container.addEventListener("mouseover", function(event) {
//    if(event.target.id === event.currentTarget) {
//        return;
//    }
//    event.target.style.backgroundColor = 'blue'
//})

function resetGrid() {
    cellEl.style.backgroundColor = 'white';
    console.log('clicked')
}

resetBtn.addEventListener("click", resetGrid)

const handleInnerTargets = function(event){
    if(event.target !== event.currentTarget){
      event.target.style.backgroundColor='blue';
    }
  }
  
document.querySelector("#container").addEventListener("mouseover", handleInnerTargets);