import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import PreviewMovie from "../previewMovie/PreviewMovie";
import { MovieDetailsStyled } from "../styled/MovieDetailsStyled";

// import Cast from './Cast';
// import Reviews from './Reviews';

const Cast = lazy(() => import("./Cast.js" /* webpackChunkName: "cast-page" */));
const Reviews = lazy(() => import("./Reviews.js" /* webpackChunkName: "reviews-page" */));

class MovieDetailsPage extends Component {
  state = {
    id: "",
    genres: [],
    release_date: "",
    overview: "",
    vote_average: 0,
    poster_path: "",
    title: "",
    original_title: "",
    name: "",
    back: {}
  };

  async componentDidMount() {
    try {
      const id = this.props.match.params.movieId;

      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b42fcc4cb047a9aa884c69051a0d1c53`);
      // const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b42fcc4cb047a9aa884c69051a0d1c53&query=${query}`)

      console.log(response);
      const data = await response.json();
      this.setState({ ...data, back: this.props.location.state });
      console.log("[data]", data);
    } catch (error) {}
  }

  handlleBack = () => {
    const { history } = this.props;

    if (this.state.back?.search) {
      history.push({
        pathname: this.state.back.from,
        state: { search: this.state.back.search },
        search: `query=${this.state.back?.search}`
      });
    } else history.push("/");
  };

  render() {
    return (
      <MovieDetailsStyled>
        <button className="goBackButton" type="button" onClick={this.handlleBack}>
          Back
        </button>
        <PreviewMovie
          genres={this.state.genres}
          release_date={this.state.release_date}
          overview={this.state.overview}
          vote_average={this.state.vote_average}
          poster_path={this.state.poster_path}
          title={this.state.title}
          original_title={this.state.original_title}
          name={this.state.name}
        />
        <p className="list">Additional information</p>
        <ul className="" key={this.state.id}>
          <li>
            <NavLink className="list" to={`${this.props.match.url}/cast`}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className="list" to={`${this.props.match.url}/reviews`}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
          </Switch>
        </Suspense>
      </MovieDetailsStyled>
    );
  }
}

export default MovieDetailsPage;
