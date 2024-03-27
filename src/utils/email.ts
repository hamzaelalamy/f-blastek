import nodemailer,{TransportOptions } from "nodemailer";

import dotenv from 'dotenv';
dotenv.config();

interface EmailOptions extends TransportOptions {
    auth: {
        user: string;
        pass: string;
    };
}

export const sendEmail =async (option: any) => {

    const transporter = nodemailer.createTransport({

        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    } as EmailOptions)

    const emailOptions = {
        from: "elaroussi.fatima@arkx.academy",
        to: option.email,
        subject: option.subject,
        text:option.message,
    }
   await transporter.sendMail(emailOptions);
}

