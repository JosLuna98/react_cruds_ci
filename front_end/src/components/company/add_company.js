import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import AppContainer from '../app_container'
import api from '../../api';

const AddCompany = () => {
  const history = useHistory();
	const [ loading, setLoading ] = useState(false);
	const [ nombre_empresa, setName ] = useState('');
	const [ tipo_empresa , setType ] = useState('');

  const onAddSubmit = async () => {
		setLoading(true);
		try {
			await api.addCompany({
				nombre_empresa, tipo_empresa 
			});
			history.push('/company');
		} catch {
			alert('Error al guardar el usuario!');
		} finally {
			setLoading(false);
		}
	};

  return (
    <AppContainer title="Agregar Empresa">
			<form>
				<div className="form-group">
					<label>Nombre</label>
					<input className="form-control" type="text" value={nombre_empresa} onChange={e => setName(e.target.value)}/>
				</div>
				<div className="form-group">
					<label>Tipo</label>
					<select className="form-select" onChange={e => setType(e.target.value)} value={tipo_empresa}>
						<option defaultValue={true} disabled="disabled">Seleccione una opción</option>
						<option value="Publica">Publica</option>
						<option value="Privada">Privada</option>
					</select>
				</div>
        <br/>
				<div className="form-group">
					<button type="button" className="btn btn-success" onClick={onAddSubmit} disabled={loading}>
						{loading ? 'Cargando...' : 'Guardar'}
					</button>
				</div>
			</form>
		</AppContainer>
  );
};

export default AddCompany;