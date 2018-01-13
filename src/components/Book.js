import React from 'react'
import '../Main.css'
import * as BooksAPI from '../utils/BooksAPI'

class Book extends React.Component {

  updateBook = (e, book) => {
    var shelf = e.target.value
    BooksAPI.update(book, shelf).then((elem) => {
      this.props.updateBooksState()
    })
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${ this.props.book.imageLinks.smallThumbnail })` }}></div>
            <div className="book-shelf-changer">
              {/* Add ability change change shelfs, explore code of indian*/}
              <select onChange={(e) => this.updateBook(e, this.props.book)} value={this.props.book.shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{ this.props.book.title }</div>
        </div>
      </li>
    )
  }
}
export default Book