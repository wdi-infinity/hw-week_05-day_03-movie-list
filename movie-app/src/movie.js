import React, { Component } from 'react';
import Actor from './actor';
//import Review from './review';



class Movie extends Component {

  state = { 
    liked: false, 
    hidin:true
  };


  render() {
    let likedOrNot = '';

    if(this.state.liked === true) {
      likedOrNot = 'Unlike';
    } else {
      likedOrNot = 'Like';
    }

    let myActors = "";

    if (this.state.hidin === true)
    {
      myActors = " Unhidin";
    } 
    else{
      myActors = " hidin";
    }
     
    return (
      <div>
        <h2>{ this.props.movie.title }</h2>
        <img src={ this.props.movie.poster } alt={this.props.movie.title} />

        <div><strong>Rating: { this.props.movie.rating }</strong></div>
        <p>
        { this.props.movie.description }
        </p>

      <ul>
        {
          this.props.movie.cast.map(actor => (
            <Actor name={actor.name} role={actor.role} />
          ))
        }
      </ul>

        <button onClick={this.toggleLike}>
          { likedOrNot }
        </button>
        <button onClick = {this.toggleHide}>
         {hidinButton}
        </button>

      </div>
    );
  }

  toggleLike = () => {
    //console.log('Like or Unlike Movie');
    if (this.state.liked===true)
    {
      this.setState({liked:false}); }
      else { this.setState({liked:true});
    }
  }
  toggleHide = () => {
    //for test fisrt you have to check by console.log
    if (this.state.hidinButton===true)
    {
      this.setState({hidinButton:false}); }

      else { 
        this.setState({hidinButton:true});
    }
  }
}

export default Movie;



