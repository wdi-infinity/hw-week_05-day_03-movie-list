import React, { Component } from 'react';
import Movie from './Movie'

class Cast extends Component {
    render() {
        return (
            <div>
                <h1>
                    {this.props.cast.name}
                </h1>
                <h2>
                    {this.props.cast.role}
                </h2>
            </div>
        );
    }


}


export default Cast;