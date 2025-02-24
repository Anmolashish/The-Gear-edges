import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, company, address, email, description } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "anmolbatwal18@gmail.com", // Replace with your verified Resend email
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Description:</strong> ${description}</p>
      `,
    });

    return Response.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Failed to send email",
      error,
    });
  }
}
