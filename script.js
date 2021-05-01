const containerBox=document.querySelector('.container');

let grid=[];

createGrid(8);

function createGrid(sideLength){

    const screenSize=590;
    pixelBoxSize=String(screenSize/sideLength);
    
    setNumberOfColumns(sideLength, pixelBoxSize);
    
    addPixelBoxesToContainer(sideLength);

    adjustPixelBoxes(pixelBoxSize);
}




function setNumberOfColumns(sideLength, pixelBoxSize){
    let gridColumnString=""
    for(i=0;i<sideLength;i++){
        gridColumnString+=` ${pixelBoxSize}px`;
    }
    containerBox.setAttribute('style',`grid-template-columns: ${gridColumnString}`);    
}

function addPixelBoxesToContainer(sideLength){
    for(i=0;i<(sideLength*sideLength);i++){
    
        grid[i]=document.createElement('div');
        
        grid[i].classList.add('pixelBox');
        grid[i].addEventListener('mouseover',function (event) {
            colorPixelBox(event)
        });
        containerBox.appendChild(grid[i]);
        };   
    }

function adjustPixelBoxes(pixelBoxSize){

    const allPixelBoxes= document.querySelectorAll('.pixelBox');
    allPixelBoxes.forEach((box)=> {
        box.setAttribute('style', `width: ${pixelBoxSize}px;height:${pixelBoxSize}px`);
    });
    }

function colorPixelBox(event) {
        color=getRandomColor();
        event.target.style.backgroundColor=getRandomColor();
    }


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          }


function resetFunc(){
    alert("Reset!");

    let sideLength=prompt("What grid size would you like. Enter 1 dimension, e.g: 8; (for 8x8)");
    if(sideLength>80) {
        alert("Dimension cannot be larger than 80. Computer can't deal with big values. Enter again");
        return
    }

    containerBox.innerHTML="";
    
    createGrid(sideLength);
}
// document.createElement('')