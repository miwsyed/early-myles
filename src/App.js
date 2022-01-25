import React from "react";
import "./App.css";
import Albums from "./Components/Albums";
import ContextAPIProvider from "./Components/ContextAPIProvider";
import MainComponent from "./MainComponent";

function App() {
  return (
    <div className="">
      <header className="">
        {/* <ContextAPIProvider> */}
        <Albums />
        {/* </ContextAPIProvider> */}
      </header>
    </div>
  );
}

export default App;
