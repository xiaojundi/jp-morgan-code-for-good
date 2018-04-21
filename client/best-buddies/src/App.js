import React, { Component } from 'react';
import Login from './components/Login/Login'
import { Profile } from './components/profile/Profile';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Profile />
      </div>
    );
  }
}

export default App;