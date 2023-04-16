import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();
  const [pass, setPass] = useState();

  const InputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
  };

  const InputEventTwo = (event) => {
    setPass(event.target.value);
  }
  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>Hello {fullName}</h1>
            <input
              type="text"
              placeholder="Your Name..."
              onChange={InputEvent}
              value={name}
            />
            <input
              type="password"
              placeholder="Enter Your Password.."
              onChange={InputEventTwo}
              value={pass}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
