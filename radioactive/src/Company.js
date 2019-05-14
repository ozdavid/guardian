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
        
        // this.props.companies.forEach((curCompany){
        //     companyAutonomies.push(<Autonomy ></Autonomy>)
        // })

        return companyAutonomies;
    }
}

export default Company;