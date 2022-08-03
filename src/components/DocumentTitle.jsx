import React, {useState} from 'react';

const DocumentTitle = ({title, titleChange}) => {
  const [edit, setEdit] = useState(false);

  function titleClickHandler() {
    setEdit(true);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    setEdit(false);
  }

  return (
    <form className={'title main-style'} onSubmit={onSubmitHandler}>
      {edit
        ? <input className={'main-style main-style-edit'} type="text" value={title} onChange={titleChange}/>
        : <span onClick={titleClickHandler}>{title}</span>}
    </form>
  );
};

export default DocumentTitle;
