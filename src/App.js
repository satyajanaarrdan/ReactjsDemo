import React from 'react';
import Header from './Header';

function App() {
  return (
    // React.createElement("div",{id:"header"}, React.createElement("p",null,"ReactJS"))
    <div>
      <Header/>
      <button>Add</button>
      <div>
        <span>Name</span><br />
        <span>Phone</span>
      </div>

    </div>

  );
}

export default App;
