import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../Main.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import Book from './Book';
import {PropTypes} from 'prop-types'

class SearchPage extends React.Component {

  state = {
    query: '',
    books: []
  };

  
  searchBooks = (val) => {
    if (val.length !== 0) {
      BooksAPI.search(val, 10).then((books) => {
        books = books.books
        if (books.length > 0) {
          books = books.filter((book) => (book.imageLinks))
          this.setState({ books })
        }
      })
    } else {
      this.setState({books: [], query: ''})
    }
  }

  updateQuery = (event) => {
    const value = event.target.value.trim()
    this.setState({ query: value })
    this.searchBooks(value)
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>
            close
          </Link>
          <div className="search-books-input-wrapper">
            <input id="searchBox" type="text" placeholder="Search by title or author" onChange={event => this.updateQuery(event)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book, index) => (
              <Book updateBooksState={ this.props.updateBooksState } key={ index } book={ book } />
            ))}
          </ol>
        </div>
      </div>
    )
  }

  static propTypes = {
    navigateToMain: PropTypes.func.isRequired,
    updateBooksState: PropTypes.func.isRequired
  }
}
export default SearchPage