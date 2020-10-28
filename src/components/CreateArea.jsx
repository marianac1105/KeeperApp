import React from "react";


function CreateArea(props) {
  return (
    <div className="form">
      
        <input onChange = {props.titleInputHandler}  placeholder="Title" value = {props.titleValue} />
        <textarea onChange = {props.textInputHandler}  placeholder="Take a note..." rows="3" value = {props.textValue}/>
        <button onClick = {() => {
        props.buttonHandler(props.noteItem)}}>
      <span>Add</span>
    </button>
      
    </div>
  );
}

export default CreateArea;
