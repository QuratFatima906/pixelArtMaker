// Select color input
// Select size input
let color = 0;
let height = 0;
let width= 0;
// When size is submitted by the user, call makeGrid()
let size = document.getElementById('submit');
size.addEventListener('click' , function(event){
  event.preventDefault();
  height=  document.getElementById("inputHeight").value;
  width = document.getElementById("inputWidth").value;
  makeGrid(height,width);

})

function makeGrid(height,width) {
  const canvas = document.getElementById('pixelCanvas');
  canvas.innerHTML ="";
  for(let i=1; i<=height; i++){
    var row = document.createElement('TR');
    row.setAttribute('id', 'table' + i );
    canvas.appendChild(row);
    for (let j=1; j<=width; j++){
      var column = document.createElement('TD');
      column.setAttribute('class', 'clean');
      document.getElementById('table' + i ).appendChild(column);

    }
  }
  canvas.addEventListener('click',addColor);
} //End makeGrid()


function addColor(evt)
{

  color = document.getElementById('colorPicker').value;
  if(evt.target.classList.contains('clean')){
    evt.target.style.background = color;
    //evt.target.classList.remove('clean');
  }
  else{
    //evt.target.classList.add('clean');
    //evt.target.style.background = '#f2f2f2'; It is creating some error
  } //It worked by commenting these 3 lines. check them out

}//End addColor
