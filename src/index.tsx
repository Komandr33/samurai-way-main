import React from 'react';
import './index.css';
import state, {addMessage, addPost, subscribe, updateText} from './redux/state';
import App, {StateType} from './App';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

export const rerenderEntireThree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} updateText={updateText} addPost={addPost} addMessage={addMessage} />
    </BrowserRouter>, document.getElementById('root')
  );
};

rerenderEntireThree(state);

subscribe(rerenderEntireThree)