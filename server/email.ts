import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";

// Load env for email creds even if main server config runs later
const envPath = path.join(process.cwd(), ".env.local");
dotenv.config({ path: envPath });

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp?: Date;
}

function createTransporter() {
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;

  console.log("📧 Email Config Debug:");
  console.log("  - EMAIL_USER:", emailUser ? "✓ loaded" : "✗ MISSING");
  console.log("  - EMAIL_PASSWORD:", emailPassword ? "✓ loaded (" + emailPassword.length + " chars)" : "✗ MISSING");

  if (!emailUser || !emailPassword) {
    console.error("❌ Missing email credentials! Check .env.local file.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // TLS
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });
}

export async function sendContactFormEmail(data: ContactFormData): Promise<boolean> {
  try {
    const transporter = createTransporter();
    
    // Email to yourself
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || "archisgokhale001@gmail.com",
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Submitted:</strong> ${data.timestamp ? new Date(data.timestamp).toLocaleString() : new Date().toLocaleString()}</p>
          </div>

          <h3 style="color: #333; margin-top: 30px;">Message:</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${data.message}</p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            <strong>Reply to:</strong> <a href="mailto:${data.email}">${data.email}</a>
          </p>
        </div>
      `,
      replyTo: data.email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return false;
  }
}

export async function verifyEmailConfig(): Promise<boolean> {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log("✅ Email configuration verified successfully");
    return true;
  } catch (error) {
    console.error("❌ Email configuration error:", error);
    return false;
  }
}
