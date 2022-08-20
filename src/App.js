import './App.css'
import { useState, useEffect } from 'react'
import Search from './components/Search'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

function App() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  // const [loadSearch, setLoadSearch] = useState(false)

  useEffect(() => {
    BooksAPI.getAll().then((response) => {
      setBooks(response)
    })
  }, [])

  const moveBetweenShelves = async (book, shelf) => {
    await BooksAPI.update(book, shelf)
    await BooksAPI.getAll().then((response) => {
      setBooks(response)
    })
  }

  const handleSearch = (e) => {
    if (e.target.value === '') {
      setSearchResults([])
      return
    }
    handleBooksFromSearch(e.target.value)
  }

  const handleBooksFromSearch = async (query) => {
    // setLoadSearch(true)
    try {
      const data = await BooksAPI.search(query)
      setSearchResults(data)
    } catch (error) {
      console.log(error)
      setSearchResults([])
    }
    // setLoadSearch(false)
  }

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Home books={books} moveBetweenShelves={moveBetweenShelves} />
            }
          />
          <Route
            path='/search'
            element={
              <Search
                handleSearch={handleSearch}
                search={search}
                searchResults={searchResults}
                moveBetweenShelves={moveBetweenShelves}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
