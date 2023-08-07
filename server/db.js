const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://shahriarutsha:SHAFAQ@cluster0.hxdcowu.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = () => {
    mongoose.connect(mongoURI);

    const db = mongoose.connection;

    db.once("open", () => {
        console.log("Connected to Mongo Successfully");
    });
}

module.exports = connectToMongo;