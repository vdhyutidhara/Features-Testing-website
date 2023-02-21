import React, { useState } from "react";
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({ ...prevProps, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    window.webengage.user.login('9SBOkLVMWvPX');

  };

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
      </header>
      <h1>Registration Form</h1>
      <p>Please fill out this form with the required information</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="first-name">Enter Your First Name:
            <input id="first-name" name="firstName" type="text" value={state.firstName} onChange={handleInputChange} required />
          </label>
          <label htmlFor="last-name">Enter Your Last Name:
            <input id="last-name" name="lastName" type="text" value={state.lastName} onChange={handleInputChange} required />
          </label>
          <label htmlFor="email">Enter Your Email:
            <input id="email" name="email" type="email" value={state.email} onChange={handleInputChange} required />
          </label>
          <label htmlFor="new-password">Enter Your Password:
            <input id="new-password" name="password" type="password" pattern="[a-z0-5]{8,}" value={state.password} onChange={handleInputChange} required />
          </label>
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
