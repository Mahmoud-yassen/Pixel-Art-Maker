// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input
const numberOfRows = document.getElementById('inputHeight');
const numberOfColumns = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
document.querySelector('form').addEventListener("submit", function(evt) {
    evt.preventDefault();
    pixelCanvas.innerHTML = '' ;
    makeGrid();
  });

function makeGrid() {
  for (let row = 0; row < numberOfRows.value; row++){
    let newRow = pixelCanvas.insertRow(0);
    for (let col = 0; col < numberOfColumns.value; col++){
      let cell = newRow.insertCell(0);
      cell.addEventListener('click', function(event){
        cell.style.backgroundColor = colorPicker.value;
    })
  }
}
};
