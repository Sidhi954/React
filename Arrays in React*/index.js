import React from "react";
import ReactDOM from "react-dom";
import Card from './Card';
import './index.css';
import Sdata from './Sdata';


ReactDOM.render(
  <>

  <h1 className="heading">List of top 5 Netflix Series</h1>
    <Card 
      
      sname={Sdata[0].sname}
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      link={Sdata[0].link}
    />
    <Card 
      
      sname={Sdata[1].sname}
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      link={Sdata[1].link}
    />
    <Card 
      
      sname={Sdata[2].sname}
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      link={Sdata[2].link}
    />
    
  </>,
  document.getElementById("root")
);
