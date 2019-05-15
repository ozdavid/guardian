
//import Autonomy from './Autonomy'; 
import NameForm from './try.js'; 

import Company from './Company'; 
import Platoon from './Platoon'; 
import trapez from "./IMAGES/trapezoied.png";
import React, {
  Component
} from "react";

var walk_talk = {
    "122": "walki122",
    "940": "walki940",
    "710": "walki710",
    "710m": "walki710m",
    "120": "walki120",
    "714m": "walki714m"
}
var company_js =
[
  {
      "name": "נגמש מפ",
      "equipment" : ["122","940","122", "714m","710","710m"]
  },
  {
      "name": "סמפ",
      "equipment" : ["710","710m"]
  }
]
var autonomies = [
  {
      "mm": {
          "name": "ממ קשת",
          "equipment": [
              "122","122","710m","710"
          ]
      },
      "smm": {
          "name": "סממ קשת",
          "equipment": [
              "122","710m","710"
          ]
      }
  },
  {
      "mm": {
          "name": "ממ קשת",
          "equipment": [
              "122","122","710m","714m"
          ]
      },
      "smm": {
          "name": "סממ קשת",
          "equipment": [
              "122","710m"
          ]
      }
  },
  {
      "mm": {
          "name": "ממ קשת",
          "equipment": [
              "122","122","940","710"
          ]
      },
      "smm": {
          "name": "סממ קשת",
          "equipment": [
              "122","122","940","710"
          ]
      }
  }
]

class App extends Component {
  changeInForm() {
    var newCond = !this.state.bIsInForm;
    this.setState({bIsInForm: newCond});
  }  

  addPlatoon(platoon) {
    this.setState({triggerRender: !this.state.triggerRender});
    autonomies.push(platoon);
  }  
  constructor(props) {
      super(props);   
      this.state = {
        bIsInForm: false,
        triggerRender: false
      }     
      this.changeInForm = this.changeInForm.bind(this);
      this.addPlatoon = this.addPlatoon.bind(this);
    }

    
  render() {

    var display;
    if(!this.state.bIsInForm){
      display =[<img src={trapez} className="trapez"/>,
      <Platoon walkieTalkie={walk_talk} platoons={autonomies}/>,<Company walkieTalkis={walk_talk} companies={company_js}/>,
    <button onClick={this.changeInForm}>עבור להוספת מחלקה</button>];
    }
    else{
    display = [<NameForm addPlatoon={this.addPlatoon}/>, <button onClick={this.changeInForm}>עבור לתצוגת על</button>];
    }
  
  return display;
  }
}

export default App;