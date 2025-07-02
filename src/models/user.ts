import mongoose, { Document, Schema } from "mongoose";

// Define the TypeScript interface for the user document
export interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Create the user schema
const userSchema = new Schema<IUser>(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create and export the model
const userModel = mongoose.model<IUser>("User", userSchema);
export default userModel;
