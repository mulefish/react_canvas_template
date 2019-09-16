import React from 'react';

class ForegroundCanvas extends React.Component {
    constructor(props) {
        super(props)
        this.clicky = this.clicky.bind(this);
        this.down = this.down.bind(this);
        this.up=  this.up.bind(this); 
        this.move=  this.move.bind(this); 



    }

    clicky(evt) { 
      console.log( "clicky ", evt.clientX )
    }
    down(evt) { 
      console.log( "down ", evt.clientX )
    }
    up(evt) { 
      console.log( "up ", evt.clientX )
    }
    move(evt) { 
      console.log( "move ", evt.clientX, this.props.id )
    }

    componentDidMount() {
      const canvas = document.getElementById(this.props.id);
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(100, 75, 50, 0, 2 * Math.PI);
      ctx.stroke();

      canvas.addEventListener("mousedown", this.down, false); 
      canvas.addEventListener("mouseup", this.up, false); 
      canvas.addEventListener("mousemove", this.move, false); 

    }



    render() { 
        return ( 
        <canvas 

        onClick={this.clicky} 
//        mousedown={this.down} 
//        mouseUp={this.up} 
        className={this.props.id}  
        id={this.props.id} 
        width={this.props.w} 
        height={this.props.h} ></canvas>
        ) 
    }
}
export default ForegroundCanvas;