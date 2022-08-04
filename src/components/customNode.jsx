import React from 'react';
import { useState } from "react";
import {Handle, useReactFlow} from "react-flow-renderer/nocss";

function CustomNode({handlesStyle, id, data, type}) {
  const [ text, setText ] = useState(data.innerText);
  const [ edit, setEdit ] = useState(false);
  const flow = useReactFlow();
  function onSubmitHandler( event ) {
    event.preventDefault();
    const targetNode = flow.getNode(id);
    targetNode.data.innerText = text;
    setEdit(false);
  }
  function doubleClickHandler() {
    setEdit(true)
  }
  function onChangeHandler( event ) {
    setText(event.target.value);
  }
  return (
    <>
      <Handle type="target" id="a" position="top" />
      <Handle type="source" id="b" position="bottom" />
      <Handle type="source" id="c" position="left" style={handlesStyle && handlesStyle.left} />
      <Handle type="source" id="d" position="right" style={handlesStyle && handlesStyle.right} />
      <form onSubmit={onSubmitHandler} onDoubleClick={doubleClickHandler} className={`node ${type}`}>
        {
          edit
          ? <input className={'nodeInput'} value={text} onChange={onChangeHandler} />
          : text
        }
      </form>
    </>
  );
}

export default CustomNode;
