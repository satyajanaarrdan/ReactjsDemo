import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {
  render() {
    let subscribers = [{
      name: "satya",
      phone: "3798379"
    },
    {
      name: "satya",
      phone: "3798379"
    }]

    return (
      <div>
        {/* <Header />
        <button>Add</button>
        <div>
          <span>Name</span><br />
          <span>Phone</span>
        </div> */}
        <Header />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            subscribers.map(subscirber=>{
              return(
              <div className="grid-container">
              <span className="grid-item ">{subscirber.name}</span>
              <span className="grid-item ">{subscirber.phone}</span>
              </div> 
              )
            })
          }
        </div>
      </div>

    );
  }
}
export default App;