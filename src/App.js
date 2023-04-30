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
      <hr />

      <section style={{ padding: '1em', margin: '1em', fontSize: '2em' }}>
        <h1>Sample Text</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor orci eu. Mauris vitae ultricies leo integer. Enim blandit volutpat maecenas volutpat blandit aliquam. Auctor urna nunc id cursus metus aliquam eleifend mi. Id diam maecenas ultricies mi. Duis at consectetur lorem donec massa sapien faucibus et molestie. Mi quis hendrerit dolor magna eget est lorem ipsum. Porttitor leo a diam sollicitudin. Venenatis tellus in metus vulputate eu scelerisque. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Suspendisse sed nisi lacus sed viverra.

        Et malesuada fames ac turpis egestas maecenas. Amet tellus cras adipiscing enim eu turpis egestas pretium. Sit amet consectetur adipiscing elit ut aliquam purus. Amet mattis vulputate enim nulla aliquet porttitor. Elementum curabitur vitae nunc sed velit dignissim sodales. Dictum varius duis at consectetur lorem donec. Hendrerit dolor magna eget est lorem ipsum dolor sit. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Vulputate odio ut enim blandit volutpat maecenas volutpat. Suspendisse interdum consectetur libero id. Quis commodo odio aenean sed adipiscing diam donec. Morbi tincidunt ornare massa eget egestas purus. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Ut faucibus pulvinar elementum integer enim. Sit amet porttitor eget dolor morbi non arcu risus quis. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Tortor pretium viverra suspendisse potenti.

        Varius quam quisque id diam vel. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Quam id leo in vitae turpis massa sed. Non quam lacus suspendisse faucibus. Lacus vel facilisis volutpat est velit egestas. In cursus turpis massa tincidunt dui ut. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Imperdiet nulla malesuada pellentesque elit. Ut consequat semper viverra nam libero justo laoreet. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Cursus eget nunc scelerisque viverra mauris. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Est ultricies integer quis auctor elit sed vulputate mi. Enim facilisis gravida neque convallis a cras semper. Quam quisque id diam vel quam elementum pulvinar. Quam viverra orci sagittis eu volutpat odio facilisis.

        Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Egestas diam in arcu cursus euismod quis viverra nibh cras. Nibh sit amet commodo nulla facilisi. Sed adipiscing diam donec adipiscing tristique risus nec. Eget aliquet nibh praesent tristique magna sit amet. Odio pellentesque diam volutpat commodo. In iaculis nunc sed augue. Ornare massa eget egestas purus viverra accumsan. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Nulla at volutpat diam ut venenatis tellus in. Euismod elementum nisi quis eleifend.

        Donec massa sapien faucibus et molestie ac feugiat sed. Feugiat nibh sed pulvinar proin gravida hendrerit. Proin fermentum leo vel orci porta non pulvinar neque. Nibh mauris cursus mattis molestie a iaculis. Congue mauris rhoncus aenean vel elit scelerisque. Cras sed felis eget velit aliquet sagittis id. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Tellus cras adipiscing enim eu turpis. Ultrices sagittis orci a scelerisque. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor.

        Sed euismod nisi porta lorem mollis. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Interdum varius sit amet mattis vulputate enim nulla aliquet. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Semper quis lectus nulla at volutpat diam ut venenatis. Auctor urna nunc id cursus metus. Dui faucibus in ornare quam viverra orci sagittis. Elit at imperdiet dui accumsan. Venenatis tellus in metus vulputate eu scelerisque felis. Dictum non consectetur a erat nam. Scelerisque purus semper eget duis at tellus at urna. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. At lectus urna duis convallis convallis. Semper viverra nam libero justo laoreet sit. Amet justo donec enim diam vulputate ut pharetra. Varius quam quisque id diam vel. Bibendum enim facilisis gravida neque convallis. In dictum non consectetur a. Tempus iaculis urna id volutpat lacus laoreet non.

        Tempus quam pellentesque nec nam aliquam sem et. Id ornare arcu odio ut. Risus ultricies tristique nulla aliquet enim tortor at. Diam ut venenatis tellus in metus vulputate. Egestas dui id ornare arcu. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Morbi tempus iaculis urna id volutpat lacus laoreet non. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Neque viverra justo nec ultrices dui. Massa massa ultricies mi quis hendrerit dolor magna. Purus in mollis nunc sed id semper risus. Nunc sed velit dignissim sodales ut eu sem integer vitae.

        Odio facilisis mauris sit amet massa vitae tortor. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Rhoncus urna neque viverra justo nec. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. In fermentum et sollicitudin ac orci phasellus. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Diam vulputate ut pharetra sit. Elit pellentesque habitant morbi tristique senectus et netus. Neque vitae tempus quam pellentesque nec nam. Mauris pharetra et ultrices neque ornare.

        A pellentesque sit amet porttitor eget dolor morbi non arcu. Amet justo donec enim diam vulputate ut pharetra sit. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Aliquam sem fringilla ut morbi tincidunt augue. Sem nulla pharetra diam sit. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Mauris vitae ultricies leo integer malesuada nunc. Habitant morbi tristique senectus et netus et malesuada fames ac. Consequat ac felis donec et odio pellentesque diam volutpat. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Tortor posuere ac ut consequat. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Habitant morbi tristique senectus et netus. Dictum sit amet justo donec enim. Dictum non consectetur a erat nam at. Viverra mauris in aliquam sem. Quis ipsum suspendisse ultrices gravida. Pellentesque sit amet porttitor eget dolor morbi non arcu. At tellus at urna condimentum. Faucibus pulvinar elementum integer enim.

        Amet venenatis urna cursus eget nunc scelerisque viverra. Tellus pellentesque eu tincidunt tortor. Penatibus et magnis dis parturient. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Congue eu consequat ac felis donec et odio pellentesque. Urna cursus eget nunc scelerisque viverra. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Tristique senectus et netus et malesuada fames. Dui id ornare arcu odio ut sem. Ipsum faucibus vitae aliquet nec. Nulla posuere sollicitudin aliquam ultrices sagittis orci. A cras semper auctor neque vitae. Nunc eget lorem dolor sed viverra. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Laoreet id donec ultrices tincidunt arcu non. Eu sem integer vitae justo eget magna.
      </section>
    </div >
  );
}

export default App;
