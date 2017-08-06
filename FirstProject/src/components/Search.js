import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book'


class Search extends Component {
    static propTypes = {
        searchResult: PropTypes.array.isRequired,
        searchHandler: PropTypes.func.isRequired,
        changeBookShelf: PropTypes.func.isRequired
    }

    state = {
        query: ''
    };

    render() {
        const {searchResult, searchHandler} = this.props;
        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(event) => searchHandler(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchResult.map(item => {
                            if (item) {
                                return <li key={item.id}><Book book={item} changeBookShelf={this.props.changeBookShelf}></Book></li>
                            }

                            return '';
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;