# MyReads

MyReads is a modern book-tracing application that allows you to keep track of books your reading in  real-time.

## Installation

You can get the project up and running by following in order the processes outlined below:
- `npm install`: This installs all of the project dependencies and adds a _node_modules_ folder to the root of your project where all the dependency files live .
- `npm start`:  Gets the project ruuning on a local server on your computer.

### Example:
```
$ npm install
$ npm start
```

## Usage

Search for a variety of books to choose from on the **Search Page**. Each Book contains a select input that allows you to add books to diffent shelves in real-time. You can add your choosen book unto any of these shelves:
- Currently Reading
- Want to Read
- Read 

## Tools

MyReads was built with `ReactJs`. The app also uses:
- `React-Router` to dynamically route pages so a user can have access to usage history.
- `Google Books Api` which gets a variety of books for users to read. You can access it through this link [Google Books Api](https://developers.google.com/books/docs/v1/using).

## Issues
- When you add book unto a shelf in the SearchPage It adds the book to your HomePage but doesn't reflect the state of the book immediately on the Search result and requires a reload.  

## Important
Searching of books is limited to these set of search terms:
```
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
```
**N.B:** These list of terms are the **only** terms that will work, so don't be worried if some of your searches don't come back with any results.

## Contributions
MyReads is built by Daniel Soladoye.