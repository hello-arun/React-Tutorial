// import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './component/counters';

const root = ReactDOM.createRoot(document.getElementById('root')); // Define root element in which we wish to add the element
root.render(<Counters/>) // Where in the DOM we want to add the element