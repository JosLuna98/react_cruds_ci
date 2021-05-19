import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import AppContainer from '../app_container'
import api from '../../api';

const EditUser = () => {
	const { id_usuario } = useParams();
	const history = useHistory();
	const [ loading, setLoading ] = useState(false);
	const [ nombre_usuario, setName ] = useState('');
	const [ cedula_usuario, setDni ] = useState('');
	const [ telefono_usuario, setPhone ] = useState('');
	const [ mail_usuario, setMail ] = useState('');

  const onAddSubmit = async () => {
		setLoading(true);
		try {
			await api.updateUser({
				nombre_usuario, cedula_usuario, telefono_usuario, mail_usuario
			}, id_usuario);
			history.push('/user');
		} catch {
			alert('Error al editar el usuario!');
		} finally {
			setLoading(false);
		}
	};

  useEffect(() => {
		api.getUser(id_usuario).then(res => {
			const user = res.data;
			setName(user.nombre_usuario);
			setDni(user.cedula_usuario);
			setPhone(user.telefono_usuario);
			setMail(user.mail_usuario);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

  return (
		<AppContainer title="Editar usuario">
			<form>
      <div className="form-group">
      <label>Nombre</label>
      <input className="form-control" type="text" value={nombre_usuario} onChange={e => setName(e.target.value)}/>
    </div>
    <div className="form-group">
      <label>Cédula</label>
      <input className="form-control" type="text" value={cedula_usuario} onChange={e => setDni(e.target.value)}/>
    </div>
    <div className="form-group">
      <label>Teléfono</label>
      <input className="form-control" type="text" value={telefono_usuario} onChange={e => setPhone(e.target.value)}/>
    </div>
    <div className="form-group">
      <label>E-mail</label>
      <input className="form-control" type="text" value={mail_usuario} onChange={e => setMail(e.target.value)}/>
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

export default EditUser;