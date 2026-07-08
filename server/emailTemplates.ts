type ContactEmailData = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

type EmailRenderResult = {
  subject: string;
  text: string;
  html: string;
  attachments: Array<{
    filename: string;
    path: string;
    cid: string;
  }>;
};

const brandImageAttachment = {
  filename: "dan.png",
  path: process.cwd() + "/public/dan.png",
  cid: "portfolio-avatar",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function baseEmailShell(title: string, body: string) {
  return `
    <div style="margin:0;padding:0;background:#f4f7fb;">
      <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
        ${escapeHtml(title)}
      </div>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f4f7fb;padding:32px 12px;font-family:Arial,Helvetica,sans-serif;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:680px;background:#ffffff;border:1px solid rgba(0,0,0,0.06);box-shadow:0 20px 50px rgba(0,0,0,0.08);overflow:hidden;">
              <tr>
                <td style="background:#0b0b0f;padding:28px 32px 24px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td valign="middle" style="width:76px;">
                        <div style="width:64px;height:64px;border-radius:999px;background:#111827;border:2px solid rgba(255,255,255,0.16);overflow:hidden;">
                          <img src="cid:portfolio-avatar" alt="Danish Khan" width="64" height="64" style="display:block;width:64px;height:64px;object-fit:cover;" />
                        </div>
                      </td>
                      <td valign="middle" style="padding-left:16px;">
                        <div style="font-size:12px;letter-spacing:0.35em;text-transform:uppercase;font-weight:700;color:#7b8794;margin-bottom:10px;">
                          Portfolio Contact
                        </div>
                        <div style="font-size:30px;line-height:1;letter-spacing:-0.05em;text-transform:uppercase;font-weight:800;color:#ffffff;">
                          ${escapeHtml(title)}
                        </div>
                        <div style="margin-top:12px;width:72px;height:4px;background:#00B4D8;"></div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:32px 32px 36px; color:#111827; font-size:15px; line-height:1.7; background:linear-gradient(180deg,#ffffff 0%,#fbfdff 100%);">
                  ${body}
                </td>
              </tr>
              <tr>
                <td style="padding:18px 32px 28px; background:#f8fafc; border-top:1px solid rgba(0,0,0,0.06); color:#6b7280; font-size:12px; line-height:1.6;">
                  This email was generated from the contact form on the portfolio website.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;
}

export function buildContactNotificationEmail(data: ContactEmailData): EmailRenderResult {
  const body = `
    <div style="margin-bottom:24px;font-size:16px;color:#111827;max-width:560px;">
      You have received a new inquiry from the website contact form.
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;margin-bottom:24px;background:#ffffff;">
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid rgba(0,0,0,0.08);width:160px;font-size:12px;letter-spacing:0.25em;text-transform:uppercase;font-weight:700;color:#6b7280;">Name</td>
        <td style="padding:14px 0;border-bottom:1px solid rgba(0,0,0,0.08);font-size:15px;font-weight:700;color:#111827;">${escapeHtml(data.name)}</td>
      </tr>
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid rgba(0,0,0,0.08);width:160px;font-size:12px;letter-spacing:0.25em;text-transform:uppercase;font-weight:700;color:#6b7280;">Email</td>
        <td style="padding:14px 0;border-bottom:1px solid rgba(0,0,0,0.08);font-size:15px;font-weight:700;color:#00B4D8;">${escapeHtml(data.email)}</td>
      </tr>
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid rgba(0,0,0,0.08);width:160px;font-size:12px;letter-spacing:0.25em;text-transform:uppercase;font-weight:700;color:#6b7280;">Project Type</td>
        <td style="padding:14px 0;border-bottom:1px solid rgba(0,0,0,0.08);font-size:15px;font-weight:700;color:#111827;">${escapeHtml(data.projectType)}</td>
      </tr>
    </table>
    <div style="font-size:12px;letter-spacing:0.25em;text-transform:uppercase;font-weight:700;color:#6b7280;margin-bottom:10px;">Message</div>
    <div style="background:#f8fafc;border-left:4px solid #00B4D8;padding:20px 20px 20px 22px;white-space:pre-wrap;color:#111827;">${escapeHtml(data.message)}</div>
  `;

  return {
    subject: `New contact inquiry from ${data.name}`,
    text: [
      `New contact inquiry from ${data.name}`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Project Type: ${data.projectType}`,
      "",
      data.message,
    ].join("\n"),
    html: baseEmailShell("New contact inquiry", body),
    attachments: [brandImageAttachment],
  };
}

export function buildContactConfirmationEmail(data: ContactEmailData): EmailRenderResult {
  const body = `
    <div style="margin-bottom:24px;font-size:16px;color:#111827;max-width:560px;">
      Thanks for reaching out, ${escapeHtml(data.name)}. I’ve received your message and I’ll get back to you as soon as possible.
    </div>
    <div style="background:#f8fafc;border:1px solid rgba(0,0,0,0.06);padding:20px 22px;margin-bottom:24px;">
      <div style="font-size:12px;letter-spacing:0.25em;text-transform:uppercase;font-weight:700;color:#6b7280;margin-bottom:10px;">What you sent</div>
      <div style="margin-bottom:10px;"><strong style="color:#111827;">Project Type:</strong> ${escapeHtml(data.projectType)}</div>
      <div style="white-space:pre-wrap;color:#111827;">${escapeHtml(data.message)}</div>
    </div>
    <div style="font-size:14px;color:#6b7280;">
      If you need to add anything else, just reply to this email.
    </div>
  `;

  return {
    subject: `Thanks for contacting me, ${data.name}`,
    text: [
      `Thanks for reaching out, ${data.name}. I’ve received your message and I’ll get back to you as soon as possible.`,
      "",
      `Project Type: ${data.projectType}`,
      "",
      data.message,
      "",
      "If you need to add anything else, just reply to this email.",
    ].join("\n"),
    html: baseEmailShell("Thanks for reaching out", body),
    attachments: [brandImageAttachment],
  };
}