import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {

  deleteHandler(){
    alert("delete is clicked");
  }

  render() {
    let subscribers = [{
      id:1,
      name: "satya",
      phone: "3798379"
    },
    {
      id:2,
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
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            subscribers.map(subscirber=>{
              return(
              <div key={subscirber.id} className="grid-container">
              <span className="grid-item ">{subscirber.name}</span>
              <span className="grid-item ">{subscirber.phone}</span>
              <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn" onClick={this.deleteHandler}>Delete</button>
              </span>
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