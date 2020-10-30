import React, {useState} from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
const [isClicked, setClick] = useState(false)
function clickHandler () {
  setClick(true)
}

  return (
    <div className="form">
      
        <input onChange = {props.titleInputHandler}  placeholder="Title" value = {props.titleValue} style={isClicked? null: {display:"none"}}/>
        <textarea onClick ={clickHandler} onChange = {props.textInputHandler}  placeholder="Take a note..." rows={isClicked?"3" : "1"} value = {props.textValue}/>
        <Zoom in={isClicked}>
        <Fab className="addbutton" onClick = {() => {
        props.buttonHandler(props.noteItem)}}>
      <AddIcon/>
    </Fab>
    </Zoom>
    </div>
  );
}

export default CreateArea;
