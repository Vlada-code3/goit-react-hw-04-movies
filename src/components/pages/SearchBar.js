import React, { Component } from 'react';
import { SearchBarContainer } from './SearchBarStyled';

class SearchBar extends Component {
    state = {
        search: '',
    }
    
    handleChange = e => {
        this.setState({ search: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSearch(this.state.search);
        this.setState({ search: '' });
    };

    render() {
        return (
            <SearchBarContainer className="" onSubmit={this.handleSubmit}>
                <input
                    className=""
                    type="text"
                    placeholder="Search movies"
                    value={this.state.search}
                    name="search"
                    onChange={this.handleChange}
                />

                <button type="submit" className="btnSearch">
                    <span>Search</span>
                </button>
            </SearchBarContainer>
        );
        
    }
}

export default SearchBar;