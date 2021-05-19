import axios from 'axios'

const BASE_API_URL = 'http://localhost:3000';

const api = {
	//User
	getAllUsers: () => axios.get(`${BASE_API_URL}/users`),

	getUser: (id) => axios.get(`${BASE_API_URL}/users/${id}`),

	addUser: (user) => axios.post(`${BASE_API_URL}/users`, user),

	updateUser: (user, id) => axios.put(`${BASE_API_URL}/users/${id}`, user),

	deleteUser: (id) => axios.delete(`${BASE_API_URL}/users/${id}`),

	//Company
  getAllCompanies: () => axios.get(`${BASE_API_URL}/companies`),

	getCompany: (id) => axios.get(`${BASE_API_URL}/companies/${id}`),

	addCompany: (company) => axios.post(`${BASE_API_URL}/companies`, company),

	updateCompany: (company, id) => axios.put(`${BASE_API_URL}/companies/${id}`, company),

	deleteCompany: (id) => axios.delete(`${BASE_API_URL}/companies/${id}`)
};

export default api;