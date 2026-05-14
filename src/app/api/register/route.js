import nodemailer from 'nodemailer';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

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
    <!-- top shine bar -->
    <div style="height:4px;background:linear-gradient(90deg,rgba(255,255,255,0.4),rgba(255,255,255,0.1),rgba(255,255,255,0.4));"></div>
    <div style="padding:36px 40px 32px;">
      <!-- logo row -->
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
      <!-- divider -->
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
            This is an automated email from the Ayaz Ahmad Academy registration system. Please do not reply to this email.<br>
            &copy; ${new Date().getFullYear()} Ayaz Ahmad Academy. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </div>`;

/* ── Admin email HTML ── */
const buildAdminHtml = (type, fields, cvDownloadLink, cvFileName) => {
  const isStudent   = type === 'student';
  const accent      = isStudent ? '#F5A623' : '#4a7cf7';
  const accentDark  = isStudent ? '#cc7a00' : '#1a3fa8';
  const typeLabel   = isStudent ? 'Student' : 'Teacher';
  const badgeBg     = isStudent ? 'rgba(245,166,35,0.12)' : 'rgba(74,124,247,0.12)';

  const fieldLabels = {
    fullName: 'Full Name', email: 'Email Address', phone: 'Phone Number',
    grade: 'Grade / Level', subjects: 'Subjects of Interest',
    subject: 'Subject Expertise', experience: 'Years of Experience',
    qualification: 'Highest Qualification', message: isStudent ? 'Additional Message' : 'Cover Note',
  };

  const rows = Object.entries(fields)
    .filter(([k]) => k !== 'type')
    .map(([k, v], i) => `
      <tr style="background:${i % 2 === 0 ? '#ffffff' : '#f8fafc'};">
        <td style="padding:12px 20px;font-size:13px;font-weight:700;color:#374151;border-bottom:1px solid #f1f5f9;width:40%;white-space:nowrap;">
          ${fieldLabels[k] || k}
        </td>
        <td style="padding:12px 20px;font-size:14px;color:#111827;border-bottom:1px solid #f1f5f9;">
          ${v}
        </td>
      </tr>`).join('');

  return `
  <!DOCTYPE html>
  <html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
  <body style="margin:0;padding:20px;background:#0a0e27;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
    <div style="max-width:620px;margin:0 auto;">
      ${emailHeader(accent, accentDark,
        `New ${typeLabel} Registration`,
        `A new ${typeLabel.toLowerCase()} has submitted a registration form on ${new Date().toLocaleDateString('en-PK', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}`
      )}

      <div style="background:#ffffff;padding:32px 40px;">

        <div style="margin-bottom:24px;">
          <span style="display:inline-block;background:${badgeBg};border:1px solid ${accent}40;border-radius:20px;padding:6px 16px;font-size:12px;font-weight:700;color:${accent};text-transform:uppercase;letter-spacing:1px;">
            ${typeLabel} Registration
          </span>
        </div>

        <div style="border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;margin-bottom:24px;">
          <div style="background:linear-gradient(135deg,${accent},${accentDark});padding:12px 20px;">
            <span style="font-size:13px;font-weight:700;color:#ffffff;text-transform:uppercase;letter-spacing:1px;">Submission Details</span>
          </div>
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            ${rows}
          </table>
        </div>

        ${cvDownloadLink ? `
        <!-- CV download button -->
        <div style="background:linear-gradient(135deg,rgba(74,124,247,0.06),rgba(43,76,159,0.04));border:1px solid rgba(74,124,247,0.2);border-radius:12px;padding:20px 24px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="vertical-align:middle;">
                <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#1e40af;">CV Uploaded</p>
                <p style="margin:0;font-size:13px;color:#6b7280;">${cvFileName}</p>
              </td>
              <td align="right" style="vertical-align:middle;">
                <a href="${cvDownloadLink}"
                   download
                   style="display:inline-block;background:linear-gradient(135deg,#4a7cf7,#1a3fa8);
                          color:#ffffff;text-decoration:none;padding:10px 22px;
                          border-radius:8px;font-size:13px;font-weight:700;
                          box-shadow:0 4px 14px rgba(74,124,247,0.4);">
                  Download CV
                </a>
              </td>
            </tr>
          </table>
        </div>` : ''}
      </div>

      ${emailFooter()}
    </div>
  </body></html>`;
};

/* ── User confirmation email HTML ── */
const buildUserHtml = (type, name) => {
  const isStudent  = type === 'student';
  const accent     = isStudent ? '#F5A623' : '#4a7cf7';
  const accentDark = isStudent ? '#cc7a00' : '#1a3fa8';
  const typeLabel  = isStudent ? 'Student' : 'Teacher';

  const steps = isStudent
    ? ['Application received & reviewed', 'Our team will contact you within 24 hours', 'Orientation & enrollment process begins']
    : ['Application received & reviewed', 'Interview scheduled within 48 hours', 'Onboarding process begins'];

  return `
  <!DOCTYPE html>
  <html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
  <body style="margin:0;padding:20px;background:#0a0e27;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
    <div style="max-width:620px;margin:0 auto;">
      ${emailHeader(accent, accentDark,
        `Thank You, ${name}! 🎉`,
        `Your ${typeLabel.toLowerCase()} registration has been successfully received.`
      )}

      <!-- Body -->
      <div style="background:#ffffff;padding:36px 40px;">

        <!-- Greeting -->
        <p style="margin:0 0 20px;font-size:16px;color:#111827;line-height:1.7;">
          Dear <strong style="color:${accent}">${name}</strong>,<br><br>
          Thank you for registering with <strong>Ayaz Ahmad Academy</strong>. We are thrilled to have you join our community of excellence!
        </p>

        <!-- Confirmation box -->
        <div style="background:linear-gradient(135deg,${accent}15,${accentDark}08);border:1px solid ${accent}30;border-radius:12px;padding:20px 24px;margin-bottom:28px;">
          <p style="margin:0;font-size:15px;font-weight:700;color:${accent};">✅ Registration Confirmed</p>
          <p style="margin:8px 0 0;font-size:14px;color:#374151;line-height:1.6;">
            We will reach out to you as soon as possible. Our team reviews all applications carefully and will contact you within <strong>24–48 hours</strong>.
          </p>
        </div>

        <!-- What's next -->
        <p style="margin:0 0 16px;font-size:15px;font-weight:700;color:#111827;">What happens next?</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
          ${steps.map((step, i) => `
          <tr>
            <td style="padding:10px 0;vertical-align:top;width:40px;">
              <div style="width:28px;height:28px;background:linear-gradient(135deg,${accent},${accentDark});border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#ffffff;text-align:center;line-height:28px;">
                ${i + 1}
              </div>
            </td>
            <td style="padding:10px 0 10px 12px;font-size:14px;color:#374151;vertical-align:middle;border-bottom:1px solid #f1f5f9;">
              ${step}
            </td>
          </tr>`).join('')}
        </table>

        <!-- Contact info -->
        <div style="background:#f8fafc;border-radius:10px;padding:20px 24px;margin-bottom:8px;">
          <p style="margin:0 0 12px;font-size:14px;font-weight:700;color:#111827;">Need help? Contact us:</p>
          <p style="margin:0;font-size:14px;color:#6b7280;line-height:1.8;">
            📧 <a href="mailto:${process.env.EMAIL_USER}" style="color:${accent};text-decoration:none;font-weight:600;">${process.env.EMAIL_USER}</a><br>
            🌐 Ayaz Ahmad Academy — Institute of O &amp; A Level
          </p>
        </div>

        <p style="margin:20px 0 0;font-size:14px;color:#9ca3af;line-height:1.6;">
          Warm regards,<br>
          <strong style="color:#111827;">The Ayaz Ahmad Academy Team</strong>
        </p>
      </div>

      ${emailFooter()}
    </div>
  </body></html>`;
};

export async function POST(request) {
  try {
    const formData = await request.formData();
    const type   = formData.get('type');

    /* ── Extract CV file properly ── */
    const cvEntry = formData.get('cv');
    const cvFile  = (cvEntry && typeof cvEntry === 'object' && cvEntry.size > 0) ? cvEntry : null;

    const fields = {};
    for (const [key, value] of formData.entries()) {
      if (key === 'cv') continue;
      if (typeof value === 'object') continue;
      fields[key] = value;
    }

    const typeLabel = type === 'student' ? 'Student' : 'Teacher';
    const userName  = fields.fullName || 'Applicant';
    const userEmail = fields.email;

    /* ── Save CV to disk & build download link ── */
    let cvDownloadLink = null;
    let cvFileName     = null;

    if (cvFile) {
      // ensure directory exists
      const cvDir = path.join(process.cwd(), 'public', 'cvs');
      if (!existsSync(cvDir)) await mkdir(cvDir, { recursive: true });

      // unique filename: timestamp_name_originalname
      const safeName    = (fields.fullName || 'teacher').replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
      const ext         = path.extname(cvFile.name) || '.pdf';
      cvFileName        = `${Date.now()}_${safeName}${ext}`;
      const savePath    = path.join(cvDir, cvFileName);

      const buffer = Buffer.from(await cvFile.arrayBuffer());
      await writeFile(savePath, buffer);

      // build public URL — use NEXT_PUBLIC_SITE_URL if set, else fallback
      const baseUrl    = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
      cvDownloadLink   = `${baseUrl}/cvs/${cvFileName}`;
    }

    /* ── Admin email ── */
    await transporter.sendMail({
      from:    `"Ayaz Ahmad Academy" <${process.env.EMAIL_USER}>`,
      to:      process.env.EMAIL_USER,
      replyTo: userEmail || process.env.EMAIL_USER,
      subject: `New ${typeLabel} Registration - ${userName}`,
      html:    buildAdminHtml(type, fields, cvDownloadLink, cvFileName),
      headers: {
        'X-Priority':      '3',
        'X-Mailer':        'Ayaz Ahmad Academy Mailer',
        'X-Entity-Ref-ID': `reg-${Date.now()}`,
      },
    });

    /* ── User confirmation email ── */
    if (userEmail) {
      await transporter.sendMail({
        from:    `"Ayaz Ahmad Academy" <${process.env.EMAIL_USER}>`,
        to:      userEmail,
        replyTo: process.env.EMAIL_USER,
        subject: `Registration Received - Ayaz Ahmad Academy`,
        html:    buildUserHtml(type, userName),
        headers: {
          'X-Priority':       '3',
          'X-Mailer':         'Ayaz Ahmad Academy Mailer',
          'X-Entity-Ref-ID':  `conf-${Date.now()}`,
          'List-Unsubscribe': `<mailto:${process.env.EMAIL_USER}?subject=unsubscribe>`,
        },
      });
    }

    return Response.json({ success: true });

  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
