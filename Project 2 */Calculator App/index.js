import React from 'react';
import ReactDOM from 'react-dom';
import add,{sub,mul,div} from './App';
ReactDOM.render(<>

<ol>
  <li>Sum of two numbers is:{add(8,43)}</li>
  <li>Subtraction of two numbers is:{sub(43,8)}</li>
  <li>Multiplication of two numbers is:{mul(43,8)}</li>
  <li>Division of two numbers is:{div(43,8)}</li>
</ol>
</>,document.getElementById("root"));
