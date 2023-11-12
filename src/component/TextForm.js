import React, { useState } from "react";

export default function TextForm(props) {
  const uppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case", "success");
  };
  const lowercase = () => {
    let newTexT = text.toLowerCase();
    setText(newTexT);
    props.showAlert("converted to lower case", "success");
  };
  const cleared = () => {
    setText("");
    props.showAlert("cleared", "success");
  };
  const handlecopy = () =>{
let text = document.getElementById("mybox");
text.select();
navigator.clipboard.writeText(text.value);
document.getSelection().removeAllRanges();
props.showAlert("copied to clipboard","success")
  };
  const handlechange = (event) => {
    // console.log("button clicked")
    setText(event.target.value);
  };

  const [text, setText] = useState("enter the text");
  return (
    <>
      <div>
        <div
          className="mb-3 container"
          style={{ color: props.mode === "light" ? "white" : "#434242" }}
        >
          <h1>{props.heading}</h1>
          <textarea
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "#434242" : "white",
              color: props.mode === "light" ? "white" : "black",
            }}
            value={text}
            onChange={handlechange}
            className="form-control"
          ></textarea>
          <button disabled = {text.length === 0} className="btn btn-primary mx-2  my-3" onClick={uppercase}>
            Convert to Upper-case
          </button>
          <button disabled = {text.length === 0} className="btn btn-primary mx-2  my-3" onClick={lowercase}>
            Convert to Lower-case
          </button>
          <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-3 " onClick={handlecopy}>
            Copy text
          </button>
          <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-3" onClick={cleared}>
            Clear
          </button>
        </div>
      </div>
      <div
        className=" container my-3"
        style={{ color: props.mode === "light" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
      </div>
    </>
  );
}
