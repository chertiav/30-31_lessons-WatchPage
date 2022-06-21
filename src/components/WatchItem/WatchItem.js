import React, { useContext } from 'react';
import './WatchItem.css';
import {contentStyles} from '../../model/constats';
import { WatchContext } from '../../context';

function toggleBackground(movie){
	return {
		...contentStyles,
		backgroundColor: movie.isDone ? 'cadetblue' : 'darkgoldenrod'
	}
}

function WatchItem({movie, onDelete, onToogle}) {

	const {nameClasses} = useContext(WatchContext);

	function onMovieDelete (event) {
		event.stopPropagation();
		onDelete(movie.id)
	}

	return (
		<div
			className={nameClasses.WatchItem.classNameContainer}
			style={toggleBackground(movie)}
			onClick={() => onToogle(movie.id)}
			>
			<div
				className={nameClasses.WatchItem.classNameContent}>
				{movie.title} produced by {movie.director}
			</div>
			<span
				className={nameClasses.WatchItem.classNameButton}
				onClick={onMovieDelete}
				>
				X
			</span>
		</div>
	);
}

export default WatchItem;