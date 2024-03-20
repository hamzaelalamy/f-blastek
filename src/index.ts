//requiring necessary packages
import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import connectDB from "./config/databaseConfig";
import morgan from 'morgan';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
connectDB(process.env.DB_URL);

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(morgan('dev'))

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({message : "Testing"});
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});