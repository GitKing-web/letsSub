const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
}, { timestamps: true });

const History = mongoose.model("History", HistorySchema);

module.exports = History;
