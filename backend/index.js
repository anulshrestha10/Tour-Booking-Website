import cookieParser from 'cookie-parser';
import cors from "cors";
import dotenv from 'dotenv';
import express from "express";
import mongoose from 'mongoose'; // Don't forget to import mongoose
import tourRoute from './routes/tours.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// MongoDB connection
mongoose.set('strictQuery', false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB database connected');
    } catch (err) {
        console.error('MongoDB database connection failed:', err);
    }
};

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/tours', tourRoute);

// Define a root route
app.get("/", (req, res) => {
    res.send("API is working");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
});

app.listen(port, () => {
    connect();
    console.log("Server listening on port", port);
});
