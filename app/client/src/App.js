import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import './App.css';
import ShirtList from './Components/Shirts/ShirtList';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleWare = [logger, thunk];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleWare)),
);

const App = () => (
  <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ShirtList />
      </div>

  </Provider>
);

export default App;
