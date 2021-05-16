
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
    };

    render() {
        return (
            <div>
                <SearchBar onSearch={this.setSearchQuery} />

                <ul>
                    {this.state.movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={{ pathname: `/movies/${movie.id}` }}>
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



    // fetchSearch=(query)=>{
    //     const url = `https://api.themoviedb.org/3/search/movie?api_key=b42fcc4cb047a9aa884c69051a0d1c53&language=en-US&query=${query}&page=1&include_adult=false`;
    // return axios.get(url).then(res => {
    //     return res.data;
    // });
    // };

    // componentDidMount() {
    //     this.props.location?.state?.search &&
    //         fetchSearch(this.props.location.state.search).then(data => {
    //             console.log(data);
    //             this.setState({ results: data.results });
    //         });
    // }

    // async componentDidMount() {
    //     try {
    //         const query = this.props.match.params.movieId
    //         const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b42fcc4cb047a9aa884c69051a0d1c53&language=en-US&query=${query}&page=1&include_adult=false`)
    //         console.log(response);
    //         const data = await response.json();
    //         this.setState({ ...data, back: this.props.location.state });
    //         console.log("[data]", data);
    //     } catch (error) { }
    // }