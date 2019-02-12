import React, { Component } from 'react';
import Review from './review';
import Cast from './cast';

class Movie extends Component {
  render() {
    const castComponents = this.props.movie.cast.map(actor => <Cast actor = {actor}/>)
    return (
      <div> 
      <h2>{this.props.movie.title}</h2>
      <img src = {this.props.movie.poster} alt="poster"/>
      <div><strong>{this.props.movie.rating}</strong></div>
      <p>
      {this.props.movie.description}
      </p>
      <p><strong>{this.props.movie.director}</strong></p>
      <p><strong>The Movie Cast</strong></p>
            {castComponents}   
      <Review/>
      </div>
    );
  }
}

export default Movie;