import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
	constructor(props){
        super(props);
		this.state = {
			value: ''
		};
	}

	addTodo (event) {
		event.preventDefault();
		this.props.addTodo(this.state.value);
		this.setState ({
			value: ''
		});
	}

	updateInput(event) {
		this.setState({
			value: event.target.value
		});
	}

	render() {
		return (
			<form onSubmit={this.addTodo.bind(this)}>
				<input type="text" onChange={this.updateInput.bind(this)} value={this.state.value} placeholder="Add task" />
				<input type="submit" value="Add to list"/>
			</form>
		)
	}
}

export default TodoForm;