import React from 'react'
import Book from './Book'

const Shelf = ({ title, books, categoryName, moveBetweenShelves }) => {
  const booksByCategory = books.filter((book) => book.shelf === categoryName)
  return (
    <div>
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{title}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {/* Book */}
            {booksByCategory.map((book) => (
              <Book
                key={book.id}
                book={book}
                category={categoryName}
                moveBetweenShelves={moveBetweenShelves}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Shelf
