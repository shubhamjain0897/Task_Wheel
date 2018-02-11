// Grab the add function from thse add .js file in the utilis folder
// add(2,14)
// Grab react from the npm module(third party dependencies)
import React from 'react';
import ReactDOM from 'react-dom';
import IndescisionApp from './components/IndescisionApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss';


ReactDOM.render(< IndescisionApp />, document.getElementById('app'));