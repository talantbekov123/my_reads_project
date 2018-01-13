import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './Main.css'

class BookShelf extends React.Component {


  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter( book => book.shelf === this.props.shelf ).map((book, index) => (
              <li key={ book.id }>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${ book.imageLinks.smallThumbnail })` }}></div>
                    <div className="book-shelf-changer">
                      {/* change on select, not working */}
                      <select onChange={this.props.updateBook} value={book.shelf}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{ book.title }</div>
                  
                  {/* test click function
                    book.authors.map((author, index) => (
                      <div key={ index } className="book-authors">{ author }</div>
                    ))
                  */}
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
export default BookShelf