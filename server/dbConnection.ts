import mongoose from 'mongoose';
 
const DB_URI: string = 'mongodb://127.0.0.1:27017/todo';
 
// const dbOptions: ConnectionOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// };
 
export const connectToDB = async (): Promise<void> => {
  try {
    await mongoose.connect(DB_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    throw new Error(`Error connecting to MongoDB: ${err}`);
  }
};
