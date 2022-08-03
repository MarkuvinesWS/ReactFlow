import React, { useState } from 'react';

const DocumentTitle = () => {
  const [ text, setText ] = useState('FlowChartName');
  const [ edit, setEdit ] = useState(false);

  function inputChangeHandler( event ) {
    setText( event.target.value );
  }
  function titleClickHandler() {
    setEdit( true );
  }
  function onSubmitHandler( event ) {
    event.preventDefault();
    setEdit(false);
  }

  return (
      <form className={'title main-style'} onSubmit={onSubmitHandler}>
    { edit
      ? <input className={'main-style main-style-edit'} type="text" value={text} onChange={inputChangeHandler}/>
      : <span onClick={titleClickHandler}>{text}</span>}
      </form>
  );
};

export default DocumentTitle;
