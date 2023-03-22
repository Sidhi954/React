import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Vdata from './Vdata';
import './index.css';

ReactDOM.render(<>
  <h1 className='heading'>DSA Lectures Topic-Wise in C++</h1>
  {Vdata.map((val)=>{
    return(<Card
      sname={val.sname}
      imgsrc={val.imgsrc}
      title={val.title}
      link={val.link}
    />);
  })}
  
</>,document.getElementById("root"));
