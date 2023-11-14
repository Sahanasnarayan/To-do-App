import mongoose from 'mongoose';
// const DB_URI: string = 'mongodb://127.0.0.1:27017/todo';

const databaseUrl = 'mongodb://127.0.0.1:27017/todo';

mongoose.connect(databaseUrl, {
}).then(()=>{
    console.log("Successfully connected with MongoDB");
}).catch((error)=>{
    console.log(error);
});
 

