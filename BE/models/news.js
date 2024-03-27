const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	topic: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	author: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	difficulty: {
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
	createdAt: {
		type: Date,
		default: Date.now,
	},
	imagesURL: {
		type: String,
	},
});

const News = mongoose.model('News', newsSchema);
