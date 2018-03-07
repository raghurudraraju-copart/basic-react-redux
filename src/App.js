import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

class App extends Component {
  render() {

  //step 2:- reducer: state and action
  const reducer = function(state, action) {
    if(action.type==="ATTACK") {
      return action.data;
    }
    if(action.type==="GREENATTACK") {
      return action.data;
    }
    return state;
  }

    // step 1:- store: reducer and state
    const store = createStore(reducer, "Peace");

    //step 3: Subscriber
    store.subscribe(() => {
      console.log("State is now", store.getState());
    })

    //step 4: Action/Dispacher

    store.dispatch({type: "ATTACK", data: "Attacking .."});
    store.dispatch({type: "GREENATTACK", data: "Green Attacking .."});

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
