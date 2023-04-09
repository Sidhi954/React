import React from 'react';
import Card from './Card';
import Vdata from './Vdata';

const Lang1 =()=>{
return(
      <Card
      key={Vdata[1].id}
      sname={Vdata[1].sname}
      imgsrc={Vdata[1].imgsrc}
      title={Vdata[1].title}
      link={Vdata[1].link}
    />);
}

export default Lang1;