import React from 'react';
import './style.css';
import BackgroundCanvas from './BackgroundCanvas.js'
import ForegroundCanvas from './ForegroundCanvas.js'
import {getCities} from './cities.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.w = window.innerWidth * .99;
    this.h = window.innerHeight * .71;

    this.cities = getCities(this.w, this.h)
  }

  render() {     
    const bgId = "background";
    const fgId = "foreground";

    return (
      <div>
        Goat
      <div className="scrollingViewport">
        <div className="wrapper">
        <BackgroundCanvas cities={this.cities} w={this.w} h={this.h} id={bgId} />
        <ForegroundCanvas w={this.w} h={this.h} id={fgId} />
        </div>
        </div>
        <hr>
        </hr>
        Hello world
        </div>
    )
  }
}
export default App;