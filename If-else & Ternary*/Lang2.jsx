import React from 'react';
import Card from './Card';
import Vdata from './Vdata';


const Lang2=()=>{
return(
      <Card
      key={Vdata[6].id}
      sname={Vdata[6].sname}
      imgsrc={Vdata[6].imgsrc}
      title={Vdata[6].title}
      link={Vdata[6].link}
    />);}

export default Lang2;
