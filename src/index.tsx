import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addMessage, addPost} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App state={state} addPost={addPost} addMessage={addMessage}/>
  </BrowserRouter>, document.getElementById('root')
);