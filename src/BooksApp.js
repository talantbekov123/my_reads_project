import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './Main.css'
import * as BooksAPI from './utils/BooksAPI'
import BookShelf from './BookShelf';
import SearchPage from './SearchPage';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }

  updateBook = (/*book, shelf*/a) => {
    console.log(a)
    console.log("Secret Ninja")
    /*
    BooksAPI.update( book.id, shelf)
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })*/
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books)
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchPage navigateToMain = {() => {
            this.setState({showSearchPage: false})
          }}/>
        )}/>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf updateBook = {this.updateBook} books = {this.state.books} title = 'Currently Reading' shelf = 'currentlyReading'/>
                <BookShelf updateBook = {this.updateBook} books = {this.state.books} title = 'Want to Read' shelf = 'wantToRead'/>
                <BookShelf updateBook = {this.updateBook} books = {this.state.books} title = 'Read' shelf = 'read'/>
              </div>
            </div>
            <div className="open-search">
              <Link to = "/search">
                Add a book
              </Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}
export default BooksApp