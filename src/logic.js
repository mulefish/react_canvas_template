let mouseIsDown = false;

function sayHi() { 
    alert('sayHi')
}
function fgClick(evt) {
    console.log( "mouseIsDOwn ", mouseIsDown , evt )
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