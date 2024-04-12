import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Professional from "../models/professional";
import {sendEmail} from "../utils/email";
import crypto from "crypto"
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

    const token = crypto.randomBytes(32).toString("hex");
    const time = 24 * 60 * 60 * 1000;
    const currentTime = Date.now();
    const expiredTime = new Date(time + currentTime);
    const newProfessional = new Professional(req.body);

    newProfessional.verifiedEmailToken = token;
    newProfessional.verifiedEmailTokenExpire = expiredTime;

    await newProfessional.save();
    //verify Email

    const sendMailToProfessional: any = await sendEmail({
      email: email,
      subject: "Verify Your Email",
      message: `<p>Please Verify your email be aware that it will be expired in one day: click the link below to  Verify your email:</p>
  <a href="api/auth/verifyEmailClient/:${token}">Click Here ${token}</a>`,
    });
    if (sendMailToProfessional) {
      res.status(200).json({ Message: "An Email sent to your account please verify" })
    } else {
      res.status(400).json({ Message: "An Error occured sending Email  to your account " })

    }


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
          const payload = { id: professionalExist.id ,user_type_id:"professional" };
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
                Messege: "The professional Loged successfully",
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
    return res.status(404).json({ message: "The professional does not exist" });
  }
};

export const logoutProfessional = (req: Request, res: Response) => {

  return res.clearCookie('user_token').status(200).json({Message:"Logged out Successfully "})

}


export const forgotPasswordProfessional = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;

    const professionalExist = await Professional.findOne({ email });

    if (!professionalExist) {
      res
        .status(404)
        .json({ message: "there is no professional with the given email" });
    }
    if (professionalExist) {
      const resetToken = crypto.randomBytes(32).toString("hex");

      const tenMinutes = 10 * 60 * 1000;
      const currentTime = Date.now();
      const expiredTime = new Date(tenMinutes + currentTime);
      professionalExist.passwordResetToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");



      professionalExist.passwordResetTokenExpires = expiredTime;

      await professionalExist.save({ validateBeforeSave: false });

      const resetUrl = `${req.protocol}://${req.get('host')}api/auth/resetPasswordprofessional/${resetToken}`;

      const sendMailToprofessional: any = await sendEmail({
        email: email,
        subject: "Reset Your Password",
        message: `<p>You have requested to reset your password.Please be aware that it wil be expired in 10 minutes: click the link below to reset your password:</p>
        <a href="${resetUrl}">${resetUrl}</a>`
      });

      if (sendMailToprofessional) {
        res.status(200).json({ Message: "Generate Reset token successfully" });
      } else {
        res.status(400).json({ Message: "Faild to Generate Reset token " });
      }
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const resetPasswordProfessional = async (req: Request, res: Response) => {
  try {
    const token = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");
  


    const professionalExist = await Professional.findOne({ passwordResetToken: token, passwordResetTokenExpires: { $gt: Date.now() } });
   
    if (professionalExist) {
      if (req.body.password === req.body.confirmpassword) {

        professionalExist.password = req.body.password;
        professionalExist.passwordResetToken = undefined;
        professionalExist.passwordResetTokenExpires = undefined;
        professionalExist.save();

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
