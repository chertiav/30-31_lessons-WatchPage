import React, { useContext, useEffect, useState }  from 'react';
import './WatchPage.css';
import WatchHeader from '../WatchHeader/WatchHeader';
import { WatchContext } from '../../context';
import WatchSideBar from '../WatchSideBar/WatchSideBar';
import WatchForm from '../WatchForm/WatchForm';
import WatchList from '../WatchList/WatchList';


function WatchPage() {

	const {nameClasses, moviesService} = useContext(WatchContext);
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
		<div className = {nameClasses.WatchPage.classNameContainer}>
			<WatchHeader />
			<div className = {nameClasses.WatchPage.classNameMain}>
				<WatchSideBar />
				<div className={nameClasses.WatchPage.classNameMainContainerForm}>
					<WatchList
						movies={movies}
						onToogle = {toogleToWatch}
						onDelete = {deleteToWatch}
					/>
					<WatchForm
						onSubmit={addToWatch}
					/>
				</div>
			</div>
		</div>
	)
}

export default WatchPage;