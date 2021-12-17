import React from "react";
import ReactDOM from "react-dom";
import Loader from "./loader";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Loader />
      <br />
      <br />
      <br />
      <p>Example provided by <a href="https://privjs.com">privjs.com | Buy & sell NPM packages</a></p>

<br/>
<br/>
<br/>
<br/>
<br/>
      <p><small>Gsap code example referred from: https://codesandbox.io/s/google-style-loader-gx7fi</small></p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
