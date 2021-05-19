import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from '../app_container';
import api from '../../api';

const HomeCompany = () => {
	const [ companies, setCompanies ] = useState(null);

	const fetchCompanies = () => {
		api.getAllCompanies().then((res) => {
			const result = res.data;
			setCompanies(result);
		});
	};

	useEffect(() => {
		fetchCompanies();
	}, []);

	const renderCompanies = () => {
		if (!companies) {
			return (
				<tr>
					<td colSpan="4">Cargando empresas...</td>
				</tr>
			);
		} else if (companies.length === 0) {
			return (
				<tr>
					<td colSpan="4">No hay empresas guardados, agregue una.</td>
				</tr>
			);
		} else {
			return companies.map((company, index) => (
				<tr key={company._id}>
					<td>{index + 1}</td>
					<td>{company.nombre_empresa}</td>
					<td>{company.tipo_empresa}</td>
					<td>
						<Link to={`/edit_company/${company._id}`} className="btn btn-warning">
							Editar
						</Link>
						<button
							type="button"
							className="btn btn-danger"
							onClick={() => {
								api.deleteCompany(company._id).then(fetchCompanies).catch((_) => {
									alert('Error al eliminar usuario: ' + company._id);
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
		<AppContainer title="Empresas">
			<div className="parent">
				<div className="spacer" />
				<Link to="/add_company" className="btn btn-primary">
					Agregar Empresa
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
							<th>Tipo</th>
							<th>Acción</th>
						</tr>
					</thead>
					<tbody>{renderCompanies()}</tbody>
				</table>
			</div>
		</AppContainer>
	);
};

export default HomeCompany;
