import React from "react";
import "./App.css";
import PhotoContainer from "./components/photoContainer";
import dropDown from "./components/dropdown";

function App() {
  return (
    <div className="App">
      <dropDown/>
      <PhotoContainer/>
    </div>
  );
}

export default App;
