import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { NavigationStyledContainer } from './NavigationStyled';

const Navigation = () => {
    return (
        <NavigationStyledContainer>
        <ul>

            <li>
                    <NavLink
                        exact
                        to="/"
                        className="NavLink"
                        activeClassName="NavLink--active"
                    >Home
                    </NavLink>
            </li>
            <li>
                    <NavLink to="/movies" className="NavLink" activeClassName="NavLink--active">Movies</NavLink>
            </li>
            </ul>
        </NavigationStyledContainer>
    );
}

export default Navigation;