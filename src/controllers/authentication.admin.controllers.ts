import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Admin from "../models/admin";
import dotenv from "dotenv";
import crypto from "crypto";
import { sendEmail } from "../utils/email";
const maxage = 60 * 60 * 24 * 7 * 1000;
dotenv.config();
const secret_key: any = process.env.SECRET_KEY;


export const loginAdmin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const adminExist = await Admin.findOne({ email });

  if (adminExist) {
    bcrypt
      .compare(password, adminExist.password)
      .then((isMatch: boolean) => {
        if (isMatch) {
          const payload = { id: adminExist.id, user_type_id: "admin" };
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

              res.cookie("user_token", token, {
                httpOnly: true,
                maxAge: maxage,
              });
              res.status(200).json({
                Message: "The Admin Logged successfully",
                success: true,
                token: token,
              });
            }
          );
        } else {
          res.status(400).json({ Message: "Email or Password incorrect" });
        }
      })
      .catch((err) => {
        res.status(500).json({
          Message: "Error Comparing Password",
          Error: err,
        });
      });
  } else {
    return res.status(404).json({ message: "The Admin does not exist" });
  }
};

export const logoutAdmin = (req: Request, res: Response) => {
  return res
    .clearCookie("user_token")
    .status(200)
    .json({ Message: "Logged out Successfully " });
};

