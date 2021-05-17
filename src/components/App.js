import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Header from './header/Header';
// import Cast from './pages/Cast';
// import Main from './main/Main';
// import HomePage from './pages/HomePage';
// import MovieDetailsPage from './pages/MovieDetailsPage';
// import MoviesPage from './pages/MoviesPage';
// import NotFoundPage from './pages/NotFoundPage';
// import Reviews from './pages/Reviews';


const HomePage = lazy(() => import('./pages/HomePage.js' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('./pages/MoviesPage.js'/* webpackChunkName: "movie-page" */));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage.js'/* webpackChunkName: "movieDetails-page" */));
// 
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.js'/* webpackChunkName: "notFound-page" */));

const App = () => {
    return (
        <>
            
            <Header />
            <Suspense fallback ={<h2>I'M LOADING...</h2>}>
            <Switch>
            <Route exact path="/" component={HomePage} />
                <Route exact path="/movies" component={MoviesPage} />
                <Route path="/movies/:movieId" component={MovieDetailsPage} />
                <Route component={NotFoundPage} />
                </Switch>
            </Suspense>
            </>
    );
}

export default App;