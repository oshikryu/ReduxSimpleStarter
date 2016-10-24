import React, { Component } from 'react';

// jsx is always transpiled as React.createElement...blahblah
// so as a result you need to import react

class SearchBar extends Component {
  // called automatically when a new instance is created
  // used for initializing vars and state
  constructor(props) {
    super(props)
    // only time you will manipulate state as an assigment
    this.state = {
      term: '',
    }
  }

  onInputChange(term) {
    this.setState({term});
    // calling on parent
    this.props.onSearchTermChange(term);
  }

  // adding a value prop makes it a controlled component
  // value only changes when the state changes
  // calling set state from onchange handler, the state value has not changed
  // set state called, component re-renders
  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term} 
          onChange={evt => this.onInputChange(evt.target.value)} />
      </div>
    );
  }

  //onInputChange(evt) {
    //console.log(evt.target.value);
  //}
}

export default SearchBar;
