import React from 'react'
import ReactDOM from 'react-dom/client'
const element = <h1>Hello World</h1> // This is jsx expression
const root = ReactDOM.createRoot(document.getElementById('root')); // Define root element in which we wish to add the element
root.render(element) // Where in the DOM we want to add the element