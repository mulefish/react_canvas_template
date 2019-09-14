let mouseIsDown = false;

const getMousePos=(evt)=>{
    const x = evt.clientX;
    const y = evt.clientY;
    const coor = "X coords: " + x + ", Y coords: " + y;
    return {x:x,y:y};
}


function sayHi() { 
    alert('sayHi')
}
function fgClick(evt) {
    console.log( "mouseIsDOwn ", getMousePos(evt) )
}
function fgMouseUp(evt) {

}
function fgMouseDown(evt) {

}
  
function fgMouseMove(evt) { 
    if ( mouseIsDown === true ) {
        // drag
    } else {
        // move
    }
} 


export {
    sayHi, 
    fgClick,
    fgMouseUp,
    fgMouseDown, 
    fgMouseMove
}