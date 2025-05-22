"use server";

import nodemailer from "nodemailer";

// Define the expected structure of the form data
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  messageTitle: string;
  messageSubject: string;
}

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER, // Your Gmail address
    pass: process.env.MAIL_PASSWORD, // Your Gmail App Password
  },
});

export async function sendContactEmail(formData: ContactFormData) {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    messageTitle,
    messageSubject,
  } = formData;

  const mailOptions = {
    from: `"${firstName} ${lastName}" <${process.env.MAIL_USER}>`, // Show sender's name
    to: "legacylinek9@gmail.com", // List of receivers
    subject: `New Inquiry: ${messageTitle} - Legacy K9 Contact Form`,
    html: `
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #d57149; color: #ffffff; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 20px;">
            <h2 style="color: #d57149; font-size: 20px; margin-top: 0;">Inquiry Details:</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; width: 150px;">Full Name:</td>
                <td style="padding: 10px 0;">${firstName} ${lastName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Email Address:</td>
                <td style="padding: 10px 0;">
                  <a href="mailto:${email}" style="color: #d57149; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Phone Number:</td>
                <td style="padding: 10px 0;">${phoneNumber}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Message Title:</td>
                <td style="padding: 10px 0;">${messageTitle}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 10px 0;">
                  <p style="margin: 0; white-space: pre-wrap;">${messageSubject}</p>
                </td>
              </tr>
            </table>
          </div>
          <div style="background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #777;">
            <p style="margin: 0;">This email was sent from the contact form on the Legacy K9 website.</p>
          </div>
        </div>
      </body>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return { success: true, message: "Thank you! Your message has been sent." };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again later.",
    };
  }
}
