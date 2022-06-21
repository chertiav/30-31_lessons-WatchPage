import React from 'react';
import './WatchItem.css';

const contentStyles = {
	color: 'white',
};

function toggleBackground(movie){
	return {
		...contentStyles,
		backgroundColor: movie.isDone ? 'cadetblue' : 'darkgoldenrod'
	}
}

function WatchItem({movie, onDelete, onToogle}) {

	function onMovieDelete (event) {
		event.stopPropagation();
		onDelete(movie.id)
	}

	return (
		<div
			className="watch-item"
			style={toggleBackground(movie)}
			onClick={() => onToogle(movie.id)}
			>
			<div
				className= "content">
				{movie.title} produced by {movie.director}
			</div>
			<span
				className="delete-btn"
				onClick={onMovieDelete}
				>
				X
			</span>
		</div>
	);
}

export default WatchItem;