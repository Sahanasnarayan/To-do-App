import { Request, Response } from 'express';
import User from '../Models/UserModels';
import bcrypt from 'bcrypt';
console.log("we are in usercontroller");

// TO SIGNUP
export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, emailId, password } = req.body;

        const existingUser = await User.findOne({ emailId });

        if (existingUser) {
            return res.status(409).json({ message: `User already registered` });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            emailId,
            password: hashedPassword,
        });

        return res.status(200).json({ user });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Something went wrong', error });
    }
};

// User Login
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { emailId, password } = req.body;

        if (!emailId || !password) {
            return res.status(401).json({ message: `Please enter emailId and password` });
        }

        const user = await User.findOne({ emailId });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: `Invalid emailId or password` });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: `Something went wrong`, error });
    }
};
