import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <form action='https://register-demo.freecodecamp.org'>
        <fieldset>
          <label for="first-name">Enter Your First Name: <input id="first-name" name="first-name" type="text" required /></label>
          <label for="last-name">Enter Your Last Name: <input id="last-name" name="last-name" type="text" required /></label>
          <label for="email">Enter Your Email: <input id="email" name="email" type="email" required /></label>
          <label for="new-password">Enter Your Password: <input id="new-password" name="new-password" type="password" pattern="[a-z0-5]{8,}" required /></label>
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
