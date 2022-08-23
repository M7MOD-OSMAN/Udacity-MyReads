# Book Shelves Project

This project acts as a library for your books , you can search many books and choose the right book you can mark the selected book to one be read , want to read or currently reading , in your main page in this project you can find your books within every shelf you have selected . this project hepl you to orgnize your books so feel free to use it , this projects is depending on react-cross-skilling programe .

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) to bootstrap the project.

## Getting Started

To get started using this project right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`
- open your browser in port 4200 you will get your project ready

## Prerequisites

What things you need to install the software and how to install them

```
- you should have installed nodejs with npm in your local machine
- you will need code editor like vscode
- you need a browser which has javascript enabled
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Contributing

This repository is free to use

## Authors

- **Mahmoud Osman** - _Updated work_

## License

- see the LICENSE.md file for details
