import React from 'react';
import logo from '../logo.svg';

const AppContainer = ({ title, children }) => {
	return (
		<div className="container">
			<div className="card">
        <img src={logo} className="App-logo" alt="logo" />
				<h5 className="card-header text-center">{title}</h5>
				<div className="card-body">{children}</div>
			</div>
		</div>
	);
};

export default AppContainer;
