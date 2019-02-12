import React, { Component } from 'react';

class Cast extends Component {
  render() {
 const castOne = this.props.actor;
    return (
  <p>- {castOne.name}, plays: {castOne.role}.</p>
    );
  }
}

export default Cast;