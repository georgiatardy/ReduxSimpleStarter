import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCwhXiJEZQtSJRZc1tFjv70ZWd3ETM2CI4';


//Create a new component. This component should produce some HTML//
const App = () => {
  return <div>Hi!</div>;
}

//Take this component's generated HTML and put on the page (in the DOM)//
ReactDOM.render(<App />, document.querySelector('.container'));
