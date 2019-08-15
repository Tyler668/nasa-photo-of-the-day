import React from "react";
import "./App.css";
import PhotoContainer from "./components/photoContainer";
// import DropDown from "./components/dropdown";
// import { useEffect, useState } from "react";

// import DatePicker from "react-datepicker";
 
// import "react-datepicker/dist/react-datepicker.css";



function App() {
  return (
    <div className="App">
      {/* <DatePicker/> */}
      <PhotoContainer/>
    </div>
  );
}


// class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       startDate: new Date()
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
 
//   handleChange(date) {
//     this.setState({
//       startDate: date
//     });
//   }
 
//   render() {
//     return (
//       <DatePicker
//         selected={this.state.startDate}
//         onChange={this.handleChange}
//       />
//     );
//   }
// }


export default App;
