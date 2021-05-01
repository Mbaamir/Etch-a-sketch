const containerBox=document.querySelector('.container');

let grid=[];

createGrid(20);

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

        containerBox.appendChild(grid[i]);
    }
    }

function adjustPixelBoxes(pixelBoxSize){

    const allPixelBoxes= document.querySelectorAll('.pixelBox');
    allPixelBoxes.forEach((box)=> {
        console.log(box);
        box.setAttribute('style', `width: ${pixelBoxSize}px;height:${pixelBoxSize}px`);
    });
    }


// document.createElement('')