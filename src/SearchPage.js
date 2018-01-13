import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './Main.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'

class SearchPage extends React.Component {

  state = {
    query: "",
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
    this.setState({query: value})
    this.searchBooks(value)
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to = "/">
            close
          </Link>
          <div className="search-books-input-wrapper">
            <input id="searchBox" type="text" placeholder="Search by title or author" onChange={event => this.updateQuery(event)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <li key={ book.id }>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${ book.imageLinks.smallThumbnail })` }}></div>
                    <div className="book-shelf-changer">
                      <select onChange={(event) => this.props.updateBook(event)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{ book.title }</div>
                </div>
                    <p onClick={() => this.props.updateBook()}> click </p>

              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
export default SearchPage