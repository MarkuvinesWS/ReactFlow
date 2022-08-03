import React from 'react';
import { useState } from "react";
import { Handle } from "react-flow-renderer/nocss";

function CustomNode({nodeName, handlesStyle}) {
  const [ text, setText ] = useState('');
  const [ edit, setEdit ] = useState(false);

  function onSubmitHandler( event ) {
    event.preventDefault(); setEdit(false)
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
      <form onSubmit={onSubmitHandler} onDoubleClick={doubleClickHandler} className={`node ${nodeName}`}>
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
