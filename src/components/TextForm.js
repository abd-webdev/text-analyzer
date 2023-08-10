import React, { useState } from "react";

export default function TextForm(props) {
   const [text, setText] = useState("");

   //    UpperCase function
   const UpperOnClick = () => {
      console.log("Button Clicked");
      const newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase", "success");
   };
   //    LowerCase Function
   const LowerOnClick = () => {
      console.log("Button Clicked");
      const newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase", "success");
   };


   const HandleClearClick = () => {
      console.log("Button Clicked");
      const newText = '';
      setText(newText);
      props.showAlert("Text is cleared", "success");
   };


   const HandleCopyClick = ()=>{
      const newText = document.getElementById("MyId");
        newText.select();
      navigator.clipboard.writeText(newText.value);
      props.showAlert("Copied to clipboard","success");
      document.getSelection().removeAllRanges();
   }


   const HandleRemoveSpaces = ()=>{
      const newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extra spaces","success");
   }

   //    Onchange Handler
   const HandleOnChange = (event) => {
      console.log("On change");
      setText(event.target.value);
   };
      // function to count Characters
    const charCount=(fullText)=>{
      const newText = fullText.split(/[ ]+/);
          const countChar = newText.join(" ");
          return countChar.length;
       }


   return (
      <>
         <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h1 className="text-center mt-3">{props.heading}</h1>
            <textarea
               className="form-control my-3"
               id="MyId"
               rows="6"
               value={text}
               onChange={HandleOnChange}
               placeholder="Enter text here"
               style={{backgroundColor: props.mode === 'dark'?'#1f2344':'white', color: props.mode ==='dark'?'white':'black'}}
            ></textarea>
            <button
               className="btn btn-primary rounded-0"
               onClick={UpperOnClick}
               disabled={text.length===0}
            >
               Convert to Uppercase
            </button>
            <button
               className="btn btn-secondary ms-2 rounded-0"
               onClick={LowerOnClick}
               disabled={text.length===0}
            >
               Convert to Lowercase
            </button>
            <button
               className="btn btn-secondary ms-2 rounded-0"
               onClick={HandleRemoveSpaces}
               disabled={text.length===0}
            >
               Remove Extra spaces
            </button>
            <button
               className="btn btn-warning ms-2 rounded-0"
               onClick={HandleCopyClick}
               disabled={text.length===0}
            >
               Copy Text
            </button>
            <button
               className="btn btn-danger ms-2 rounded-0"
               onClick={HandleClearClick}
               disabled={text.length===0}
            >
               Clear Text
            </button>
         </div>

         <div className="container mb-5" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h2 className="my-3">Text summary</h2>
            <p >
               <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{charCount(text)}</b>{" "}
               characters{" "}
            </p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length> 0 ? text: "Enter some text to preview"}</p>
         </div>
      </>
   );
}