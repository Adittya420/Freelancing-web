import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import testRoute from "./routes/test.route.js"
import authRoute from "./routes/auth.route.js";
import freelanceRouter from './routes/freelance.route.js';

const app = express();
dotenv.config();
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true 
}))
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
app.use("/api/auth", authRoute);
app.use("/api/freelance", freelanceRouter);

app.use("/api", testRoute);

try {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => {
        console.log("Issue in connection to MongoDB");
        console.log(err);
        process.exit(1);
    })

    app.listen(4000, (req, res) => {
        console.log("Server running on port 4000");
    })
} catch (error) {
    console.log(error);
}