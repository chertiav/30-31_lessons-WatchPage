import React from 'react';
import WatchItem from '../WatchItem/WatchItem';

function WatchList({movies, onDelete, onToogle}) {
	return (
		<>
			{movies.map(movie => {
				return (
						<WatchItem
							key={movie.id}
							movie={movie}
							onToogle={onToogle}
							onDelete={onDelete}
						/>
					);
			})}
		</>
	);
}

export default WatchList;