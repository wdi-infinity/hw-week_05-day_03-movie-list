import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MovieList from './movieList';


class App extends Component {
  render() {
    return (
      <div> 
        <h1> Movies 🍿</h1>
        <MovieList/>
      </div>
    );
  }
}

export default App;