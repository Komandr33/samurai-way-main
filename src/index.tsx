import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store-redux';

export const rerenderEntireThree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>, document.getElementById('root')
  );
};

rerenderEntireThree();

store.subscribe(rerenderEntireThree)