import React, { useState, useEffect } from 'react';
import './TodoList.css';
import axios from 'axios';

interface TodoItem {
  _id: string;
  task: string;
  isCompleted: boolean;
}

interface TodoListProps {
  userId?: string;
}

export default function TodoList({ userId }: TodoListProps) {
  const [items, setItems] = useState<TodoItem[]>([]);
  const [completed, setCompleted] = useState<TodoItem[]>([]);
  const [inComplete, setInComplete] = useState<TodoItem[]>([]);
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const [editedTask, setEditedTask] = useState<string>('');
  const [editComplete, setEditComplete] = useState<boolean>(false);

  useEffect(() => {
    const fetchTodoItems = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3001/api/task/getTodoItem/${userId}`);
        const todoItems: TodoItem[] = response.data.listItems;

        setItems(todoItems);

        const complete = items.filter((item) => item.isCompleted);
        const incomplete = items.filter((item) => !item.isCompleted);

        setCompleted(complete);
        setInComplete(incomplete);
      } catch (error) {
        alert(`Error fetching data.error: ${error.message}`);

      }
    };

    if (userId) {
      fetchTodoItems();
    }
  }, [userId, items]);

  const handleDelete = async (ItemId: string) => {
    try {
      await axios.delete(`http://127.0.0.1:3001/api/task/deleteTodoItem/${ItemId}`);
    } catch (error) {
      alert(`Something went wrong. error: ${error.message}`);
    }
  };

  const handleUpdate = (itemId: string, task: string, completeness: boolean) => {
    setEditItemId(itemId);
    setEditedTask(task);
    setEditComplete(completeness);
  };

  const handleUpdateSave = async (itemId: string) => {
    try {
      await axios.put(`http://127.0.0.1:3001/api/task/updateTodoItem/${itemId}`, {
        task: editedTask,
        isCompleted: editComplete,
      });
      setEditItemId(null);
    } catch (error) {
      alert(`Something went wrong. error: ${error.message}`);
    }
  };

  const handleIncomplete = async (itemId: string, task: string, iscompleted: boolean) => {
    try {
      await axios.put(`http://127.0.0.1:3001/api/task/updateTodoItem/${itemId}`, {
        task: task,
        isCompleted: !iscompleted
      });
    } catch (error) {
      alert(`Something went wrong.error: ${error.message}`);
    }
  };

  return (
    <div className="list-item-page">
      <ul className="list">
        <button className="header">TODO ITEMS</button>
        {inComplete.map((item) => (
          <li className="list-item" key={item._id}>
            {editItemId === item._id ? (
              <>
                <input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
                <div>
                  <button className="buttons" onClick={() => handleUpdateSave(item._id)}>
                    Save
                  </button>
                  <button className="buttons" onClick={() => setEditItemId(null)}>
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="item-description">{item.task}</span>
                <div>
                  <button className="buttons" onClick={() => handleIncomplete(item._id, item.task, item.isCompleted)}>
                    Done &#10003; 
                  </button>
                  <button className="buttons" onClick={() => handleUpdate(item._id, item.task, item.isCompleted)}>
                    Edit
                  </button>
                  <button className="buttons" onClick={() => handleDelete(item._id)}>
                    Remove
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      <ul className="list">
        <button className="header">COMPLETED</button>
        {completed.map((item) => (
          <li className="list-item" key={item._id}>
            <span className="item-description">{item.task}</span>
            <div>
              <button className="buttons" onClick={() => handleIncomplete(item._id, item.task, item.isCompleted)}>
                Incomplete &#10008;
              </button>
              <button className="buttons" onClick={() => handleDelete(item._id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
