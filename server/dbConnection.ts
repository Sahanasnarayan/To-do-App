import mongoose from 'mongoose';
// const DB_URI: string = 'mongodb://127.0.0.1:27017/todo';

const databaseUrl = 'mongodb://127.0.0.1:27017/todo';

mongoose.connect(databaseUrl, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(()=>{
    console.log("Successfully connected with MongoDB");
}).catch((error)=>{
    console.log(error);
});
 
// const dbOptions: ConnectionOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// };
 
// export const connectToDB = async (): Promise<void> => {
//   try {
//     await mongoose.connect(DB_URI);
//     console.log('Connected to MongoDB');
//   } catch (err) {
//     throw new Error(`Error connecting to MongoDB: ${err}`);
//   }
// };
