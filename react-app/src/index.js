// import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './component/counter';

const root = ReactDOM.createRoot(document.getElementById('root')); // Define root element in which we wish to add the element
root.render(<Counter/>) // Where in the DOM we want to add the element