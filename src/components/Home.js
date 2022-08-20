import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

const Home = ({ books, moveBetweenShelves }) => {
  const shelfsData = [
    {
      books: books,
      title: 'Currently Reading',
      categoryName: 'currentlyReading',
      moveBetweenShelves: moveBetweenShelves,
    },
    {
      books: books,
      title: 'Want to read',
      categoryName: 'wantToRead',
      moveBetweenShelves: moveBetweenShelves,
    },
    {
      books: books,
      title: 'Read',
      categoryName: 'read',
      moveBetweenShelves: moveBetweenShelves,
    },
  ]

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        {/* Shelf */}
        {shelfsData.length > 0 &&
          shelfsData.map((shelf, index) => {
            return (
              <Shelf
                key={index}
                books={shelf.books}
                title={shelf.title}
                categoryName={shelf.categoryName}
                moveBetweenShelves={shelf.moveBetweenShelves}
              />
            )
          })}
      </div>
      <div className='open-search'>
        <Link to='/search'>search</Link>
      </div>
    </div>
  )
}

export default Home
