const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try { 
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoDB connected");
    } catch(error) {
        console.error("connection failed:",error.message);
        
    }
};

module.exports = connectDB;