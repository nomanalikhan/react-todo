import React, {Component} from 'react';

class TaskList extends Component {
	constructor(props) {
	  super(props);
	}

	removeTask(ind) {
		this.props.removeTask(ind);
	}

  render() {
    const items = this.props.tasks && this.props.tasks.length ? this.props.tasks.map((val, ind) => {
      return (
        <div key={ind}>
          <li>
            {val}
            <span>
              <button onClick={this.removeTask.bind(this, ind)}>Remove</button>
            </span>
          </li>
        </div>
      );
    }) : null;
    return (
    	<div>
      	<ul>
          {items}
        </ul>
      </div>
    );
  }
}
export default TaskList;
