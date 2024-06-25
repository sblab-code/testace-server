const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const url = process.env.MONGODB_URL;

exports.connectDB = () => {
    mongoose.connect(url)
        .then(() => console.log("MongoDB is connected successfully"))
        .catch((error) => {
            console.log("MongoDB Connection failed");
            console.error(error);
            process.exit(1);
        });
}