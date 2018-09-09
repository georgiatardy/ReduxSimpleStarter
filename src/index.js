import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCwhXiJEZQtSJRZc1tFjv70ZWd3ETM2CI4';


//Create a new component. This component should produce some HTML//
const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}



//Take this component's generated HTML and put on the page (in the DOM)//
ReactDOM.render(<App />, document.querySelector('.container'));
