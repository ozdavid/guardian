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

        var companyAutonomies = [];
        var counter = 0;
        var walkis = this.props.walkieTalkis;
        this.props.companies.forEach(function(curCompany){
            companyAutonomies.push(<Autonomy walkieTalkis={walkis} className="Company" key={counter++} autonomy={curCompany}></Autonomy>);
        })

        return <div className="Companies">{companyAutonomies}</div>;
    }
}

export default Company;