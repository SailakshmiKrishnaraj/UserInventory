import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import { createHashHistory } from 'history';
import { HashRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './State';
const root = ReactDOM.createRoot(document.getElementById('root'));
 const basename = process.env.PUBLIC_URL;
 const history = createHashHistory({ basename });
root.render(
<Provider store={store}> <HashRouter history={history}> <App history={history}/></HashRouter>  </Provider>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
