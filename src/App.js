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

    this.fgCanvas.onmousedown = this.mymousedown
    this.fgCanvas.onmousemove = this.mymousemove
    this.fgCanvas.onmouseup = this.mymouseup
  

  }

  mymousedown() { 
    console.log( " down ")
  }

  mymousemove() { 
    console.log( " mymousemove ")
  }
  mymouseup() { 
    console.log( " mymouseup ")
  }

  fetchDataButton() {
    console.log("hello2sdf ")
    sayHi()
  }
  render() { 
    return (
      <div>
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