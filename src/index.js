import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let messages = [
    {message: "Hello!", name: "Alex", id: 1},
    {message: "Hello!", name: "Dmitriy", id: 2},
    {message: "Nice to meet you!", name: "Alex", id: 3},
    {message: "Nice to meet you too!", name: "Dmitriy", id: 4},
    {message: "My name is Alex! What's yours?", name: "Alex", id: 5},
    {message: "Dmitriy", name: "Dmitriy", id: 6}
  ]

let dialogNames = [
    {name: "Dmitriy Kozhuhov", id: 1},
    {name: "Tim Holmaskiy", id: 2},
    {name: "Joshua Coppola", id: 3}
  ]

let posts = [
    {message: "Hello!", id: 1},
    {message: "Nice to meet you!", id: 2},
    {message: "My name is Alex!", id: 3},
    {message: "What's yours?", id: 4}
  ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      messages = {messages}
      dialogNames = {dialogNames}
      posts = {posts}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
