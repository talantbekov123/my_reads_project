const api = process.env.REACT_APP_API_URL || 'https://reactnd-books-api.udacity.com'

let token = localStorage.token
if(!token)
	token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
	'Accept': 'application/json',
	'Authorization': token
}

export const getAll = () =>
	fetch(`${api}/books`, { headers })
	.then(res => res.json())
	.then(data => data.books)
