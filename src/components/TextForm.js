import React, { useState } from 'react'


export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = ()=> {
    let newText = "";
    setText(newText)
  }

  const handleOnChange = (event) => {
    //console.log("on change")
    setText(event.target.value);
  }

  return (
    <>
      <div>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters </p>
        <p>{0.008 * text.split(" ").length} Minutes To Read </p>
        <h2>Prieview</h2>
        <p>{text}</p>
      </div>
    </>

  )
}
