import React from 'react';
import './style.css';
import {sayHi} from './logic.js'
class App extends React.Component {
	constructor(props) {
    super(props);
    this.fetchDataButton = this.fetchDataButton.bind(this);
 
    this.w = window.innerWidth;
    this.h = window.innerHeight * 0.6;
    this.state = {
      data:{}
    }
  }
  componentDidMount() { 
    /*
    const bgCanvas = document.getElementById("background");
    const ctx = bgCanvas.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke(); 

    const fgCanvas = document.getElementById("foreground");
    const foreground = fgCanvas.getContext("2d");
    foreground.beginPath();
    foreground.arc(95, 50, 40, 0, 2 * Math.PI);
    foreground.stroke(); 
*/ 
// m1 Derek apex -  
// m2 Laura Merkle - 
//

this.bgCanvas = document.getElementById("background");
this.bg = this.bgCanvas.getContext("2d");
this.bg.moveTo(0, 0);
this.bg.lineTo(200, 100);
this.bg.stroke(); 

this.fgCanvas = document.getElementById("foreground");
this.fg = this.fgCanvas.getContext("2d");
this.fg.beginPath();
this.fg.arc(95, 50, 40, 0, 2 * Math.PI);
this.fg.stroke(); 


  }
  fetchDataButton() {
    console.log("hello ")
    sayHi()
  }
  render() { 
    return (
      <div>
              <button onClick={this.fetchDataButton} >zoom</button>

<hr></hr>
      <div id="wrapper">
        <canvas id="background" width={this.w} height={this.h} ></canvas> 
        <canvas id="foreground" width={this.w} height={this.w} ></canvas> 
      </div>
      <hr></hr>


      </div>
    )
  }
}
export default App;