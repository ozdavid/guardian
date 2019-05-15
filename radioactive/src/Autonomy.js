import walki122 from "./IMAGES/122.png";
import walki940 from "./IMAGES/940green.png";
import walki710 from "./IMAGES/710purple.png";
import walki710m from "./IMAGES/710m.png";
import walki120 from "./IMAGES/120.png";
import walki714m from "./IMAGES/714-m-brown.png";

import React, {
    Component
  } from "react";

import './App.css';

class Autonomy extends Component {
    
    constructor(props) {
        super(props);        
        }
        
    render() {

        var counter = 0;
        var display =[<p key={counter++}>{this.props.autonomy.name}</p>];
        
        var walkis = this.props.walkieTalkis;
        this.props.autonomy.equipment.forEach(function(curEquipmentId){

        switch(curEquipmentId) {
            case "122":
                display.push(<img key={counter++} src={walki122} className="radios"/>);
                break;
            case "940":
                display.push(<img key={counter++} src={walki940} className="radios"/>);
                break;
            case "710":
                display.push(<img key={counter++} src={walki710} className="radios"/>);
                break;
            case "710מ":
                display.push(<img key={counter++} src={walki710m} className="radios"/>);
                break;
            case "120":
                display.push(<img key={counter++} src={walki710} className="radios"/>);
                break;
            case "714מ":
                display.push(<img key={counter++} src={walki710m} className="radios"/>);
                break;
            default:
            }    
        });

        return [<div key={counter++} className={this.props.className}>
            {display}
        </div>];
        
    }
}

export default Autonomy;