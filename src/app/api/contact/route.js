import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  console.log('Received data:', { name, email, message });

  if (!process.env.EMAIL_SERVICE || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || !process.env.RECIPIENT_EMAIL) {
    console.error('Missing email configuration');
    return NextResponse.json({ error: "Email configuration is missing" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
