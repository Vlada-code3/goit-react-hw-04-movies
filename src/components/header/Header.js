import React, { Component } from 'react';
import { HeaderContainer } from './HeaderStyled';
import Navigation from './navigation/Navigation';

class Header extends Component {
    state = {  }
    render() {
        return (
            <HeaderContainer>
            
                <Navigation />
            </HeaderContainer>
        );
    }
}

export default Header;