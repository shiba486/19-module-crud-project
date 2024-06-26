import  mongoose  from "mongoose";
import {MONGODB_PASSWORD , MONGODB_DBNAME} from "./../config/index.js"
// mongodb atlas path
const url = `mongodb+srv://${MONGODB_DBNAME}:${MONGODB_PASSWORD}@shiba.xz3yde1.mongodb.net/?retryWrites=true&w=majority&appName=shiba`;

//mongodb local path
// const url = "mongodb://localhost:27017/crud_db"

const connectDB = async function(){
    try {
       const connectionInstance = await mongoose.connect(url)
        console.log(`Mongodb connected DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("\n mongodb connection err", error)
        process.exit(1)
    }
}


export default connectDB;
