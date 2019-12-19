import mongoose, { Schema, Document } from 'mongoose';
// @ts-ignore
import { isEmail } from 'validator';

export interface IUser extends Document{
  email: string,
  avatar: string,
  firstName: string,
  lastName: string,
  password: string,
  confirmed: boolean,
  confirm_hash: string,
  last_seen: Date,
}

const UserSchema = new Schema({
  email: {
    type: String,
    required: 'Email address is required',
    validate: [isEmail, "Invalid email"],
    unique: true
  },
  avatar: String,
  firstName: String,
  lastName: String,
  password: {
    type: String,
    required: 'Password is required'
  },
  confirmed: Boolean,
  confirm_hash: String,
  last_seen: Date,
}, {
  timestamps: true
});

const UserModel = mongoose.model<IUser>('User', UserSchema);

export default UserModel