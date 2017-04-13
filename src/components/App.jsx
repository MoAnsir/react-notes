import React from 'react';

export class CheckBox extends React.Component {
	constructor(props) {
		super(props);
		this.handleCheck = this.handleCheck.bind(this);
		this.state = {
			checked: true
		}
	}
	handleCheck() {
		this.setState({checked: !this.state.checked})
	}
	render() {
		var msg;
		if(this.state.checked) {
			msg = 'checked';
		}else{
			msg = 'unchecked';
		}

		return (
			<div>
				<input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} />
				<p>the box is {msg}</p>
			</div>
		);
	}
}

function DisplayNote(props) {
	return(
		<div className="note">
			<p>Hello my name is Lenny</p>
			<span>
				<button onClick={(e) => props.onClickEdit(e)}>+ + +</button>
			</span>
			<span>
				<button onClick={(e) => props.onClickRemove(e)}>- - -</button>
			</span>
		</div>
	)
}

function EditNote(props) {
	return (
		<div className="note">
			<textarea defaultValue="test">
			</textarea>
			<button onClick={(e) => props.onClick(e)}>-</button>
		</div>
	)
}

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.edit = this.edit.bind(this);
		this.save = this.save.bind(this);
		this.remove = this.remove.bind(this);
		this.state = {
			editing: false
		}
	}

	edit() {
		this.setState({editing: true});
	}

	save() {
		this.setState({editing: false});
	}

	remove() {
		alert('remove');
	}

	render() {
		if(this.state.editing) {
			return <EditNote onClick={(e) => this.save(e)} />
		}else{
			return <DisplayNote onClickEdit={(e) => this.edit(e)} onClickRemove={(e) => this.remove(e)}  />
		}
	}
}

export default App;