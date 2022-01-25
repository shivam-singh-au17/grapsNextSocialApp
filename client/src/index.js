import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Theme1 from './components/Contexts/ThemeContexts1';
import Theme2 from './components/Contexts/ThemeContexts2';

ReactDOM.render(
  <React.StrictMode>
    <Theme1>
      <Theme2>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Theme2>
    </Theme1>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
