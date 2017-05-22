// import React, { Component } from "react";
import React from "react";
import "./App.css";
import HelloWorld from "./HelloWorld";

const App = () => {
  var name = "Bob";
  // handleClick = () => {
  //   name += " Dylan";
  // };

  return (
    <div className="App">
      <HelloWorld /*onClick={this.handleClick}*/ name={name}/>
      <HelloWorld name="Dylan"/>
    </div>
  );
};

// import logo from "./logo.svg";
//

// class App extends Component {
//   handleClick = () => {
//     console.log("hello");
//   };

//   render() {
//     return (
//       <div className="App">
//         <div className="col-md-6">
//           <div className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <h2>Welcome to React NOOOOOqqqqq</h2>
//           </div>
//           <p onClick={this.handleClick} className="App-intro">
//             To get started, edit <code>src/App.js</code> and save to reload.
//           </p>
//         </div>
//         <div className="col-md-2">
//           aa
//         </div>
//         <div className="col-md-4">
//           aa
//         </div>
//       </div>
//     );
//   }
// }

export default App;
