import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  console.log('Received data:', { name, email, message });

  const emailService = process.env.EMAIL_SERVICE;
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;
  const recipient = process.env.RECIPIENT_EMAIL;

  if (!emailService || !emailUser || !emailPassword || !recipient) {
    console.error('Missing email configuration');
    return NextResponse.json({ error: "Email configuration is missing" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: emailService,
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });

  const mailOptions = {
    from: emailUser,
    to:  recipient,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<h2> ${name} </h2><p>${message}</p>`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error.message);
    console.error("Error details:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
