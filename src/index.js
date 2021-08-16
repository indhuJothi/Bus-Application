import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Service from './service/service';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Page from './main';
import App from '../src/common/App'




ReactDOM.render(
  <React.StrictMode>
   <Page/>
   </React.StrictMode>,
  document.getElementById('root')
);





