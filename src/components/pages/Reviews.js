import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Reviews extends Component {
    state = {
        content: [],
        id: "",
    };
    
    async componentDidMount() {
    
        try {
            const id = this.props.match.params.movieId;
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=b42fcc4cb047a9aa884c69051a0d1c53`)
            console.log(response);
            const data = await response.json();
            this.setState({ content: data.results })
        } catch (error){}
    }


    render() {
        return (
           
                   <ul>
          {this.state.content.length ? (
            this.state.content.map(discript => {
              return (
                <li key={discript.id}>
                  <h2>Author:{discript.author}</h2>
                  <p>{discript.content}</p>
                </li>
              );
            })
          ) : (
            <p className="">We don't have any reviews for this movie</p>
          )}
        </ul>
          
        );
    }
}



Reviews.propTypes = {
    movieId: PropTypes.string,
};
export default Reviews;