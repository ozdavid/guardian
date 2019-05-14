import Autonomy from './Autonomy'; 
import React, {
    Component
  } from "react";

import './App.css';

class Company extends Component {
    
    constructor(props) {
        super(props);        
        }
        
    render() {

        var companyAutonomies = [];
        
        console.log(this.props.companies);

        return companyAutonomies;
    }
}

export default Company;