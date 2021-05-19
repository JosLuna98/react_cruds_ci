const express = require('express');
const cors = require('cors');
const mongodbConnection = require('./mongo.js');
const endPoints = require('./endpoints.js');

mongodbConnection().catch(err => {
  console.error(err.stack)
  process.exit(1)
});

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
	console.log('running cruds_track4go_api');
});

//User
app.get('/users', async (_, res) => await endPoints.getAllUsers(res));

app.get('/users/:id', async (req, res) => await endPoints.getUser(req, res));

app.post('/users', async (req, res) => await endPoints.addUser(req, res));

app.put('/users/:id', async (req, res) => await endPoints.updateUser(req, res));

app.delete('/users/:id', async (req, res) => await endPoints.deleteUser(req, res));

//Company
app.get('/companies', async (_, res) => await endPoints.getAllCompanies(res));

app.get('/companies/:id', async (req, res) => await endPoints.getCompany(req, res));

app.post('/companies', async (req, res) => await endPoints.addCompany(req, res));

app.put('/companies/:id', async (req, res) => await endPoints.updateCompany(req, res));

app.delete('/companies/:id', async (req, res) => await endPoints.deleteCompany(req, res));