import React, { useState } from 'react';
import './WatchForm.css';

function WatchForm({onSubmit}) {

	const [title, setTitle] = useState('');
	const [director, setDirector] = useState('');

	function onInputChange(e){
		if (e.target.name === "title"){
			setTitle(e.target.value);
		} if (e.target.name === "director") {
			setDirector(e.target.value);
		}
	}

	function onFormSubmit(e){
		e.preventDefault();
		onSubmit({title, director, isDone: false})
		setTitle('');
		setDirector('');
	}

	return (
		<form	className="watch-form"
					onSubmit = {onFormSubmit}
					>
			<input	name="title"
							type="text"
							value = {title}
							onChange = {onInputChange}
							placeholder = "Film title"
							/>
			<input	name="director"
							type="text"
							value = {director}
							onChange = {onInputChange}
							placeholder = "Produced"
							/>
			<button className="add">Add</button>
	</form>
	)
}

export default WatchForm