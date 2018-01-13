const api = process.env.REACT_APP_API_URL || 'https://reactnd-books-api.udacity.com'

let token = localStorage.token
if(!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': "oe7bgc8m",
  'Content-Type': "application/json"
}

export const getAll = () =>
  fetch(`${api}/books`, { headers })
  .then(res => res.json())
  .then(data => data.books)


export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
  method: 'PUT',
  headers: headers,
  body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const search = (query) =>
  fetch(`${api}/search`, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify({ "query": query })
  }).then(res => res.json())