import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const shelves = [
  { title: 'Currently Reading', key: 'currentlyReading' },
  { title: 'Want To Read', key: 'wantToRead' },
  { title: 'Read', key: 'read' }
];

const BooksPage = (props) => { 
  return (
  	<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
    {shelves.map((shelf) => <BookShelf
  						key={shelf.key}
  						name={shelf.key}
  						books={props.books}
  						shelfTitle={shelf.title}
						updateOption={props.updateOption}
  					/>)}
					</div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
  ) 
}

export default BooksPage;