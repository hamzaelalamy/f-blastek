//requiring necessary packages
import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDB from "./config/databaseConfig";


import adminRoutes from './routes/admin.routes';
import clientRoutes from './routes/client.routes';
import ProfessionalRoutes from "./routes/professional.routes";
import authClientRoutes from "./routes/authentication.client.routes"
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
connectDB(process.env.DB_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Testing" });
});

app.use('/api', adminRoutes);
app.use('/api', authClientRoutes);
app.use('/api', clientRoutes);
app.use('/api', ProfessionalRoutes);
app.use('/api', authClientRoutes);
app.get('*', (req: Request, res: Response) => {
  res.status(404).json({message: 'Not Found'});
} )


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});