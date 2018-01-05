import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BooksApp from './BooksApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BooksApp />, document.getElementById('root'));
registerServiceWorker();
