import React from 'react';
import Rotate from './Rotate.js'

const Storm = (props) => {


        return(
            <g transform={"translate("+props.x+","+props.y+") scale(.5) translate(-250,-250)"}>
               <Rotate x2 ="252" x1="232" angle="60"/>
               <Rotate x2 ="252" x1="232" angle="120"/>
               <Rotate x2 ="252" x1="232" angle="0"/>
            </g>
        );
  

}
export default Storm;