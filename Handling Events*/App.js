import React from 'react';
import { useState } from 'react';

const App=()=>{
  const col="palevioletred";
  const name="Click Me";
  
  const [currColor,setColor]=useState(col);
  const [currName,setName]=useState(name);
  

  const bgChange=()=>{
    let newBg="purple";
    setColor(newBg);
    setName("Angry 😠");
  };
  const newBgB=()=>{
    setColor(col);
    setName("Happy 😄");
  }
  
  return(<>
  <div style={{backgroundColor: currColor}}>
    <button onClick={bgChange} onDoubleClick={newBgB}>{currName}</button>
  </div>
  </>);
};
