
//import Autonomy from './Autonomy'; 
import NameForm from './try.js'; 


import Company from './Company'; 
import Platoon from './Platoon'; 
import React, {
  Component
} from "react";

var walk_talk = {
    "122": "walki122",
    "940": "walki940",
    "710": "walki710",
    "710מ": "walki710m",
    "120": "walki120",
    "714מ": "walki714m"
}
var company_js =
[
  {
      "name": "נגמש מפ",
      "equipment" : ["122","940","122", "714מ","710","710מ"]
  },
  {
      "name": "סמפ",
      "equipment" : ["710","710מ"]
  }
]
var autonomies = [
  {
      "mm": {
          "name": "ממ קשת",
          "equipment": [
              "122","122","710מ","710","714מ"
          ]
      },
      "smm": {
          "name": "סממ קשת",
          "equipment": [
              "122","710מ","710"
          ]
      }
  },
  {
      "mm": {
          "name": "ממ קשת",
          "equipment": [
              "122","122","710מ","714מ"
          ]
      },
      "smm": {
          "name": "סממ קשת",
          "equipment": [
              "122","710מ"
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
  render() {
    return <NameForm/>;
  }
}

export default NameForm;