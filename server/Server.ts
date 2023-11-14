// import express, { Application, Request, Response } from 'express';
import express, { Application, Request, Response } from 'express';
const database = require("./dbConnection")
const app: Application = express();
const PORT: number = 3000; 
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Start the server
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));

const userRoutes = require('./Routes/UserRoutes');
app.use('/api/user', userRoutes);

const taskRoutes = require('./Routes/TaskRoutes');
app.use('/api/task', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
