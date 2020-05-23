import React from 'react';

const Book = (props) => {
          return (	
            <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.image})` }}></div>
                            <div className="book-shelf-changer">
                              <select 
								onChange={(e) => props.updateOption(e, props.bookObj)}
								value={props.bookObj.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{props.title}</div>
{props.authors !== undefined && 
<div key={props.index} className="book-authors">{props.authors.join(', ')}</div>}
                        </div>
                      </li>
 )
}

export default Book;