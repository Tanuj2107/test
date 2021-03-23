const mongoose = require("mongoose");
const URL = "mongodb+srv://Tanuj2107:Creatives@cluster0.rf81r.mongodb.net/sales_data?retryWrites=true&w=majority"

const connectDB = async() =>{
    await mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
    });
    console.log('DB Connected...');
}

module.exports = connectDB;
