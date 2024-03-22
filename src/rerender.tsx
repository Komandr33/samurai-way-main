import * as React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App, {StateType} from './App';
import {addMessage, addPost, updateText} from './redux/state';
import './index.css';

export const RerenderEntireThree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} updateText={updateText} addPost={addPost} addMessage={addMessage} />
        </BrowserRouter>, document.getElementById('root')
    );
};