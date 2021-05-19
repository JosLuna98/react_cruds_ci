const mongoose = require('mongoose');

const MONGO_URL = `mongodb://cruds_track4go_db:27017/exercises`;
// const MONGO_URL = `mongodb://localhost:27017/exercises`; //! comment to dockerize

const mongodbConnection = async () =>
	await mongoose.connect(
		MONGO_URL,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true
		},
		function(err) {
			if (err) throw 'track4go_db error: ' + err;
		}
	);

module.exports = mongodbConnection;
