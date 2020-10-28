import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteItem, setNote] = useState({ title: "", noteText: "" });
  const [list, setList] = useState([]);

  function addListNote(noteItem) {
    setList((prevValue) => {
      return [...prevValue, noteItem];
    });
    setNote({ title: "", noteText: "" });
    
  }

  function titleInputHandler(e) {
    const newValue = e.target.value;
    setNote((prevValue) => {
      return {
        title: newValue,
        noteText: prevValue.noteText,
      };
    });
    
    
  }

  function textInputHandler(e) {
    const newValue = e.target.value;
    setNote((prevValue) => {
      return {
        title: prevValue.title,
        noteText: newValue,
      };
    });
  }

  function deleteNote (id) {
   setList(prevValue => {
     return prevValue.filter((text, index) => {
       return index !== id
     })
   })
  
  }

  return (
    <div>
      <Header />
      <CreateArea
        titleValue={noteItem.title}
        textValue={noteItem.noteText}
        titleInputHandler={titleInputHandler}
        textInputHandler={textInputHandler}
        buttonHandler={addListNote}
        noteItem={noteItem}
        
      />
      {list.map((inputNote, index) => {
        return <Note
          key = {index}
          id = {index}
          title = {inputNote.title}
          content = {inputNote.noteText}
          deleteHandler = {deleteNote}
        />
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
