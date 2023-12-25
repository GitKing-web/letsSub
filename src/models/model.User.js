
const { Schema, model } = require('mongoose')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        acct_number: {
            type: Number,
            required: true
        },
        acct_bal: {
            type: Number,
        },
        amount: {
            type: Number
        }
    },
    { timestamps: true}
)

const User = model('User', UserSchema);

module.exports = User;