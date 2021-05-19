import React from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './app_container';

const Home = () => {
	return (
		<AppContainer title="Inicio">
			<div className="parent">
				<div className="spacer" />
				<Link to="/user" className="btn btn-primary">
					Usuario
				</Link>
				<div className="spacer" />
				<Link to="/company" className="btn btn-primary">
					Empresa
				</Link>
				<div className="spacer" />
			</div>
		</AppContainer>
	);
};

export default Home;
