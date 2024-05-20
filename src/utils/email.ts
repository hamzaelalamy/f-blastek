import nodemailer, { TransportOptions } from "nodemailer";

import dotenv from "dotenv";
dotenv.config();

interface EmailOptions extends TransportOptions {
  service: string;
  port: number;
  auth: {
    user: string;
    pass: string;
  };
}

export const sendEmail = async (option: any) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "elaroussifatima7@gmail.com",
        pass: "xqqu hvfu ensb aqda",
      },
    } as EmailOptions);

    const emailOptions = {
      from: "elaroussifatima7@gmail.com",
      to: option.email,
      subject: option.subject,
      html: option.message,
    };
    const emailSended = await transporter.sendMail(emailOptions);
    if (emailSended) {
      return { success: true, message: "Email sent successfully" };
    } else {
      return { success: false, message: "Faild to sent Email" };
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Internal server error related to send email",
    };
  }
};
