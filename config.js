import mongoose from "mongoose";

export const connect = async()=>{
    try{
    await mongoose.connect("mongodb://localhost:27017/to_do", {
        // Set the useNewUrlParser option to true to enable the new URL parser
        useNewUrlParser: true,
        // Set the useUnifiedTopology option to true to use the new server discovery and monitoring engine
        useUnifiedTopology: true
    });
    console.log("DB is connected")
}catch(err){
    console.log("Something wrong in database ",err)
}
}