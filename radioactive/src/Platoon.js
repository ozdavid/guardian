import Autonomy from './Autonomy'; 
import React, {
    Component
  } from "react";

import './App.css';

class Platoon extends Component {
    
    constructor(props) {
        super(props);        
        }
        
    render() {

        var platoonAutonomies = [];
        var counter = 0;
        var walkis = this.props.walkieTalkis;
        this.props.platoons.forEach(function(curPlatoon){

            for(var index in curPlatoon){
                platoonAutonomies.push(<Autonomy walkieTalkis={walkis} className="Platoon" key={counter++} autonomy={curPlatoon[index]}></Autonomy>);
            }
        })

        return <div className="Platoons">{platoonAutonomies}</div>;
    }
}

export default Platoon;