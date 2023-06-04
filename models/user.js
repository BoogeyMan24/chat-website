const mongoose = require("mongoose");
const { Schema } = mongoose;


const schema = new Schema(
	{
		id: { type: String, require: true, unique: true },
		channels: { type: Object },

	},
);

const name = "user";

module.exports = mongoose.models[name] || mongoose.model(name, schema);