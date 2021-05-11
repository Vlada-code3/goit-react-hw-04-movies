import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './header/Header';
// import Main from './main/Main';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    return (
        <>
            
            <Header />
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies" component={MoviesPage} />
                <Route component={NotFoundPage} />
            </Switch>
            </>
    );
}

export default App;