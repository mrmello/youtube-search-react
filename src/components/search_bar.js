import React, {Component} from 'react'; //pull of the React.Component as a variable

class SearchBar extends Component {
  constructor(props) { //setup in the class
    super(props);

    this.state = { term: '' };
  }

  render () {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange = { event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
