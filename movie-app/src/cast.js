import React, { Component } from 'react';
import Actor from './actor';
import Movielist from './movielist';
//import Review from './review';

class Cast extends Component {

    state = {
        show: true,
        cast: true
    };

    render() {

        return (
        const display = '';

        if (this.state.show === true) {
            display = " Unhidin";
        }
        else {
            dispaly = " hidin";
        }

        <ul>
            {
                this.props.movie.cast.map(actor => (
                    <Cast name={cast.name} role={cast.role} />

                ))
            }
        </ul>
        <div>
            <div><strong>Rating: {this.props.movie.cast}</strong></div>
            <p>
                {this.props.movie.description}
            </p>
       </div>
        )
    };

 export default Cast;