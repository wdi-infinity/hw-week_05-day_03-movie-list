import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cast from './Cast';

class Movie extends Component {
    render() {
        const castComponents = this.props.movie.cast.map(cast => <Cast cast={cast} />)
        return (
            <div>
                <h2>{this.props.movie.title}</h2>
                <img src={this.props.movie.poster} />

                <div>
                    <strong> Rating: {this.props.movie.rating}</strong>
                </div>
                <p>{this.props.movie.description}</p>
                {castComponents}
            </div>
        );
    }

}
export default Movie;
