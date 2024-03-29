import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ margin: "10px auto", display: "flex"}} className="btn btn-outline-primary">
      {props.children}
    </button>
  );
}

export function Separator(props){
  return (
    <div {...props} style={{height:"15px"}}>
      {props.children}
    </div>
  );
}
