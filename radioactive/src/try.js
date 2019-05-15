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
  
    var mm_array="", smm_array="";
    var i;
    for (i=0;i<parseInt(document.getElementById("mm-120").value);i++){
      if (i!==0)
        mm_array = mm_array + ",120";
      else
        mm_array = mm_array + "120";
    }
    for (i=0;i<parseInt(document.getElementById("mm-122").value);i++){
        mm_array = mm_array + ",122";
    }
    for (i=0;i<parseInt(document.getElementById("mm-710").value);i++){
        mm_array = mm_array + ",710";
    }
    for (i=0;i<parseInt(document.getElementById("mm-710m").value);i++){
        mm_array = mm_array + ",710m";
    }
    for (i=0;i<parseInt(document.getElementById("mm-714m").value);i++){
        mm_array = mm_array + ",714m";
    }

      for (i=0;i<parseInt(document.getElementById("smm-120").value);i++){
        if (i!==0)
          smm_array = smm_array + ",120";
        else
          smm_array = smm_array + "120";
      }
      for (i=0;i<parseInt(document.getElementById("smm-122").value);i++){
          smm_array = smm_array + ",122";
      }
      for (i=0;i<parseInt(document.getElementById("smm-710").value);i++){
          smm_array = smm_array + ",710";
      }
      for (i=0;i<parseInt(document.getElementById("smm-710m").value);i++){
          smm_array = smm_array + ",710m";
      }
      for (i=0;i<parseInt(document.getElementById("smm-714m").value);i++){
          smm_array = smm_array + ",714m";
      }


    var result = {
      /*"id": ''+document.getElementById("name").value+'',
      "equipment": [
          ["122","visible"] ,
          ["120","visible"]
      ],*/
      
      "mm": {
          "equipment": 
            mm_array.split(",")
          
      },
      "smm": {
          "equipment": 
              smm_array.split(",")
          
      }
  }
    console.log(JSON.stringify(result));
    e.preventDefault();
  }
 
  render() {
    return (
      <form dir="rtl">
        <p> ציוד ממ</p>
       
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