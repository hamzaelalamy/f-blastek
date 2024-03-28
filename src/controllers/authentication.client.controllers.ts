import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Client from "../models/client";
import dotenv from "dotenv";
import crypto from "crypto";
import { sendEmail } from "../utils/email";
const maxage = 60 * 60 * 24 * 7 * 1000;
dotenv.config();
const secret_key: any = process.env.SECRET_KEY;

export const registerClient = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    console.log(email);

    const clientExist = await Client.findOne({ email });
    if (clientExist) {
      return res.status(400).json({ Message: "Client already exists" });
    }
    const newClient = new Client(req.body);

    await newClient.save();
    res.json({ message: "Client registered successfully" });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const loginClient = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const clientExist = await Client.findOne({ email });

  if (clientExist) {
    bcrypt
      .compare(password, clientExist.password)
      .then((isMatch: boolean) => {
        if (isMatch) {
          const payload = { id: clientExist.id, user_type_id: "client" };
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
                Message: "The client Logged successfully",
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
    return res.status(404).json({ message: "The client does not exist" });
  }
};

export const logoutClient = (req: Request, res: Response) => {
  return res
    .clearCookie("user_token")
    .status(200)
    .json({ Message: "Logged out Successfully " });
};

export const forgotPasswordClient = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;

    const clientExist = await Client.findOne({ email });

    if (!clientExist) {
      res
        .status(404)
        .json({ message: "there is no client with the given email" });
    }
    if (clientExist) {
      const resetToken = crypto.randomBytes(32).toString("hex");

      const tenMinutes = 10 * 60 * 1000;
      const currentTime = Date.now();
      const expiredTime = new Date(tenMinutes + currentTime);
      clientExist.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");



      clientExist.resetPasswordExpire = expiredTime;

      await clientExist.save({ validateBeforeSave: false });

      const resetUrl = `${req.protocol}://${req.get('host')}api/auth/resetPasswordClient/${resetToken}`;

      const sendMailToclient: any = await sendEmail({
        email: email,
        subject: "Reset Your Password",
        message: `<p>You have requested to reset your password.Please be aware that it wil be expired in 10 minutes: click the link below to reset your password:</p>
        <a href="${resetUrl}">${resetUrl}</a>`
      });

      if (sendMailToclient) {
        res.status(200).json({ Message: "Generate Reset token successfully" });
      } else {
        res.status(400).json({ Message: "Faild to Generate Reset token " });
      }
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const resetPasswordClient = async (req: Request, res: Response) => {
  try {
    const token = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");
  


    const clientExist = await Client.findOne({ resetPasswordToken: token, resetPasswordExpire: { $gt: Date.now() } });
  
    if (clientExist) {
      if (req.body.password === req.body.confirmpassword) {

        clientExist.password = req.body.password;
        clientExist.resetPasswordToken = undefined;
        clientExist.resetPasswordExpire = undefined;
        clientExist.save();

        res.status(200).json({message:"Password reset successfully"});
      } else {
        res.json({ Message: "Confirm pessword and password did not match" })

      }

    } else {
      res.status(400).json({ Message: "Token is invalid or has expired" })

    }
  } catch (err) {
    res.status(500).json({ Message: "internal server error" })
  }

};
