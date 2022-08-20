import React from 'react'
import Book from './Book'

const ShelfSearch = ({ searchResults, moveBetweenShelves }) => {
  if (searchResults !== undefined && searchResults.length > 0) {
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>Search</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {/* Book */}

            {searchResults.map((book) => (
              <Book
                key={book.id}
                book={book}
                moveBetweenShelves={moveBetweenShelves}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  } else {
    return <p>No books matched your search query!</p>
  }
}

export default ShelfSearch
