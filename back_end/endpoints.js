const { userModel, companyModel } = require('./schemas.js');

//User
const getAllUsers = async (res) => {
	userModel.find({}).then((data) => {
		res.json(data);
	}).catch((err) => {
    console.log(err);
  });
};

const getUser = async (req, res) => {
	userModel.findById({ _id: req.params.id }).then((data) => {
		res.json(data);
	}).catch((err) => {
    console.log(err);
  });
};

const addUser = async (req, res) => {
	userModel.create(req.body).then(() => {
		res.sendStatus(200)
	}).catch((err) => {
    console.log(err);
  });
};

const updateUser = async (req, res) => {
	const user = userModel.findById({ _id: req.params.id });
	user.updateOne({ $set: req.body }).then(() => {
		res.sendStatus(200)
	}).catch((err) => {
    console.log(err);
  });
};

const deleteUser = async (req, res) => {
	userModel.deleteOne({ _id: req.params.id }).then(() => {
		res.sendStatus(200)
	}).catch((err) => {
    console.log(err);
  });
};

//Company
const getAllCompanies = async (res) => {
	companyModel.find({}).then((data) => {
		res.json(data);
	}).catch((err) => {
    console.log(err);
  });
};

const getCompany = async (req, res) => {
	companyModel.findById({ _id: req.params.id }).then((data) => {
		res.json(data);
	}).catch((err) => {
    console.log(err);
  });
};

const addCompany = async (req, res) => {
	companyModel.create(req.body).then(() => {
		res.sendStatus(200)
	}).catch((err) => {
    console.log(err);
  });
};

const updateCompany = async (req, res) => {
	const user = companyModel.findById({ _id: req.params.id });
	user.updateOne({ $set: req.body }).then(() => {
		res.sendStatus(200)
	}).catch((err) => {
    console.log(err);
  });
};

const deleteCompany = async (req, res) => {
	companyModel.deleteOne({ _id: req.params.id }).then(() => {
		res.sendStatus(200)
	}).catch((err) => {
    console.log(err);
  });
};

module.exports = { getAllUsers, getUser, addUser, updateUser, deleteUser, getAllCompanies, getCompany, addCompany, updateCompany, deleteCompany };
