import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from "./Book";


class BookCategories extends Component {
    STATUS_CURRENTLY_READING = 'currentlyReading';
    STATUS_WANT_TO_READ = 'wantToRead';
    STATUS_READ = 'read';

    static propTypes = {
        books: PropTypes.array.isRequired,
        changeBookShelf: PropTypes.func.isRequired
    }

    render() {
        const currentlyReadingBooks = this.props.books.filter(book => book.shelf === this.STATUS_CURRENTLY_READING);
        const wantToReadBooks = this.props.books.filter(book => book.shelf === this.STATUS_WANT_TO_READ);
        const readingBooks = this.props.books.filter(book => book.shelf === this.STATUS_READ);
        
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {currentlyReadingBooks.map(item => {
                                        return <li key={item.id}><Book book={item} changeBookShelf={this.props.changeBookShelf}></Book></li>
                                    })}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {wantToReadBooks.map(item => {
                                        return <li key={item.id}><Book book={item} changeBookShelf={this.props.changeBookShelf}></Book></li>
                                    })}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {readingBooks.map(item => {
                                        return <li key={item.id}><Book book={item} changeBookShelf={this.props.changeBookShelf}></Book></li>
                                    })}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default BookCategories;