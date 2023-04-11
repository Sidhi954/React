import React,{useState} from 'react';




const App=()=>{

  // const state=useState();
  // console.log(state);
   const [count,setCount]=useState(0);


  
  const InnNum=()=>{
    setCount(count+1);
    // console.log('clicked' + count++);
  }
  return(<>
    <h1>{count}</h1>
    <button onClick={InnNum}>Click Me</button>
  </>);
};

export default App;
