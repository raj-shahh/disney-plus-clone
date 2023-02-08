import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import LoginState from './context/login/LoginState';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <LoginState>
      
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </LoginState>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
