import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";

// function ncard(val){
//   return(
//     <Card

//       sname={val.sname}
//       imgsrc={val.imgsrc}
//       title={val.title}
//       link={val.link}
//     />
//   );
// }

ReactDOM.render(
  <>
    <h1 className="heading">List of top 5 Netflix Series</h1>

    {Sdata.map((val)=>{
      return (
        <Card
          sname={val.sname}
          imgsrc={val.imgsrc}
          title={val.title}
          link={val.link}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
