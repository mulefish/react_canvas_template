import React from 'react';

class BackgroundCanvas extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const c = document.getElementById(this.props.id);
        const ctx = c.getContext("2d");
        ctx.moveTo(0, 0);
        ctx.lineTo(this.props.w, this.props.h);
        ctx.stroke();

        this.props.cities.forEach((city)=>{

            ctx.beginPath();
            ctx.arc(city.x, city.y, city.v, 0, 2 * Math.PI);
            ctx.stroke();
    

        })


    }

    render() { 

        return ( 
<canvas className={this.props.id}  id={this.props.id} width={this.props.w} height={this.props.h} >
</canvas>
        ) 
    }
}
export default BackgroundCanvas;