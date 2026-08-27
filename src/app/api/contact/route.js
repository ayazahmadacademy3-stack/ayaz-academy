import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtpout.secureserver.net',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false
  }
});

const FROM_ADDRESS = process.env.EMAIL_FROM || process.env.EMAIL_USER;

/* ── Header / Footer ── */
const emailHeader = (title, subtitle) => `
  <div style="background:linear-gradient(135deg,#0a0e27 0%,#1a1f3a 100%);padding:0;border-radius:16px 16px 0 0;overflow:hidden;">
    <div style="height:4px;background:linear-gradient(90deg,#F5A623,#ff8c00,#F5A623);"></div>
    <div style="padding:36px 40px 32px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        <tr>
          <td>
            <span style="font-size:20px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;">Ayaz Ahmad Academy</span><br>
            <span style="font-size:12px;color:rgba(255,255,255,0.75);font-weight:500;letter-spacing:1px;text-transform:uppercase;">Institute of O &amp; A Level</span>
          </td>
          <td align="right" style="vertical-align:top;">
            <span style="display:inline-block;background:rgba(245,166,35,0.2);border:1px solid rgba(245,166,35,0.4);border-radius:20px;padding:5px 14px;font-size:11px;font-weight:700;color:#F5A623;letter-spacing:1px;text-transform:uppercase;">Cambridge Registered</span>
          </td>
        </tr>
      </table>
      <div style="height:1px;background:rgba(255,255,255,0.15);margin-bottom:24px;"></div>
      <h1 style="margin:0 0 8px;color:#ffffff;font-size:26px;font-weight:800;line-height:1.2;">${title}</h1>
      <p style="margin:0;color:rgba(255,255,255,0.75);font-size:14px;line-height:1.6;">${subtitle}</p>
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
            This is an automated email from Ayaz Ahmad Academy.<br>
            &copy; ${new Date().getFullYear()} Ayaz Ahmad Academy. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </div>`;

/* ── Admin notification HTML ── */
const buildAdminHtml = (name, email, phone, message, sentAt) => `
  <!DOCTYPE html>
  <html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
  <body style="margin:0;padding:20px;background:#0a0e27;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
    <div style="max-width:620px;margin:0 auto;">
      ${emailHeader('New Contact Message 📬', `Received on ${sentAt}`)}
      <div style="background:#ffffff;padding:32px 40px;">
        <div style="margin-bottom:24px;">
          <span style="display:inline-block;background:rgba(245,166,35,0.12);border:1px solid rgba(245,166,35,0.3);border-radius:20px;padding:6px 16px;font-size:12px;font-weight:700;color:#F5A623;text-transform:uppercase;letter-spacing:1px;">
            Contact Form Submission
          </span>
        </div>
        <div style="border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;margin-bottom:24px;">
          <div style="background:linear-gradient(135deg,#F5A623,#cc7a00);padding:12px 20px;">
            <span style="font-size:13px;font-weight:700;color:#ffffff;text-transform:uppercase;letter-spacing:1px;">Sender Details</span>
          </div>
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            <tr style="background:#ffffff;">
              <td style="padding:12px 20px;font-size:13px;font-weight:700;color:#374151;border-bottom:1px solid #f1f5f9;width:35%;">Full Name</td>
              <td style="padding:12px 20px;font-size:14px;color:#111827;border-bottom:1px solid #f1f5f9;">${name}</td>
            </tr>
            <tr style="background:#f8fafc;">
              <td style="padding:12px 20px;font-size:13px;font-weight:700;color:#374151;border-bottom:1px solid #f1f5f9;">Email</td>
              <td style="padding:12px 20px;font-size:14px;border-bottom:1px solid #f1f5f9;">
                <a href="mailto:${email}" style="color:#F5A623;text-decoration:none;font-weight:600;">${email}</a>
              </td>
            </tr>
            <tr style="background:#ffffff;">
              <td style="padding:12px 20px;font-size:13px;font-weight:700;color:#374151;border-bottom:1px solid #f1f5f9;">Phone</td>
              <td style="padding:12px 20px;font-size:14px;color:#111827;border-bottom:1px solid #f1f5f9;">${phone || 'Not provided'}</td>
            </tr>
            <tr style="background:#f8fafc;">
              <td style="padding:12px 20px;font-size:13px;font-weight:700;color:#374151;vertical-align:top;">Message</td>
              <td style="padding:12px 20px;font-size:14px;color:#111827;line-height:1.7;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
        </div>
        <div style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #93c5fd;border-radius:12px;padding:16px 20px;">
          <p style="margin:0;font-size:14px;color:#1e40af;line-height:1.6;">
            <strong>💡 Tip:</strong> Reply directly to this email to respond to <strong>${name}</strong> at <strong>${email}</strong>.
          </p>
        </div>
      </div>
      ${emailFooter()}
    </div>
  </body></html>`;

/* ── User confirmation HTML ── */
const buildUserHtml = (name) => `
  <!DOCTYPE html>
  <html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
  <body style="margin:0;padding:20px;background:#0a0e27;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
    <div style="max-width:620px;margin:0 auto;">
      ${emailHeader(`Thank You, ${name}! ✅`, 'We have received your message and will get back to you soon.')}
      <div style="background:#ffffff;padding:36px 40px;">
        <p style="margin:0 0 20px;font-size:16px;color:#111827;line-height:1.7;">
          Dear <strong style="color:#F5A623;">${name}</strong>,<br><br>
          Thank you for contacting <strong>Ayaz Ahmad Academy</strong>. We have received your message and our team will get back to you within <strong>24–48 hours</strong>.
        </p>
        <div style="background:linear-gradient(135deg,rgba(245,166,35,0.12),rgba(245,166,35,0.05));border:1px solid rgba(245,166,35,0.3);border-radius:12px;padding:20px 24px;margin-bottom:28px;">
          <p style="margin:0;font-size:15px;font-weight:700;color:#F5A623;">✅ Message Received</p>
          <p style="margin:8px 0 0;font-size:14px;color:#374151;line-height:1.6;">
            We take every inquiry seriously. A member of our team will review your message and respond as soon as possible.
          </p>
        </div>
        <div style="background:#f8fafc;border-radius:10px;padding:20px 24px;">
          <p style="margin:0 0 10px;font-size:14px;font-weight:700;color:#111827;">Need immediate help?</p>
          <p style="margin:0;font-size:14px;color:#6b7280;line-height:1.8;">
            📧 <a href="mailto:info@ayazahmadacademy.com" style="color:#F5A623;text-decoration:none;font-weight:600;">info@ayazahmadacademy.com</a><br>
            🌐 Ayaz Ahmad Academy — Institute of O &amp; A Level
          </p>
        </div>
        <p style="margin:24px 0 0;font-size:14px;color:#9ca3af;line-height:1.6;">
          Warm regards,<br>
          <strong style="color:#111827;">The Ayaz Ahmad Academy Team</strong>
        </p>
      </div>
      ${emailFooter()}
    </div>
  </body></html>`;

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ success: false, error: 'Name, email, and message are required.' }, { status: 400 });
    }
    if (!email.includes('@')) {
      return Response.json({ success: false, error: 'Invalid email address.' }, { status: 400 });
    }

    const sentAt = new Date().toLocaleString('en-PK', {
      weekday: 'long', year: 'numeric', month: 'long',
      day: 'numeric', hour: '2-digit', minute: '2-digit',
    });

    // Verify transporter connection before sending (optional check)
    // Note: GoDaddy sometimes fails verification but emails still work
    try {
      await transporter.verify();
      console.log('✅ SMTP connection verified');
    } catch (verifyError) {
      // Silently ignore - emails will still send
      console.log('ℹ️  SMTP verification skipped (emails will still send)');
    }

    const emailPromises = [];

    /* ── Admin notification to info@ ── */
    const adminEmail = transporter.sendMail({
      from:    `"Ayaz Ahmad Academy" <${FROM_ADDRESS}>`,
      to:      FROM_ADDRESS,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html:    buildAdminHtml(name, email, phone, message, sentAt),
      headers: {
        'X-Priority': '3',
        'X-Mailer':   'Ayaz Ahmad Academy Mailer',
      },
    }).then(() => {
      console.log('✅ Admin notification sent');
      return { success: true, type: 'admin' };
    }).catch(err => {
      console.error('❌ Admin email error:', err.message);
      return { success: false, type: 'admin', error: err.message };
    });

    emailPromises.push(adminEmail);

    /* ── User confirmation to sender ── */
    const userEmail = transporter.sendMail({
      from:    `"Ayaz Ahmad Academy" <${FROM_ADDRESS}>`,
      to:      email,
      replyTo: FROM_ADDRESS,
      subject: 'We received your message — Ayaz Ahmad Academy',
      html:    buildUserHtml(name),
      headers: {
        'X-Priority': '3',
        'X-Mailer':   'Ayaz Ahmad Academy Mailer',
      },
    }).then(() => {
      console.log('✅ User confirmation sent');
      return { success: true, type: 'user' };
    }).catch(err => {
      console.error('❌ User email error:', err.message);
      return { success: false, type: 'user', error: err.message };
    });

    emailPromises.push(userEmail);

    // Wait for both emails
    const results = await Promise.allSettled(emailPromises);
    
    // Check results
    const adminResult = results[0].value || results[0].reason;
    const userResult = results[1].value || results[1].reason;

    // Consider success if at least admin email was sent
    const adminSuccess = results[0].status === 'fulfilled' && adminResult.success;
    const userSuccess = results[1].status === 'fulfilled' && userResult.success;

    if (adminSuccess && userSuccess) {
      console.log('✅ Both emails sent successfully');
      return Response.json({ success: true });
    } else if (adminSuccess || userSuccess) {
      console.log('⚠️  Partial success - at least one email sent');
      return Response.json({ success: true });
    } else {
      throw new Error('Both emails failed to send');
    }

  } catch (error) {
    console.error('❌ Contact form error:', error);
    return Response.json({ 
      success: false, 
      error: 'Failed to send email. Please try again or contact us directly.' 
    }, { status: 500 });
  }
}
