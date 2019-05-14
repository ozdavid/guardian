
import Company from './Company'; 
import React, {
  Component
} from "react";

var walk_talk = {
  "122": "/images/hi",
  "940": "/images/hi",
  "710": "/images/hi",
  "710מ": "/images/hi",
  "120": "/images/hi",
  "714מ": "/images/hi"
}
var company_js =
{
  "captain" : {
      "name": "נגמש מפ",
      "equipment" : ["122","940","122", "714מ","710","710מ"]
  },
  "vice_captain" : {
      "name": "סמפ",
      "equipment" : ["710","710מ"]
  }
}
var autonomies = [
  {
      "id": "platoon-hammer",
      "equipment": [
          ["122","visible"] ,
          ["120","visible"]
      ],
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
      "id": "platoon-nagmash",
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
      "id": "platoon-keshset",
      "equipment": [
          "122","122","120"
      ],
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
    return <Company companies={company_js}/>;
  }
}

export default App;