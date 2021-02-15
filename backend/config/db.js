const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://kalta:Kalta@1a@cluster0.jglzh.mongodb.net/score?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error);
        process.exit(1);
        
    }
}

module.exports = connectDB;