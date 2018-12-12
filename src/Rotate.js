import React from 'react';
const Rotate = (props) => {
    
        var circles = [];
        var xc = 230;
        var yc = 250;
        
            for(var i=0;i<3;i++){
                circles.push(<circle cx={xc + 20*i} cy={yc} r="3" fill="white" stroke="black" />)
            }

    return(
        
        <g transform = {"rotate("+props.angle+",250,250)"}>
               {circles}
               <path  stroke="black" d={"M "+props.x1+" 250 L 248 250"}/>
               <path  stroke="black" d={"M "+props.x2+" 250 L 268 250"}/>
        </g>
    )
}

export default Rotate;