import React from 'react';
import Lang1 from './Lang1';
import Lang2 from './Lang2';

const favLang ='Java';

// const FavL=()=>{
//   if(favLang==='C++'){
//     return <Lang1/>
//   }
//   else{
//     return <Lang2/>
//   }
// }


const App =()=>(
<>
  <h1 className='heading'>DSA Lectures Topic-Wise in C++</h1>
  {/* <FavL/> */}
  {(favLang==='C++')? <Lang1/>:<Lang2/>}
</>
);

export default App;
