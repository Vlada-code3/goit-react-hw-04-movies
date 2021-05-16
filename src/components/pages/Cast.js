import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cast extends Component {
    state = {
        cast: [],
        id:"",
    };

    async componentDidMount() {
        try {
            const id = this.props.match.params.movieId
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=b42fcc4cb047a9aa884c69051a0d1c53`)
            console.log(response);
            const actor = await response.json();
            this.setState({ cast: actor.cast })
            
        } catch (error) {}
    }
        
     
   

    render() {
        const { cast } = this.state;
        return (
            <>
                <ul className="filmInfo">
                    {cast.map(actor => {
                        return (
                            <li key={actor.id}>
                                <div className="images">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                                        alt={` ${actor.name}`}
                                    />
                                </div>
                                <p> Actor : {actor.name}</p>
                                <p> Character : {actor.character}</p>
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    }
}
Cast.propTypes = {
    movieId: PropTypes.string,
};

export default Cast;