import React, { useState } from 'react';
import './todoInput.css'
import axios from 'axios';

export default function todoInput() {

    const [task, setTask] = useState('');

    // const handleAddTask = async() => {
    //     const data = {
    //         userId: userId,
    //         task: task
    //     }


    return (

        <div className="todoInputpage">

            <input placeholder="Enter your task" className="todoInput" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button className="addButton">Add Task</button>

        </div>

    )
    }
