// const mongoose=require("mongoose")


// async function connectDB(){
//     try{
//         await mongoose.connect(process.env.MONGODB_URI)
//         console.log("Connect to DB")
//     }catch(err){
//         console.log(err)
//     }
// }

// module.exports=connectDB

const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000, // Increase timeout to 10 seconds
            socketTimeoutMS: 45000, // Optional: Increase socket timeout
            connectTimeoutMS: 10000, // Optional: Increase connection timeout
        });
        console.log('Connected to DB');
    } catch (err) {
        console.error('Failed to connect to DB', err);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectDB;
