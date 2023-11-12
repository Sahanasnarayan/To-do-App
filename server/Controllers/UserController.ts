// usercontroller.ts
import { Request, Response } from 'express';
const User = require("../Models/UserModels");
const session = require('session');

// User Registration
export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, username, password } = req.body;

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(409).json({ message: `User already registered` });
        }

        const user = await User.create({
            name: name,
            username: username,
            password: password
        });

        return res.status(200).json({ user });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

// User Login
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        if (!username || !password)
            return res.status(401).json({ message: `Please enter username and password` });

        const user = await User.findOne({ username });

        if (!user || user.password !== password)
            return res.status(401).json({ message: `Invalid username or password` });

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: `Something went wrong`, error });
    }
};
