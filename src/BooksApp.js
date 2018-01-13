import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './Main.css'
import * as BooksAPI from './utils/BooksAPI'
import BookShelf from './components/BookShelf';
import SearchPage from './components/SearchPage';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  updateBooksState = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchPage updateBooksState={this.updateBooksState} navigateToMain = {() => {
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
                <BookShelf updateBooksState={this.updateBooksState} books={this.state.books} title='Currently Reading' shelf='currentlyReading'/>
                <BookShelf updateBooksState={this.updateBooksState} books={this.state.books} title='Want to Read' shelf='wantToRead'/>
                <BookShelf updateBooksState={this.updateBooksState} books={this.state.books} title='Read' shelf='read'/>
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