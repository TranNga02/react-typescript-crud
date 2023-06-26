import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import "./assets/css/avatar-group.scss";
import "./assets/css/button.css";
import "./assets/css/block.css";
import "./assets/css/table.css";
import "./assets/css/badge.css";
import "./assets/css/form.scss";
import "./assets/main.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
