import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, company, address, description } = req.body;

    if (!name || !company || !address || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "admin@yourdomain.com",
      subject: "New Contact Form Submission",
      text: `New contact form submission:
      
      Name: ${name}
      Company: ${company}
      Address: ${address}
      Description: ${description}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res
      .status(500)
      .json({ message: "Email failed to send", error: error.message });
  }
}
