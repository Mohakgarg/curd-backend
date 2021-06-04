import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/user.route.js";

var app = express();

app.use(express.json());
app.use(cors())


app.use("/tutorials", userRoutes);
mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Database connected successfully");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("App listening at port 3000");
});
