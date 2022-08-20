import React from 'react'

const Book = ({ book, moveBetweenShelves }) => {
  const updateShelf = (event) => {
    moveBetweenShelves(book, event.target.value)
  }

  // const filterMissingThumbnails = () => {
  //   const thumb = book.imageLinks.smallThumbnail
  //   const missing = book.filter((item) => item.thumb === null)
  //   return missing
  // }
  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book?.imageLinks?.smallThumbnail})`,
            }}
          ></div>
          <div className='book-shelf-changer'>
            <select onChange={updateShelf} value={book.shelf}>
              <option>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>{book?.authors}</div>
      </div>
    </li>
  )
}

export default Book
