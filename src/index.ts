//requiring necessary packages
import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/databaseConfig";
import cookieParser from "cookie-parser";
import cors from "cors";
import { options } from "./swagger/options";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// import { app, server } from "./socket/socket";

import adminRoutes from "./routes/admin.routes";
import clientRoutes from "./routes/client.routes";
import professionalRoutes from "./routes/professional.routes";
import authClientRoutes from "./routes/authentication.client.routes";
import reviewsRoutes from "./routes/reviews.routes";
import servicesRoutes from "./routes/service.routes";
import authProfessionalRoutes from "./routes/authentication.professional.ts.routes";
import authAdminRoutes from "./routes/authentication.admin.routes";
import paymentRoutes from "./routes/payment.routes";
import InterventionRoutes from "./routes/intervention.routes";
import categoryRoutes from "./routes/categories.routes";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
connectDB(process.env.DB_URL);

const swaggerDocs = swaggerJsdoc(options);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Testing" });
});

app.use("/api", adminRoutes);
app.use("/api", authClientRoutes);
app.use("/api", clientRoutes);
app.use("/api", professionalRoutes);
app.use("/api", reviewsRoutes);
app.use("/api", servicesRoutes);
app.use("/api", authProfessionalRoutes);
app.use("/api", authAdminRoutes);
app.use("/api", InterventionRoutes);
app.use("/api", paymentRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api", categoryRoutes);

app.get("*", (req: Request, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
