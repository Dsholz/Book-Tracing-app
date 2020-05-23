import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage';
import BooksPage from './BooksPage';

class BooksApp extends React.Component {
  state = {
    books: [],
    allBooks: [],
    searchQuery: ''
    
  }

   componentDidMount() {	
    BooksAPI.getAll()
      .then((books) => {
    	this.setState(() => ({
        	books
        }))
    })
  } 

  searchBooks = (value) => {
    BooksAPI.search(value, 21).then((allBooks) => {

      if (allBooks !== undefined && Array.isArray(allBooks)) {
        
        const filteredBooks = allBooks.filter(book => book.imageLinks !== undefined).map(newBook => {
           newBook.shelf = 'none'
           this.state.books.forEach(book => {
           	if (book.id === newBook.id) {
              newBook.shelf = book.shelf
            }
           })
          
           return newBook
         })

      	this.setState(() => ({
        	allBooks: [...filteredBooks]
        }))
        
      }else {
      	this.setState(() => ({
        	allBooks: []
        }))
      }
    })
  }

  handleChange = (e) => {
   const { value } = e.target;
   this.setState(() => ({ searchQuery: value })) 
   this.searchBooks(value)
  }

  updateOption = (e, newBook) => {
    const { value } = e.target
    BooksAPI.update(newBook, value).then((response) => {
      BooksAPI.getAll()
      .then((books) => {
    	this.setState(() => ({
        	books
        }))
      })
    })
  }

  render() {
    return (
      <div className="app">
       					<Route exact path="/search" render={() => (
        							<SearchPage 
       									togglePage={this.togglePage}
       									books={this.state.allBooks}
      									updateOption={this.updateOption}
										handleChange={this.handleChange}
										searchQuery={this.state.searchQuery}
      									/>)}/>
						<Route exact path="/" render={() => (
									 <BooksPage
										togglePage={this.togglePage}
										updateOption={this.updateOption}
										books={this.state.books}/>)}/>
      </div>
    )
  }
}

export default BooksApp
