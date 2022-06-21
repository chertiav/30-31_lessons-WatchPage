import React, { useContext } from 'react';
import './WatchSideBar.css';
import { WatchContext } from '../../context';



function WatchSideBar() {

	const {applicationTitle, logoPath} = useContext(WatchContext);

	return (
		<div className="watch-sidebar-container">
			<span
				className="watch-sidebar-title"
			>
				{applicationTitle}
			</span>
			<div className="watch-sidebar-img-container">
				<img
					className="watch-sidebar-img"
					src={logoPath}
					alt='LOGO'>
				</img>
			</div>
		</div>
	)
}

export default WatchSideBar;