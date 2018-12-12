import React from 'react';
import Storm from './Storm.js'

class Branch extends React.Component{
    
    render(){
    var stormy = [];
    
        for(var i=0;i<100;i++){
            stormy.push(<Storm x={Math.random() * 500} y ={Math.random() * 500}  />)
        }



        return(
            <svg>
               {stormy}
            </svg>
        );
    }

}
export default Branch;