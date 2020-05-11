import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import API_KEY from './config/config.js';

ReactDOM.render(<App API_KEY={API_KEY}/>, document.getElementById('app'));