import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Vdata from "./Vdata";
import "./index.css";

ReactDOM.render(
  <>
    <div className="header-bar">
      <h1 className="heading">Shoes Collection for Men</h1>
    </div><hr/>
    {Vdata.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          head={val.head}
          title={val.title}
          price={val.price}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
