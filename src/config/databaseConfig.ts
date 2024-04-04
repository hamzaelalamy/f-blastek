import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async(url:any) => {
    try {
        await mongoose.connect(url, {
            autoIndex: true
        })
        console.log('Connected to Mongodb Atlas');} catch (error) {
        console.error(error);
    }
}

export default connectDB;