import React, { useContext, useState } from 'react';
import { WatchContext } from '../../context';
import './WatchForm.css';

function WatchForm({onSubmit}) {

	const {nameClasses} = useContext(WatchContext);


	const [title, setTitle] = useState('');
	const [director, setDirector] = useState('');

	function onInputChange(e){
		if (e.target.name === `${nameClasses.WatchForm.inputNameFirst}`){
			setTitle(e.target.value);
		} if (e.target.name === `${nameClasses.WatchForm.inputNameSecond}`) {
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
		<form	className={nameClasses.WatchForm.classNameContainer}
					onSubmit = {onFormSubmit}
					>
			<input	name={nameClasses.WatchForm.inputNameFirst}
							type={nameClasses.WatchForm.inputTypeFirst}
							value = {title}
							onChange = {onInputChange}
							placeholder = {nameClasses.WatchForm.inputPlaceholderFirst}
							/>
			<input	name={nameClasses.WatchForm.inputNameSecond}
							type={nameClasses.WatchForm.inputTypeSecond}
							value = {director}
							onChange = {onInputChange}
							placeholder = {nameClasses.WatchForm.inputPlaceholderSecond}
							/>
			<button className={nameClasses.WatchForm.classNameButton}>Add</button>
	</form>
	)
}

export default WatchForm