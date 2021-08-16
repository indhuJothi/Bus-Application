import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Service from './service/service';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Page from './main';
import App from '../src/common/App'
import Main from './common/main';




ReactDOM.render(
  <React.StrictMode>
   {/* <Page/> */}
   <Main/>
   </React.StrictMode>,
  document.getElementById('root')
);





