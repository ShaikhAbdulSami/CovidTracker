import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Covid from './covid';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Covid />
  </React.StrictMode>,
  document.getElementById('root')
);

