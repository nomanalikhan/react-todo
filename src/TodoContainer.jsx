import React, {Component} from 'react';
import SearchBar from './SearchBar.jsx'
import TaskList from './TaskList.jsx'

class TodoContainer extends Component {
	constructor(props) {
	  super(props);
	  const tasks = [];
	
	  this.state = {
	  	tasks,
	  };
	}
	handleAddTask(input) {
		if(!input) {
			return;
		}
		const tasksArr = this.state.tasks;
		tasksArr.push(input);
		this.setState({tasks: tasksArr});
	}
	handleRemoveTask(index) {
		const tasksArr = this.state.tasks;
		tasksArr.splice(index, 1);
		this.setState({tasks: tasksArr});
	}
  render() {
    return (
    	<div>
      	<h1>Todo List</h1>
    		<SearchBar addTask={this.handleAddTask.bind(this)} />
    		<TaskList tasks={this.state.tasks} removeTask={this.handleRemoveTask.bind(this)} />
    	</div>
    );
  }
}
export default TodoContainer;
