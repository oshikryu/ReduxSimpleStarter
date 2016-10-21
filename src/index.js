import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar   from './components/search-bar';
// make a new component that makes html
const apiKey = 'AIzaSyD9M488fS-stUtKGYpOLExOfnqMfIxlR8A';

// take this generated html and put it on the page
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

/*
 * second arg is the existing html node to render TO
 * put it in the class="container" div
 * this is the root node of the entire react application
 */
ReactDOM.render(<App />, document.querySelector('.container'));
