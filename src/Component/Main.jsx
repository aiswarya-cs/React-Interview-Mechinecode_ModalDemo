import React, { useState } from 'react';
import "./style.css"
import Model from './Model';

const Main = () => {
  const [Show, setshow] = useState(false);

  const handleClose=()=>{
    setshow(false);
  }
  return (
    <div onClick={()=>setshow(false)}>
      <h1 className='heading'>Modal</h1>
      <button onClick={(e)=>{
        e.stopPropagation();
        setshow(true);
      }}>Show the Modal </button>
      {Show ? <Model handleClose={handleClose}/> :null}
    </div>
  )
}

export default Main