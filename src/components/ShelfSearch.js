import React from 'react'
import Book from './Book'

const ShelfSearch = ({ books, searchResults, moveBetweenShelves }) => {
  const compareSearchedBooksToHomeBooks = (searchedBook) => {
    books.forEach((book) => {
      if (searchedBook.id === book.id) {
        searchedBook.shelf = book.shelf
      }
    })
  }

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Search</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {/* Book */}

          {!searchResults.error ? (
            searchResults.map((book) => {
              compareSearchedBooksToHomeBooks(book)
              return (
                <Book
                  key={book.id}
                  book={book}
                  moveBetweenShelves={moveBetweenShelves}
                />
              )
            })
          ) : (
            <p>Sorry, no books matched</p>
          )}
        </ol>
      </div>
    </div>
  )
}

export default ShelfSearch
