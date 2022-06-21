import React, { useContext } from 'react';
import { WatchContext } from '../../context';
import './WatchHeader.css';


function WathHeader() {

	const {applicationTitle, logoPath} = useContext(WatchContext);


	return (
		<div className="watch-header-container">
			<span
				className="watch-header-title"
			>
				{applicationTitle}
			</span>
			<div className="wathc-header-img-container">
				<img
					className="wathc-header-img"
					src={logoPath}
					alt='LOGO'>
				</img>
			</div>
		</div>
	)
}

export default WathHeader;