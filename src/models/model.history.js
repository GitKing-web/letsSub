const { Schema, model } = require('mongoose');

const HistorySchema = new Schema(
    {
        user_history: {
            type: String,
        }
    }, { timestamps: true}
);

const History = model('History', HistorySchema);

module.exports = History;