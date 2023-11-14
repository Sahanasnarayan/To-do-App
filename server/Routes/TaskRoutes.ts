
import express, { Router } from 'express';
const list = require('../Controllers/TaskController');
const router: Router = express.Router();

router.post('/addTodoItem', list.addTodoItem);
router.put('/updateTodoItem/:id', list.updateTodoItem);
router.delete('/deleteTodoItem/:id', list.deleteTodoItem);
router.get('/getTodoItem/:id', list.getTodoItem);

export = router;
// module.exports = router;