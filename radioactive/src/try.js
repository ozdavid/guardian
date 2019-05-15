import React, {
  Component
} from "react";
class NameForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    alert('The value is: ' + this.input.value);
    this.input.value = parseInt(this.input.value)+1;
    e.preventDefault();
  }
  handleGenerateArray(e){
    //alert(document.getElementById("smm-714m").value);
    var temp = document.getElementById("name").value;
    var mm_array, smm_array;
    var result = {
      "id": ''+document.getElementById("name").value+'',
      "equipment": [
          ["122","visible"] ,
          ["120","visible"]
      ],
      "mm": {
          "name": '' + document.getElementById("mm-name").value + '' ,
          "equipment": [
            mm_array
          ]
      },
      "smm": {
          "name": '' + document.getElementById("smm-name").value + '',
          "equipment": [
              smm_array
          ]
      }
  }
    alert(result);
    e.preventDefault();
  }
 
  render() {
    return (
      <form dir="rtl">
       <p> הוספת מחלקה חדשה</p>
        <label>
          שם מחלקה:
          <input id = "name" type="text" ref={(input) => this.input = input} />
        </label>
        <br />
        <p> ציוד מחלקתי</p>
        <label>
          120:
          <input id = "platoon-120" type="text" ref={(input) => this.input = input} />
        </label>
        <input type="button" value="+" onClick={this.handlePlus}/>
        <input type="button" value="-" onClick={this.handleMinus}/>
        <br />

        <label>
          122:
          <input id = "platoon-122" type="text" ref={(input) => this.input = input} />
        </label>
        <input type="button" value="+" onClick={this.handlePlus}/>
        <input type="button" value="-" onClick={this.handleMinus}/>
        <br />

        <label>
          710:
          <input id = "platoon-710" type="text" ref={(input) => this.input = input} />
        </label>
        <input type="button" value="+" onClick={this.handlePlus}/>
        <input type="button" value="-" onClick={this.handleMinus}/>

        <br />

        <label>
          710מ:
          <input id = "platoon-710m"type="text" ref={(input) => this.input = input} />
        </label>
        <input type="button" value="+" onClick={this.handlePlus}/>
        <input type="button" value="-" onClick={this.handleMinus}/>
        <br />
        <label>
          714מ:
          <input id = "platoon-714m"type="text" ref={(input) => this.input = input} />
        </label>
        <input type="button" value="+" onClick={this.handlePlus}/>
        <input type="button" value="-" onClick={this.handleMinus}/>


        <p> ציוד ממ</p>
        <input id = "name" type="text" ref={(input) => this.input = input} />
        <label>
          120:
          <input id = "mm-120" type="text" ref={(input) => this.input = input} />
        </label>
        <input type="button" value="+" onClick={this.handlePlus}/>
        <input type="button" value="-" onClick={this.handleMinus}/>
        <br />

        <label>
          122:
          <input id = "mm-122" type="text" ref={(input) => this.input = input} />
        </label>
        <input type="button" value="+" onClick={this.handlePlus}/>
        <input type="button" value="-" onClick={this.handleMinus}/>
        <br />

        <label>
          710:
          <input id = "mm-710" type="text" ref={(input) => this.input = input} />
        </label>
        <input type="button" value="+" onClick={this.handlePlus}/>
        <input type="button" value="-" onClick={this.handleMinus}/>

        <br />

        <label>
          710מ:
          <input id = "mm-710m"type="text" ref={(input) => this.input = input} />
        </label>
        <input type="button" value="+" onClick={this.handlePlus}/>
        <input type="button" value="-" onClick={this.handleMinus}/>
        <br />
        <label>
          714מ:
          <input id = "mm-714m" type="text" ref={(input) => this.input = input} />
        </label>
        <input type="button" value="+" onClick={this.handlePlus}/>
        <input type="button" value="-" onClick={this.handleMinus}/>


        <p> ציוד סממ</p>
        <label>
          120:
          <input id = "smm-120" type="text" ref={(input) => this.input = input} />
        </label>
        <input type="button" value="+" onClick={this.handlePlus}/>
        <input type="button" value="-" onClick={this.handleMinus}/>
        <br />

        <label>
          122:
          <input id = "smm-122" type="text" ref={(input) => this.input = input} />
        </label>
        <input type="button" value="+" onClick={this.handlePlus}/>
        <input type="button" value="-" onClick={this.handleMinus}/>
        <br />

        <label>
          710:
          <input id = "smm-710" type="text" ref={(input) => this.input = input} />
        </label>
        <input type="button" value="+" onClick={this.handlePlus}/>
        <input type="button" value="-" onClick={this.handleMinus}/>

        <br />

        <label>
          710מ:
          <input id = "smm-710m" type="text" ref={(input) => this.input = input} />
        </label>
        <input type="button" value="+" onClick={this.handlePlus}/>
        <input type="button" value="-" onClick={this.handleMinus}/>
        <br />
        <label>
          714מ:
          <input id = "smm-714m" type="text" ref={(input) => this.input = input} />
        </label>
        <input type="button" value="+" onClick={this.handlePlus}/>
        <input type="button" value="-" onClick={this.handleMinus}/>
        <br />
        <label>
          הוסף מחלקה:
        </label>
        <input type="button" value="הוסף מחלקה:" onClick={this.handleGenerateArray}/>        
      </form>
    );
  }
}
export default NameForm;