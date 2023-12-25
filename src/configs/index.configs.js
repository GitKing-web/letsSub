const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

const connectDB = async () => {
    await mongoose.connect( process.env.NODE_DEV === 'development' ? process.env.MONGO_URI_LOCAL : process.env.MONGO_URI_PUBLIC )
}

module.exports = connectDB;