// Import the Nodemailer library to handle email sending.
import nodemailer from "nodemailer";
import "dotenv/config";

// Define an asynchronous function to send the email.
const sendMail = async () => {
  // 1. Create a transporter object using SMTP with Gmail as the email service provider.
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ak77721001@gmail.com",
      pass: process.env.EMAIL_APP_PASSWORD, // Securely use environment variable for sensitive data
    },
  });

  // 2. Define the email content, including the sender, recipient, subject, and body of the email.
  const mailOptions = {
    from: "ak77721001@gmail.com",
    to: "ak7772100@gmail.com", // Recipient's email address
    subject: "Test Email", // Subject line of the email
    text: "This is a test email using Nodemailer.", // Plain text body
  };

  // 3. Attempt to send the email and log the response or error.
  try {
    const response = await transport.sendMail(mailOptions);
    console.log("Email sent successfully!\n", response);
  } catch (error) {
    console.error("Failed to send email: ", error);
  }
};

// Call the function to send the email
sendMail();
