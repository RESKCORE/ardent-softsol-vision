import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // Ethereal uses STARTTLS on 587, so secure should be false
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function test() {
  try {
    const info = await transporter.verify();
    console.log("Success! Authenticated with:", process.env.SMTP_USER);
  } catch (error) {
    console.error("Error authenticating:", error);
  }
}

test();
