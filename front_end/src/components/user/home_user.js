import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from '../app_container';
import api from '../../api';

const UserHome = () => {
	const [ users, setUsers ] = useState(null);

	const fetchUsers = () => {
		api.getAllUsers().then((res) => {
			const result = res.data;
			setUsers(result);
		});
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const renderUsers = () => {
		if (!users) {
			return (
				<tr>
					<td colSpan="6">Cargando usuarios...</td>
				</tr>
			);
		} else if (users.length === 0) {
			return (
				<tr>
					<td colSpan="6">No hay usuarios guardados, agregue uno.</td>
				</tr>
			);
		} else {
			return users.map((user, index) => (
				<tr key={user._id}>
					<td>{index + 1}</td>
					<td>{user.nombre_usuario}</td>
					<td>{user.cedula_usuario}</td>
					<td>{user.telefono_usuario}</td>
					<td>{user.mail_usuario}</td>
					<td>
						<Link to={`/edit_user/${user._id}`} className="btn btn-warning">
							Editar
						</Link>
						<button
							type="button"
							className="btn btn-danger"
							onClick={() => {
								api.deleteUser(user._id).then(fetchUsers).catch((_) => {
									alert('Error al eliminar usuario: ' + user._id);
								});
							}}
						>
							Eliminar
						</button>
					</td>
				</tr>
			));
		}
	};

	return (
		<AppContainer title="Usuarios">
			<div className="parent">
				<div className="spacer" />
				<Link to="/add_user" className="btn btn-primary">
					Agregar Usuario
				</Link>
				<div className="spacer" />
				<Link to="/" className="btn btn-primary">
					Volver al Inicio
				</Link>
				<div className="spacer" />
			</div>
			<div className="table-responsive">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Cédula</th>
							<th>Teléfono</th>
							<th>E-mail</th>
							<th>Acción</th>
						</tr>
					</thead>
					<tbody>{renderUsers()}</tbody>
				</table>
			</div>
		</AppContainer>
	);
};

export default UserHome;
