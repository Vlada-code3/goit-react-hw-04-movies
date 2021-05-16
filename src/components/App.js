import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './header/Header';
import Cast from './pages/Cast';
// import Main from './main/Main';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage';
import NotFoundPage from './pages/NotFoundPage';
import Reviews from './pages/Reviews';

const App = () => {
    return (
        <>
            
            <Header />
            <Switch>
            <Route exact path="/" component={HomePage} />
                <Route exact path="/movies" component={MoviesPage} />
                <Route path="/movies/:movieId" component={MovieDetailsPage} />
                <Route path="/movies/:movieId/cast" component={Cast} />
                <Route path="/movies/:movieId/reviews" component={Reviews} />
                <Route component={NotFoundPage} />
            </Switch>
            </>
    );
}

export default App;