import React, { useContext } from 'react';
import { WatchContext } from '../../context';
import './WatchSideBar.css';


function WatchSideBar() {

	const {nameClasses, logoPath, applicationTitle} = useContext(WatchContext);

	return (
		<div className={nameClasses.WatchSideBar.classNameContainer}>
			<span
				className={nameClasses.WatchSideBar.classNameTitle}
			>
				{applicationTitle}
			</span>
			<div className={nameClasses.WatchSideBar.classNameContainerImg}>
				<img
					className={nameClasses.WatchSideBar.classNameImg}
					src={logoPath}
					alt='LOGO'>
				</img>
			</div>
		</div>
	)
}

export default WatchSideBar;