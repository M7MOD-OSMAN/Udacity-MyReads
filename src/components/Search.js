import React from 'react'
import { Link } from 'react-router-dom'
import ShelfSearch from './ShelfSearch'

const Search = ({ handleSearch, searchResults, moveBetweenShelves }) => {
  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search' />
        <div className='search-books-input-wrapper'>
          <input
            onChange={handleSearch}
            type='text'
            placeholder='Search by title, author, or ISBN'
          />
        </div>
      </div>
      {/* ShelfSearch */}
      <ShelfSearch
        searchResults={searchResults}
        moveBetweenShelves={moveBetweenShelves}
      />
    </div>
  )
}
export default Search
