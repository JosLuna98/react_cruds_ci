import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import { HomeUser, AddUser, EditUser } from './components/user';
import { HomeCompany, AddCompany, EditCompany } from './components/company';

const App = () => {
	return (
		<Router className="App">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/user">
					<HomeUser />
				</Route>
				<Route path="/add_user">
					<AddUser />
				</Route>
				<Route path="/edit_user/:id_usuario">
					<EditUser />
				</Route>
				<Route path="/company">
					<HomeCompany />
				</Route>
				<Route path="/add_company">
					<AddCompany />
				</Route>
				<Route path="/edit_company/:id_empresa">
					<EditCompany />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
