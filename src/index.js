import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// example
// function hello(e) {
//   e.preventDefault();

//   const data = Object.fromEntries(new FormData(e.target));
//   console.log(data);
// }