import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store/store'
import Counter from './components/Counter'
import {Provider} from 'react-redux'
import { Article } from './components/Article'
import { BoardDec as Board } from './components/Board'
import Turn from './components/Turn'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Board></Board>
          <Turn></Turn>
          <Counter />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
