import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getSate()} dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getSate());

store.subscribe(rerenderEntireTree);

reportWebVitals();
