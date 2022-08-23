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

  useEffect(() => {
    BooksAPI.getAll().then((response) => {
      setBooks([...response])
    })
  }, [])

  const moveBetweenShelves = async (selectedShelf, changedBook) => {
    await BooksAPI.update(changedBook, selectedShelf)

    const updatedBooks = books.filter((item) => changedBook.id !== item.id)

    changedBook.shelf = selectedShelf
    setBooks([...updatedBooks, changedBook])
  }

  const handleSearch = (e) => {
    if (e.target.value === '') {
      setSearchResults([])
      return
    }
    handleBooksFromSearch(e.target.value)
  }

  const handleBooksFromSearch = async (query) => {
    if (query) {
      const data = await BooksAPI.search(query)
      setSearchResults(data)
    } else {
      setSearchResults([])
    }
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
                books={books}
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
