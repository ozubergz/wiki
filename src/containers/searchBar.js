import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import { fetchResults } from '../actions/action';

class SearchBar extends Component {

  constructor() {
    super();
    this.state = { term: '' };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler(e) {
    e.preventDefault();
    this.setState({ term: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.fetchResults(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form className="form-group" onSubmit={this.submitHandler}>
        <input 
          className='search-bar'
          placeholder="Search..."
          value={this.state.term}
          onChange={this.inputHandler}
        />
        <div className="btn-group">
          <button className="btn submit-btn" type='submit' disabled={!this.state.term} >Wiki Search</button>
          <a href="https://en.wikipedia.org/wiki/Special:Random">    
            <button className="btn random-btn" type='button'>Click Random</button>
          </a>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchResults}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);