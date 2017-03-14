import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	input: '',
	  };
	}
	handleChange(e) {
    this.setState({ input: e.target.value });
  }

	addTask() {
		this.props.addTask(this.state.input);
		this.setState({input: ''});
	}
  render() {
    return (
    	<div>
      	<input
      		type="text"
      		placeholder="add task"
      		value={this.state.input}
      		onChange={this.handleChange.bind(this)}
      	/>
      	<button onClick={this.addTask.bind(this)}>Add</button>
      </div>
    );
  }
}
export default SearchBar;
