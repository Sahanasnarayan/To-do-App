import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import List from '../Models/TaskModels';
import User from '../Models/UserModels';

// Add task to list
export const addTodoItem = async (req: Request, res: Response) => {
    try {
        const { task, userId } = req.body;

        if (!ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid User Id, Please enter a valid User Id' });
        }

        if (!task) {
            return res.status(500).json({ message: `Please enter the task` });
        }

        const existingUser = await User.findOne({ _id: userId });

        if (!existingUser) {
            return res.status(404).json({ message: 'User not found, Please enter a valid User Id' });
        }

        const newItem = await List.create({
            task,
            userId,
        });

        return res.status(201).json({ message: `List Item added Successfully`, newItem });
    } catch (error) {
        return res.status(500).json({ message: `Internal Server issue`, error });
    }
};

// Update task from the list
export const updateTodoItem = async (req: Request, res: Response) => {
    try {
        const listItem = req.params.id;
        const { task, isCompleted } = req.body;

        if (!ObjectId.isValid(listItem)) {
            return res.status(400).json({ message: 'Invalid Item Id, Please enter a valid Item Id' });
        }

        const list_Item = await List.findOne({ _id: listItem });

        if (!list_Item) {
            return res.status(404).json({ message: `List Item not found, Please enter valid Item Id` });
        }

        if (!task) {
            return res.status(500).json({ message: `Please enter the task` });
        }

        list_Item.task = task || list_Item.task;
        list_Item.isCompleted = isCompleted !== undefined ? isCompleted : list_Item.isCompleted;

        await list_Item.save();

        res.status(200).json({ message: 'List item updated successfully', listItem });
    } catch (error) {
        return res.status(500).json({ message: `Something went wrong`, error });
    }
};

// Delete the List Item
export const deleteTodoItem = async (req: Request, res: Response) => {
    try {
        const itemId = req.params.id;

        if (!ObjectId.isValid(itemId)) {
            return res.status(400).json({ message: `Invalid List Item Id` });
        }

        const deleteItem = await List.findOneAndDelete({ _id: itemId });

        if (!deleteItem) {
            return res.status(404).json({ message: `List Item not found` });
        }

        res.status(200).json({ message: `List Item Deleted Successfully` });
    } catch (error) {
        return res.status(500).json({ message: `Something went wrong`, error });
    }
};

// Read All List Items
export const getTodoItem = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;

        if (!ObjectId.isValid(userId)) {
            return res.status(400).json({ message: `Invalid User Id` });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: `User not found` });
        }

        const listItems = await List.find({ userId });

        res.status(200).json({ listItems });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: `An error occurred, Please try again`, error });
    }
};
