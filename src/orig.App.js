import React from 'react';
import './style.css';
class App extends React.Component {
	constructor(props) {
    super(props);
    this.w = window.innerWidth;
    this.h = window.innerHeight * 0.6;
    this.state = {
      data:{}
    }
  }
  componentDidMount() { 
    const bgCanvas = document.getElementById("background");
    const ctx = bgCanvas.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke(); 

    const fgCanvas = document.getElementById("foreground");
    const foreground = fgCanbas.getContext("2d");
    foreground.beginPath();
    foreground.arc(95, 50, 40, 0, 2 * Math.PI);
    foreground.stroke(); 
  }
  render() { 
    return (
      <div>
      <div id="wrapper">
        <canvas id="background" width={this.w} height={this.h} ></canvas> 
        <canvas id="foreground" width={this.w} height={this.w} ></canvas> 
      </div>
      <hr></hr>
      After
      </div>
    )
  }
}
export default App;