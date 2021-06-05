import mongoose from "mongoose";


const User = mongoose.model('User', { name: String, age: Number });

export default User;