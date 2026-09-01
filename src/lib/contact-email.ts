import { siteConfig } from "@/data/site";

const colors = {
  ivory: "#FBF6EE",
  champagne: "#E8D9C0",
  gold: "#F6C8A3",
  rose: "#B98D78",
  cocoa: "#4A382C",
  cocoaDeep: "#2E2119",
  taupe: "#A8927E",
  hairline: "#D8C9B8",
  pearl: "#FFFFFF",
} as const;

interface ContactEmailContent {
  name: string;
  email: string;
  topicLabel: string;
  message: string;
}

export function buildContactEmailText({
  name,
  email,
  topicLabel,
  message,
}: ContactEmailContent): string {
  return [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Topic: ${topicLabel}`,
    "",
    "Message:",
    message,
    "",
    `Reply directly to ${email} to respond.`,
  ].join("\n");
}

export function buildContactEmailHtml({
  name,
  email,
  topicLabel,
  message,
}: ContactEmailContent): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeTopic = escapeHtml(topicLabel);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New contact enquiry</title>
</head>
<body style="margin:0;padding:0;background-color:${colors.champagne};font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:${colors.champagne};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;background-color:${colors.ivory};border:1px solid ${colors.hairline};border-radius:2px;overflow:hidden;">
          <tr>
            <td style="background-color:${colors.cocoaDeep};padding:28px 32px;text-align:center;">
              <p style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:${colors.gold};">
                Oivah Feminine Atelier
              </p>
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:500;letter-spacing:0.06em;color:${colors.ivory};">
                New enquiry
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding:24px 0 20px;text-align:center;">
                    <div style="width:48px;height:1px;background-color:${colors.gold};margin:0 auto 16px;"></div>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${colors.rose};">
                      ${safeTopic}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid ${colors.hairline};border-radius:2px;background-color:${colors.pearl};">
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid ${colors.hairline};">
                    <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${colors.taupe};">Name</p>
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:16px;color:${colors.cocoa};">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid ${colors.hairline};">
                    <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${colors.taupe};">Email</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;">
                      <a href="mailto:${safeEmail}" style="color:${colors.rose};text-decoration:none;">${safeEmail}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid ${colors.hairline};">
                    <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${colors.taupe};">Topic</p>
                    <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:16px;color:${colors.cocoa};">${safeTopic}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px;background-color:${colors.ivory};">
                    <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${colors.taupe};">Message</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:${colors.cocoa};">${safeMessage}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 28px;text-align:center;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:${colors.taupe};">
                Reply to this email to respond directly to ${safeName}.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px;background-color:${colors.cocoaDeep};text-align:center;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${colors.champagne};">
                ${escapeHtml(siteConfig.email)} · ${escapeHtml(siteConfig.url.replace(/^https?:\/\//, ""))}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
