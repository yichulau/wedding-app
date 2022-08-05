import mongoose from "mongoose";
import { app } from './app';
import { mongoDBconfig } from "./configuration/mongodb-config";


const start = async () =>{
    if(!process.env.MONGO_URI){
        return "NO mongodb uri found"
    }
    try{

        await mongoose.connect(process.env.MONGO_URI);
        // check mongoose connection successful
        mongoose.connection.on('connected', ()=>{
            console.log("connection successfu;")
        });


    } catch (err){
        console.log(err);
    }
    app.listen(4000, () => {
        console.log('Listening on port 4000!!!!!!!!');
    });
}
start();