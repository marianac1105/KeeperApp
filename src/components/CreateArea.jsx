import React from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


function CreateArea(props) {
  return (
    <div className="form">
      
        <input onChange = {props.titleInputHandler}  placeholder="Title" value = {props.titleValue} />
        <textarea onChange = {props.textInputHandler}  placeholder="Take a note..." rows="3" value = {props.textValue}/>
        <Fab className="addbutton" onClick = {() => {
        props.buttonHandler(props.noteItem)}}>
      <AddIcon/>
    </Fab>
      
    </div>
  );
}

export default CreateArea;
