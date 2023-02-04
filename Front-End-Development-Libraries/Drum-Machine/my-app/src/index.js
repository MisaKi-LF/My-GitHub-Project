import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './App';
import { StateProvider } from "./stateProvider";
import {initialState, reducer} from "./reducer";

ReactDOM.render(
    <React.StrictMode>
        <StateProvider reducer={reducer} initialState={initialState}>
            <App />
        </StateProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

