import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ── Shared header/footer HTML ── */
const emailHeader = (accentColor, accentDark, title, subtitle) => `
  <div style="background:linear-gradient(135deg,${accentColor} 0%,${accentDark} 100%);padding:0;border-radius:16px 16px 0 0;overflow:hidden;">
    <div style="height:4px;background:linear-gradient(90deg,rgba(255,255,255,0.4),rgba(255,255,255,0.1),rgba(255,255,255,0.4));"></div>
    <div style="padding:36px 40px 32px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        <tr>
          <td>
            <span style="font-size:20px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;">Ayaz Ahmad Academy</span><br>
            <span style="font-size:12px;color:rgba(255,255,255,0.75);font-weight:500;letter-spacing:1px;text-transform:uppercase;">Institute of O &amp; A Level</span>
          </td>
          <td align="right" style="vertical-align:top;">
            <span style="display:inline-block;background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.3);border-radius:20px;padding:5px 14px;font-size:11px;font-weight:700;color:#ffffff;letter-spacing:1px;text-transform:uppercase;">Cambridge Registered</span>
          </td>
        </tr>
      </table>
      <div style="height:1px;background:rgba(255,255,255,0.2);margin-bottom:24px;"></div>
      <h1 style="margin:0 0 8px;color:#ffffff;font-size:26px;font-weight:800;line-height:1.2;">${title}</h1>
      <p style="margin:0;color:rgba(255,255,255,0.8);font-size:14px;line-height:1.6;">${subtitle}</p>
    </div>
  </div>`;

const emailFooter = () => `
  <div style="background:#0f1629;padding:28px 40px;border-radius:0 0 16px 16px;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding-bottom:16px;">
          <span style="font-size:15px;font-weight:800;color:#ffffff;">Ayaz Ahmad Academy</span><br>
          <span style="font-size:12px;color:#6b7280;">Institute of O &amp; A Level · Cambridge Registered Centre</span>
        </td>
      </tr>
      <tr>
        <td style="border-top:1px solid rgba(255,255,255,0.08);padding-top:16px;">
          <p style="margin:0;font-size:12px;color:#4b5563;line-height:1.6;">
            This is an automated email from the Ayaz Ahmad Academy newsletter system.<br>
            &copy; ${new Date().getFullYear()} Ayaz Ahmad Academy. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </div>`;

/* ── Admin notification email ── */
const buildAdminHtml = (email, subscribedAt) => {
  const accent = '#F5A623';
  const accentDark = '#cc7a00';

  return `
  <!DOCTYPE html>
  <html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
  <body style="margin:0;padding:20px;background:#0a0e27;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
    <div style="max-width:620px;margin:0 auto;">
      ${emailHeader(accent, accentDark,
        'New Newsletter Subscription',
        `Someone just subscribed to your newsletter on ${subscribedAt}`
      )}

      <div style="background:#ffffff;padding:32px 40px;">
        <div style="margin-bottom:24px;">
          <span style="display:inline-block;background:rgba(245,166,35,0.12);border:1px solid rgba(245,166,35,0.3);border-radius:20px;padding:6px 16px;font-size:12px;font-weight:700;color:#F5A623;text-transform:uppercase;letter-spacing:1px;">
            Newsletter Subscription
          </span>
        </div>

        <div style="border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;margin-bottom:24px;">
          <div style="background:linear-gradient(135deg,#F5A623,#cc7a00);padding:12px 20px;">
            <span style="font-size:13px;font-weight:700;color:#ffffff;text-transform:uppercase;letter-spacing:1px;">Subscriber Details</span>
          </div>
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            <tr style="background:#ffffff;">
              <td style="padding:12px 20px;font-size:13px;font-weight:700;color:#374151;border-bottom:1px solid #f1f5f9;width:40%;">
                Email Address
              </td>
              <td style="padding:12px 20px;font-size:14px;color:#111827;border-bottom:1px solid #f1f5f9;">
                ${email}
              </td>
            </tr>
            <tr style="background:#f8fafc;">
              <td style="padding:12px 20px;font-size:13px;font-weight:700;color:#374151;border-bottom:1px solid #f1f5f9;">
                Subscribed At
              </td>
              <td style="padding:12px 20px;font-size:14px;color:#111827;border-bottom:1px solid #f1f5f9;">
                ${subscribedAt}
              </td>
            </tr>
          </table>
        </div>

        <div style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #86efac;border-radius:12px;padding:16px 20px;">
          <p style="margin:0;font-size:14px;color:#166534;line-height:1.6;">
            <strong>✅ Action Required:</strong> Add this email to your newsletter mailing list to keep them updated with news and events.
          </p>
        </div>
      </div>

      ${emailFooter()}
    </div>
  </body></html>`;
};

/* ── User confirmation email ── */
const buildUserHtml = (email) => {
  const accent = '#F5A623';
  const accentDark = '#cc7a00';

  return `
  <!DOCTYPE html>
  <html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
  <body style="margin:0;padding:20px;background:#0a0e27;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
    <div style="max-width:620px;margin:0 auto;">
      ${emailHeader(accent, accentDark,
        'Welcome to Our Newsletter! 🎉',
        'Thank you for subscribing to Ayaz Ahmad Academy updates'
      )}

      <div style="background:#ffffff;padding:36px 40px;">
        <p style="margin:0 0 20px;font-size:16px;color:#111827;line-height:1.7;">
          Dear Subscriber,<br><br>
          Thank you for subscribing to the <strong style="color:#F5A623;">Ayaz Ahmad Academy Newsletter</strong>! 
          We're excited to have you as part of our community.
        </p>

        <div style="background:linear-gradient(135deg,rgba(245,166,35,0.15),rgba(245,166,35,0.05));border:1px solid rgba(245,166,35,0.3);border-radius:12px;padding:20px 24px;margin-bottom:28px;">
          <p style="margin:0;font-size:15px;font-weight:700;color:#F5A623;">✅ Subscription Confirmed</p>
          <p style="margin:8px 0 0;font-size:14px;color:#374151;line-height:1.6;">
            You will now receive updates about our latest news, events, courses, and educational insights directly to your inbox at <strong>${email}</strong>.
          </p>
        </div>

        <p style="margin:0 0 16px;font-size:15px;font-weight:700;color:#111827;">What to expect:</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
          <tr>
            <td style="padding:10px 0;vertical-align:middle;width:50px;text-align:center;">
              <table cellpadding="0" cellspacing="0" style="width:36px;height:36px;background:linear-gradient(135deg,#F5A623,#cc7a00);border-radius:50%;margin:0 auto;">
                <tr>
                  <td style="text-align:center;vertical-align:middle;font-size:15px;font-weight:800;color:#ffffff;">
                    1
                  </td>
                </tr>
              </table>
            </td>
            <td style="padding:10px 0 10px 12px;font-size:14px;color:#374151;vertical-align:middle;border-bottom:1px solid #f1f5f9;">
              Latest course offerings and academic programs
            </td>
          </tr>
          <tr>
            <td style="padding:10px 0;vertical-align:middle;width:50px;text-align:center;">
              <table cellpadding="0" cellspacing="0" style="width:36px;height:36px;background:linear-gradient(135deg,#F5A623,#cc7a00);border-radius:50%;margin:0 auto;">
                <tr>
                  <td style="text-align:center;vertical-align:middle;font-size:15px;font-weight:800;color:#ffffff;">
                    2
                  </td>
                </tr>
              </table>
            </td>
            <td style="padding:10px 0 10px 12px;font-size:14px;color:#374151;vertical-align:middle;border-bottom:1px solid #f1f5f9;">
              Upcoming events, workshops, and seminars
            </td>
          </tr>
          <tr>
            <td style="padding:10px 0;vertical-align:middle;width:50px;text-align:center;">
              <table cellpadding="0" cellspacing="0" style="width:36px;height:36px;background:linear-gradient(135deg,#F5A623,#cc7a00);border-radius:50%;margin:0 auto;">
                <tr>
                  <td style="text-align:center;vertical-align:middle;font-size:15px;font-weight:800;color:#ffffff;">
                    3
                  </td>
                </tr>
              </table>
            </td>
            <td style="padding:10px 0 10px 12px;font-size:14px;color:#374151;vertical-align:middle;border-bottom:1px solid #f1f5f9;">
              Educational tips and study resources
            </td>
          </tr>
          <tr>
            <td style="padding:10px 0;vertical-align:middle;width:50px;text-align:center;">
              <table cellpadding="0" cellspacing="0" style="width:36px;height:36px;background:linear-gradient(135deg,#F5A623,#cc7a00);border-radius:50%;margin:0 auto;">
                <tr>
                  <td style="text-align:center;vertical-align:middle;font-size:15px;font-weight:800;color:#ffffff;">
                    4
                  </td>
                </tr>
              </table>
            </td>
            <td style="padding:10px 0 10px 12px;font-size:14px;color:#374151;vertical-align:middle;">
              Success stories and student achievements
            </td>
          </tr>
        </table>

        <div style="background:#f8fafc;border-radius:10px;padding:20px 24px;margin-bottom:8px;">
          <p style="margin:0 0 12px;font-size:14px;font-weight:700;color:#111827;">Stay Connected:</p>
          <p style="margin:0;font-size:14px;color:#6b7280;line-height:1.8;">
            📧 <a href="mailto:${process.env.EMAIL_USER}" style="color:#F5A623;text-decoration:none;font-weight:600;">${process.env.EMAIL_USER}</a><br>
            🌐 Visit our website for more information
          </p>
        </div>

        <p style="margin:20px 0 0;font-size:14px;color:#9ca3af;line-height:1.6;">
          Best regards,<br>
          <strong style="color:#111827;">The Ayaz Ahmad Academy Team</strong>
        </p>
      </div>

      ${emailFooter()}
    </div>
  </body></html>`;
};

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return Response.json({ success: false, error: 'Invalid email address' }, { status: 400 });
    }

    const subscribedAt = new Date().toLocaleString('en-PK', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    // Send admin notification
    await transporter.sendMail({
      from: `"Ayaz Ahmad Academy" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Newsletter Subscription - ${email}`,
      html: buildAdminHtml(email, subscribedAt),
      headers: {
        'X-Priority': '3',
        'X-Mailer': 'Ayaz Ahmad Academy Mailer',
        'X-Entity-Ref-ID': `newsletter-${Date.now()}`,
      },
    });

    // Send user confirmation
    await transporter.sendMail({
      from: `"Ayaz Ahmad Academy" <${process.env.EMAIL_USER}>`,
      to: email,
      replyTo: process.env.EMAIL_USER,
      subject: 'Welcome to Ayaz Ahmad Academy Newsletter',
      html: buildUserHtml(email),
      headers: {
        'X-Priority': '3',
        'X-Mailer': 'Ayaz Ahmad Academy Mailer',
        'X-Entity-Ref-ID': `newsletter-conf-${Date.now()}`,
        'List-Unsubscribe': `<mailto:${process.env.EMAIL_USER}?subject=unsubscribe>`,
      },
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
