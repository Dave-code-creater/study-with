const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
	return new Promise((resolve, reject) => {
		bcrypt.genSalt(12, (err, hash) => {
			if (err) {
				reject(err);
			}
			bcrypt.hash(password, hash, (err, hash) => {
				if (err) {
					reject(err);
				}
				resolve(hash);
			});
		});
	});
};

const comparePassword = async (password, hash) => {
	return new Promise((resolve, reject) => {
		bcrypt.compare(password, hash, (err, result) => {
			if (err) {
				reject(err);
			}
			resolve(result);
		});
	});
};

module.exports = {
	hashPassword,
	comparePassword,
};
