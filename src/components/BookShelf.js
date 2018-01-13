import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../Main.css'
import Book from './Book';

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
}
export default BookShelf