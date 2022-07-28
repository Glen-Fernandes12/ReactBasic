import React, { useState } from 'react'; //imported useState hook form react

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase Was Clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
      console.log("Uppercase Was Clicked");
      let newText=text.toLowerCase();
      setText(newText);
    }
    const handleOnChange= (event)=>{
        console.log("on change");
        setText(event.target.value);
        //
    }
    const [text, setText]= useState('Enter text here');

//text has enter value
//whenevr we update we use setTExt function

//whenevr we wantto update the default assignamnet of text we dont use text again but we use 
//setText function

// setText("New Text");//updation function
  return (
    <>
    <div className="Container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
  </div> 
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary" onClick={handleLoClick}>Convert to LowerCasecase</button>
    </div>
    <div className="container  my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>contains{text.split(" ").length} words  and {text.length} characters</p>
      <p>{0.008*text.split(" ").length}minutes read</p>
      <p>preview </p>
      <p>{text.length>0?text:"enter something on text-box to preview"}</p>
    </div>
    </>
  );
}
