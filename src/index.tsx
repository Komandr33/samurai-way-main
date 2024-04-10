import React from 'react';
import './index.css';
import {store} from './redux/store';
import App from './App';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

export const rerenderEntireThree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>, document.getElementById('root')
  );
};

rerenderEntireThree();

store.subscribe(rerenderEntireThree)