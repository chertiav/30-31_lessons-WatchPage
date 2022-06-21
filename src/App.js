import React, { useEffect, useState } from 'react';
import './App.css';
import WatchPage from './components/WatchPage/WatchPage';
import { WatchContext } from './context';
import moviesService from '../src/API/MovieService';

function App() {

	const logoPath = 'https://pbs.twimg.com/profile_images/1091807448355229697/Sgdo_u2j_400x400.jpg';
	const applicationTitle = 'HD Rezka';

	const [movies, setMovies] = useState ([]);

	useEffect(()=> {
		moviesService.get('/')
			.then(({data}) => setMovies(data))
			.catch(error => console.log(error))
	}, []);

	function addToWatch(toWatch){
		toWatch.id = Date.now();
		moviesService.post('/', toWatch).then(({data}) => {
			const newWatchMovies = [...movies, data];
			setMovies(newWatchMovies);
		});
	}

	function deleteToWatch(id) {
		moviesService.delete(`/${id}`);
		const newWatchMovies = movies.filter(movie => movie.id !== id);
		setMovies(newWatchMovies);
	}

	function toogleToWatch (id){
		const updateMovie = movies.find(movie => movie.id === id);
		updateMovie.isDone = !updateMovie.isDone;
		moviesService.put(`/${id}`, updateMovie).then(({data}) =>
			setMovies(movies.map(movie =>	movie.id !== id ? movie : data))
		);
	}

	return (
		<WatchContext.Provider
			value={{
				movies,
				applicationTitle,
				logoPath
			}}
			>
			<WatchPage
				addToWatch = {addToWatch}
				deleteToWatch ={deleteToWatch}
				toogleToWatch= {toogleToWatch} />
		</WatchContext.Provider>
	);
}

export default App;
