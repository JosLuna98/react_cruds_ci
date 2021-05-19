const { Schema, model } = require('mongoose');

const userSChema = new Schema({
	nombre_usuario: {
		type: String,
		required: true
	},
	cedula_usuario: {
		type: String,
		required: true
	},
	telefono_usuario: {
		type: String,
		required: true
	},
	mail_usuario: {
		type: String,
		required: true
	}
});

const userModel = model('User', userSChema, 'TBL_USUARIO');

const companySChema = new Schema({
	nombre_empresa: {
		type: String,
		required: true
	},
	tipo_empresa: {
		type: String,
		required: true
	}
});

const companyModel = model('Company', companySChema, 'TBL_EMPRESA');

module.exports = { userModel, companyModel };
