import React from 'react';
import './App.css';
import WatchPage from './components/WatchPage/WatchPage';
import { WatchContext } from './context';
import { logoPath, nameClasses, applicationTitle } from './model/constats';
import moviesService from '../src/API/MovieService';


function App() {

	return (
		<WatchContext.Provider
			value={{
				nameClasses,
				logoPath,
				applicationTitle,
				moviesService,
			}}
			>
			<WatchPage />
		</WatchContext.Provider>
	);
}

export default App;
