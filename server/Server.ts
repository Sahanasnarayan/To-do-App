import express, { Application, Request, Response } from 'express';
import { connectToDB } from './dbConnection'; 
const app: Application = express();
const PORT: number = 3000; 
app.use(express.json()); 
app.get('/', (req: Request, res: Response) => {   
  res.send('Hello, World!'); }); 



connectToDB()   
.then(() => {     
  app.listen(PORT, () => {       
    console.log(`Server is running on http://localhost:${PORT}`);    
 });   
})   
.catch((err) => {     
  console.error('Failed to connect to MongoDB:', err);   
});