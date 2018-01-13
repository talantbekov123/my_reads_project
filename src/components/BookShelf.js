import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../Main.css'
import Book from './Book';
import {PropTypes} from 'prop-types'

class BookShelf extends React.Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter( book => book.shelf === this.props.shelf ).map((book, index) => (
              <Book updateBooksState={this.props.updateBooksState} key={ index } book={book} />
            ))}
          </ol>
        </div>
      </div>
    )
  }

  static propTypes = {
    updateBooksState: PropTypes.func.isRequired,
    books: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired
  }
}
export default BookShelf