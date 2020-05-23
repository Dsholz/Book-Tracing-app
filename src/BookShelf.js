import React from 'react';
import Book from './Book';

const BookShelf = (props) => {
  return (
    <div className="bookshelf">
                  <h2 className="bookshelf-title">{props.shelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {props.books.length > 0 && 
    					props.books.filter((book) => book.shelf === props.name).map((book, index) => 
						<Book 
                            index={index}
							bookObj={book}
							updateOption={props.updateOption}
							key={book.id}
							image={book.imageLinks.thumbnail}
							title={book.title}
							authors={book.authors}/>
                        )
  					  }
                    </ol>
                  </div>
                </div>
    )
}

export default BookShelf;