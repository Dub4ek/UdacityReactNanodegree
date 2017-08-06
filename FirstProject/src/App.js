import React from 'react'
import {Route} from 'react-router-dom';
import BookCategories from './components/BookCategories';
import Search from './components/Search';
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
    state = {
        searchBooks: [],
        categoriesBooks: []
    };

    searchBooks = (query) => {
        BooksAPI.search(query)
            .then(result => {
                if (Array.isArray(result)) {
                    this.setState({searchBooks: result});
                }
            })
    }

    componentWillMount() {
        this.getCategories();
    }

    changeBookShelf = (shelf, bookId) => {
        BooksAPI.update({id: bookId}, shelf)
            .then(() => this.getCategories())
    }

    getCategories = () => {
        BooksAPI.getAll()
            .then(result => {
                this.setState({categoriesBooks: result})
            })
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <BookCategories books={this.state.categoriesBooks} changeBookShelf={this.changeBookShelf}/>
                )}>
                </Route>
                <Route path="/search" render={() => (
                    <Search searchResult={this.state.searchBooks} searchHandler={this.searchBooks} changeBookShelf={this.changeBookShelf}/>
                )}>
                </Route>
            </div>
        )
    }
}

export default BooksApp
