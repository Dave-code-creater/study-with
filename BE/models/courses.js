const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	description: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	peopleAttend: {
		type: Number,
		default: 0,
	},
	documentation: {
		type: String,
		default: 'No documentation',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	imagesURL: {
		type: String,
	},
});

const Courses = mongoose.model('Courses', courseSchema);

module.exports = Courses;
