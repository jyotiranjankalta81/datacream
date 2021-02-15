import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from "./services/reducers/index";
import { createStore } from 'redux';
// import GamePlayedContainers from './containers/GamePlayedContainers';
const store = createStore(rootReducer)
console.log("store data",store)

ReactDOM.render(
  <Provider store={store}>
    {/* <GamePlayedContainers /> */}

    <App />
  </Provider>
  ,
  document.getElementById('root')
);
