import React, { useEffect } from 'react';
import "./style.css"

const Model = ({handleClose}) => {
  useEffect(() => {
    function onKeyDown(event){
      if(event.keyCode === 27){
        handleClose();
      }
    }
  
    document.addEventListener("keydown",onKeyDown);
  
    return () => {
      document.removeEventListener("keydown",onKeyDown)
    };
  }, []);
  
  return (
    <>
      <div className='modalOuter'>
        <div className='modalContent'>
          <div className='ModalHeader'>
            <span className='modalTitle'>Modal Demo</span>
            <span className='modalClose' onClick={handleClose}>X</span>
          </div>
          <span className='paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel, iusto quia repellat nesciunt quam. Maxime magni voluptates rem omnis tempora quasi, cupiditate, non consectetur sint commodi nemo quae dolorem!</span>
        </div>
      </div>
    </>
  )
}

export default Model