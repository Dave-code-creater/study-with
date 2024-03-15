const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	email: {
		type: String,
		required: true,
		max: 255,
		min: 6,
	},
	password: {
		type: String,
		required: true,
		max: 1024,
		min: 6,
	},
	role: {
		type: String,
		default: 'user',
	},
	imageURL: {
		type: String,
		default:
			'<a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>',
	},
	achivement: {
		type: String,
		default: 'Beginner',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	courses: {
		type: Array,
		default: [],
	},
	coutry: {
		type: String,
	},
	age: {
		type: Number,
		required: true,
		default: 18,
		min: 18,
		max: 100,
	},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
