// usercontroller.ts
import { Request, Response } from 'express';
import User from '../Models/UserModels';
import bcrypt from 'bcrypt';
// const session = require('session');
console.log("we are in usercontroller");
// User Registration

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, username, password } = req.body;

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(409).json({ message: `User already registered` });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            username,
            password: hashedPassword,
        });

        return res.status(200).json({ user });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Something went wrong', error});
    }
};

// User Login
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(401).json({ message: `Please enter username and password` });
        }

        const user = await User.findOne({ username });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: `Invalid username or password` });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: `Something went wrong`, error });
    }
};
