import mongoose from "mongoose";


const User = mongoose.model('User', { title: String, description: String });

export default User;