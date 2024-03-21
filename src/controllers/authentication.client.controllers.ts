import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Client from "../models/client";
import dotenv from "dotenv";
dotenv.config();
const secret_key: any = process.env.SECRET_KEY;

export const RegisterClient = async (req: Request, res: Response) => {
  try {
    const { email } = req.body.email;

    const ClientExist = await Client.findOne({ email });
    if (ClientExist) {
      res.status(400).json({ err: "Client already exists" });
    }
    const NewClient = new Client(req.body);

    await NewClient.save();
    res.json({ message: "Client registered successfully" });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const LoginClient = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const secretKey = process.env.SECRET_KEY;
  const ClientExist = await Client.findOne({ email });

  if (ClientExist) {
    bcrypt
      .compare(password, ClientExist.password)
      .then((isMatch: boolean) => {
        if (isMatch) {
          const payload = { id: ClientExist.id, email: ClientExist.email };
          const token = jwt.sign(
            payload,
            secret_key,
            { expiresIn: "7d" },
            (err, token) => {
              if (err) {
                return res
                  .status(500)
                  .json({ Message: "Faild to generate token", Error: err });
              }
              res.json({ success: true, token: token });
            }
          );
        } else {
          res.status(400).json({ Message: "Email or Password incorrect" });
        }
      })
      .catch((err) => {
        res.status(500).json({
          Message: "Error Comparing Password",
        });
      });
  } else {
    return res.status(404).json({ message: "The client does not exist" });
  }
};
