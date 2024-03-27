import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Professional from "../models/professional";
import dotenv from "dotenv";
const maxage = 60 * 60 * 24 * 7 * 1000;
dotenv.config();
const secret_key: any = process.env.SECRET_KEY;

export const registerProfessional = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    console.log(email)

    const professionalExist = await Professional.findOne({ email });
    if (professionalExist) {
      return res.status(400).json({ Message: "Professional already exists" });
    }
    const newProfessional = new Professional(req.body);

    await newProfessional.save();
    res.json({ message: "Professional registered successfully" });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const loginProfessional = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const professionalExist = await Professional.findOne({ email });

  if (professionalExist) {
    bcrypt
      .compare(password, professionalExist.password)
      .then((isMatch: boolean) => {
        if (isMatch) {
          const payload = { id: professionalExist.id ,userType:"professional" };
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
              res.json({
                Messege: "The client Loged successfully",
                success: true,
                token: token,
              });
            }
          );

          res.cookie('user_token', token, { httpOnly: true, maxAge: maxage });
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
    return res.status(404).json({ message: "The client does not exist" });
  }
};

export const logoutProfessional = (req: Request, res: Response) => {

  return res.clearCookie('user_token').status(200).json({Message:"Loged out Successfully "})

}