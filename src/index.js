import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import './assets/css/_main.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();