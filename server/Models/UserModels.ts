import mongoose, { Schema, Document } from 'mongoose';

interface UserInterface extends Document {
  name: string;
  username: string;
  password: string;
}

const userSchema: Schema<UserInterface> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter your name'],
    },
    username: {
      type: String,
      required: [true, 'Please enter your email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter password'],
    },
  },
  { timestamps: true }
);

const User = mongoose.model<UserInterface>('User', userSchema);

export default User;
