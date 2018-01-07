import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BooksApp from './BooksApp';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter><BooksApp /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
