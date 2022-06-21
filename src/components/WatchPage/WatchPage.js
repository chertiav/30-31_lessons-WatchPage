import React, { useContext }  from 'react';
import './WatchPage.css';
import WatchHeader from '../WatchHeader/WatchHeader';
import WatchSideBar from '../WatchSideBar/WatchSideBar';
import WatchForm from '../WatchForm/WatchForm';
import WatchList from '../WatchList/WatchList';
import { WatchContext } from '../../context';



function WatchPage({ addToWatch,toogleToWatch, deleteToWatch }) {

	const {movies} = useContext(WatchContext);

	return (
		<div className = "container-watch">
			<WatchHeader />
			<div className = "watch-container-main">
				<WatchSideBar />
				<div className="watch-container-main-form">
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