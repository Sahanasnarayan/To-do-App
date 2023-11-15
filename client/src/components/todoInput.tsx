import React, { useState } from 'react';
import './TodoInput.css'
import axios from 'axios';

interface TodoInputProps {
    userId: string | undefined; // Adjust the type based on your actual user ID type
  }

export default function TodoInput({ userId }: TodoInputProps) {

    // const handleAddTask = async() => {
    //     const data = {
    //         userId: userId,
    //         task: task
    //     }
      const [task, setTask] = useState<string>('');
      const handleAddTask = async () => {
        const data = {
          userId: userId,
          task: task,
        };
    
        try {
          if (!task) {
            alert('Please enter any task first');
            return;
          }
          await axios.post('http://127.0.0.1:3001/api/task/addTodoItem', data);
          setTask('');
        } catch (error) {
          alert('Something went wrong in adding task. Please check the console for more details.error: ${error.message}');
        }
        }

    return (

        <div className="todoInputpage">

            <input placeholder="Enter your task" className="todoInput" value={task} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}/>
            <button className="addButton" onClick={handleAddTask}>Add Task</button>
        </div>

    )
    }
