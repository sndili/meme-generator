import React from "react";
import './App.css';
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";
// import Upload from "./components/Upload";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <MemeGenerator />
      </div>
      {/* <div className="upload">
        <Upload />
      </div>     */}
              
    </div>
  );
}

export default App;
