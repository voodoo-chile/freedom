const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Tag = new Schema({
	Tag: {
		type: String
	}
});

module.exports = mongoose.model('Tag', Tag);