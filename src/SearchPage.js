import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

const SearchPage = (props) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/"
          className="close-search"
          onClick={() => {
            props.clearQuery()
          }}
        >Close</Link>
        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input
            type="text"
            onChange={props.handleChange}
            value={props.searchQuery}
            placeholder="Search by title or author" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {props.books.length === 0 && <h2>No Match Found!</h2>}
          {(props.books.length > 0 && props.searchQuery !== '') && props.books.map((book, index) =>
            <Book
              bookObj={book}
              updateOption={props.updateOption}
              key={book.id}
              image={book.imageLinks.thumbnail}
              title={book.title}
              authors={book.authors} />
          )}
        </ol>
      </div>
    </div>
  )
}

export default SearchPage;