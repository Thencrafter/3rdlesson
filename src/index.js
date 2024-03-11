import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './data/state.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
export function run(state){
  root.render(
    <React.StrictMode>
      <App 
        state = {state}
        newPost = {store.newPost}
        changePost = {store.changePost}
     />
   </React.StrictMode>
  );
}

run(store.getState())

store.subscribe(run)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
