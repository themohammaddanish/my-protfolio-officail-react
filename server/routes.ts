import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { contactFormSchema } from "../shared/schema";
import { buildContactConfirmationEmail, buildContactNotificationEmail } from "./emailTemplates";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  app.post("/api/contact", async (req, res) => {
    const parsed = contactFormSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        message: parsed.error.errors[0]?.message ?? "Invalid contact form data",
      });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = (process.env.SMTP_PASS ?? "").replace(/\s+/g, "");
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const fromAddress = process.env.MAIL_FROM || process.env.CONTACT_FROM_EMAIL || smtpUser;
    const toAddress = process.env.ADMIN_EMAIL || process.env.CONTACT_TO_EMAIL || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !fromAddress || !toAddress) {
      return res.status(500).json({
        message:
          "Email service is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      pool: true,
      maxConnections: 1,
      maxMessages: 20,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const { name, email, type, message } = parsed.data;
    const projectType = type || "Not specified";
    const notificationEmail = buildContactNotificationEmail({
      name,
      email,
      projectType,
      message,
    });
    const confirmationEmail = buildContactConfirmationEmail({
      name,
      email,
      projectType,
      message,
    });

    try {
      const [notificationResult, confirmationResult] = await Promise.allSettled([
        transporter.sendMail({
          from: `Portfolio Contact Form <${fromAddress}>`,
          to: toAddress,
          replyTo: email,
          subject: notificationEmail.subject,
          text: notificationEmail.text,
          html: notificationEmail.html,
          attachments: notificationEmail.attachments,
        }),
        transporter.sendMail({
          from: `Portfolio Contact Form <${fromAddress}>`,
          to: email,
          subject: confirmationEmail.subject,
          text: confirmationEmail.text,
          html: confirmationEmail.html,
          attachments: confirmationEmail.attachments,
        }),
      ]);

      if (notificationResult.status === "rejected") {
        throw notificationResult.reason;
      }

      if (confirmationResult.status === "rejected") {
        console.error("Contact confirmation email failed:", confirmationResult.reason);
      }

      return res.json({
        message: "Message sent successfully",
        messageId: notificationResult.value.messageId,
        confirmationSent: confirmationResult.status === "fulfilled",
      });
    } catch (error) {
      console.error("Contact form email failed:", error);
      return res.status(500).json({
        message:
          error instanceof Error ? error.message : "Failed to send contact email",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
