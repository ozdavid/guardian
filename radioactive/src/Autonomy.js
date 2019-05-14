import {company_js, autonomies} from './data.js'
import React, {
    Component
  } from "react";

import './App.css';

class Autonomy extends Component {
    
    constructor(props) {
        super(props);        
        }
        
    render() {
        return <p className="Autonomy">
            {"Woohoo  autonomy"}
                </p>;
    }
}

export default Autonomy;