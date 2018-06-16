import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {projectData} from './data/datasource.js'

ReactDOM.render(
  <App workData={projectData}/>,
  document.getElementById('root'));
registerServiceWorker();
