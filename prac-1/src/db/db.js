const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://Rishi:Rishi%401234@cluster0.ksttxm3.mongodb.net/notesapp", {
        
    }).then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log("Error connecting to MongoDB", err);
    })
}

module.exports = connectDB;
