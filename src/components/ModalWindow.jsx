import React from 'react';

const ModalWindow = ({ fileInput, setModal }) => {

  function continueButtonHandler() {
    setModal(false);
    fileInput.current.click();
  }
  return (
    <div className={'modal-window-background'}>
      <div className={'modal-window-container'}>
        <h3 className={'modal-title'}>Хотите продолжить?</h3>
        <p className={'modal-text'}>Импортирование схемы, приведет к потере текущих наработок. Что бы сохранить текущие изменения - экспортируйте их.</p>
        <div className={'buttons-block'}>
          <div onClick={() => setModal(false)}>Отменить</div>
          <div onClick={continueButtonHandler}>Продолжить</div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
