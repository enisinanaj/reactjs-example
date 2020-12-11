import './App.css';
import React, { Component } from 'react';
import MovieTable from './Components/MovieTable';

class MainApp extends Component {

  constructor() {
    super();

    this.state = {
      searchQuery: '',
      movies: []
    }
  }

  async loadMovies() {
    var response = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=54d428bf85fa488b2c2f9d24c4961bc9&query=" + this.state.searchQuery
    );

    var moviesAsJson = await response.json();
    this.setState({movies: moviesAsJson.results})
  }

  handleInputChange(inputElement) {
    this.setState({
      searchQuery: inputElement.target.value
    })
  }

  render() {
    return (<div style={{
      flex: 1,
      flexDirection: 'row',
      margin: 25,
      justifyContent: 'space-between'
    }}>
        
      { /* Search form */ }
      <div>
        <input type="text" onChange={ (e) => this.handleInputChange(e) } ></input>
        <br />
        Searching for: {this.state.searchQuery}
        <br />

        <button onClick={ () => { 
          this.loadMovies()
        } }>Go go go...</button>
      </div>
      
      
      { /* Movies result list */ }
      <MovieTable movies={this.state.movies} />
    </div>)
  }
}

export default MainApp;