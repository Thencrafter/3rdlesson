import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {newPost} from './data/state.js'
import {changePost} from './data/state.js'
import {subscribe} from './data/state.js'
import state from './data/state.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
export function run(state){
  root.render(
    <React.StrictMode>
      <App 
        state = {state}
        newPost = {newPost}
        changePost = {changePost}
     />
   </React.StrictMode>
  );
}

run(state)

subscribe(run)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
