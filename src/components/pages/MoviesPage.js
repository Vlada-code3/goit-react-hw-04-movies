
import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import SearchBar from './SearchBar';

const searchMovies = (query = '', pageNumber = 1) => {
    return fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=b42fcc4cb047a9aa884c69051a0d1c53&query=${query}&page=${pageNumber}`,
    )
        .then(res => res.json())
        .then(data => data.results);
};

class MoviesPage extends Component {
    state = {

        movies: [],
        pageNumber: '',
        search:""
        
    }


    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search).get('query');
        if (!query) {
            return;
        }

        
            searchMovies(query)
            .then(movies => {
                this.setState({
                    movies: movies,
                });
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        const prevQuery = new URLSearchParams(prevProps.location.search).get(
            'query',
        );
        const nextQuery = new URLSearchParams(this.props.location.search).get(
            'query',
        );

        if (prevQuery === nextQuery) {
            return;
        }

        
           searchMovies(nextQuery)
            .then(movies => {
                this.setState({
                    movies: movies,
                });
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    setSearchQuery = searchQuery => {
        this.props.history.push({
            ...this.props.location,
            search: `query=${searchQuery}`,
        });
        this.setState({
            search: searchQuery,
        })
    };

    render() {
        return (
            <div>
                <SearchBar onSearch={this.setSearchQuery} />

                <ul>
                    {this.state.movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={{ pathname: `/movies/${movie.id}`, state:{from:this.props.location.pathname, search:this.state.search} }}>
                                {movie.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default MoviesPage;



   