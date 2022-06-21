import React, { useContext } from 'react';
import { WatchContext } from '../../context';
import './WatchHeader.css';

function WathHeader() {

	const {nameClasses, logoPath, applicationTitle} = useContext(WatchContext);

	return (
		<div className={nameClasses.WatchHeader.classNameContainer}>
			<span
				className={nameClasses.WatchHeader.classNameTitle}
			>
				{applicationTitle}
			</span>
			<div className={nameClasses.WatchHeader.classNameContainerImg}>
				<img
					className={nameClasses.WatchHeader.classNameImg}
					src={logoPath}
					alt='LOGO'>
				</img>
			</div>
		</div>
	)
}

export default WathHeader;