'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';
import styles from './RegisterForm.module.css';

/* ── field configs ── */
const studentFields = [
  { name: 'fullName',   label: 'Full Name',        type: 'text',   placeholder: 'e.g. Ali Hassan',          icon: 'user'    },
  { name: 'email',      label: 'Email Address',     type: 'email',  placeholder: 'ali@example.com',          icon: 'email'   },
  { name: 'phone',      label: 'Phone Number',      type: 'tel',    placeholder: '+92 300 0000000',          icon: 'phone'   },
  { name: 'grade',      label: 'Grade / Level',     type: 'select', placeholder: 'Select your level',        icon: 'grade',
    options: ['O Level', 'A Level', 'Both O & A Level'] },
  { name: 'subjects',   label: 'Subjects of Interest', type: 'text', placeholder: 'e.g. Physics, Math',     icon: 'book'    },
  { name: 'message',    label: 'Additional Message', type: 'textarea', placeholder: 'Anything you want us to know…', icon: 'msg' },
];

const teacherFields = [
  { name: 'fullName',      label: 'Full Name',              type: 'text',     placeholder: 'e.g. Dr. Sara Khan',        icon: 'user'    },
  { name: 'email',         label: 'Email Address',          type: 'email',    placeholder: 'sara@example.com',          icon: 'email'   },
  { name: 'phone',         label: 'Phone Number',           type: 'tel',      placeholder: '+92 300 0000000',           icon: 'phone'   },
  { name: 'subject',       label: 'Subject Expertise',      type: 'text',     placeholder: 'e.g. Mathematics, Physics', icon: 'book'    },
  { name: 'experience',    label: 'Years of Experience',    type: 'select',   placeholder: 'Select experience',         icon: 'grade',
    options: ['Less than 1 year', '1–3 years', '3–5 years', '5–10 years', '10+ years'] },
  { name: 'qualification', label: 'Highest Qualification',  type: 'text',     placeholder: 'e.g. M.Sc Physics',         icon: 'degree'  },
  { name: 'cv',            label: 'Upload CV',              type: 'file',     placeholder: '',                          icon: 'cv', optional: true },
  { name: 'message',       label: 'Cover Note',             type: 'textarea', placeholder: 'Tell us about yourself…',   icon: 'msg'     },
];

/* ── SVG icons ── */
const Icon = ({ name }) => {
  const icons = {
    user: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
    email: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    phone: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
    grade: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />,
    book: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
    msg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
    degree: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />,
    cv: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  };
  return (
    <svg className={styles.fieldIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  );
};

/* fixed particle positions */
const particles = [
  { left: 5,  top: 8,  size: 5, color: '#F5A623', dur: '3.2s', delay: '0s'   },
  { left: 93, top: 6,  size: 4, color: '#4a7cf7', dur: '4.0s', delay: '0.7s' },
  { left: 18, top: 82, size: 6, color: '#F5A623', dur: '3.7s', delay: '1.4s' },
  { left: 88, top: 78, size: 4, color: '#4a7cf7', dur: '5.0s', delay: '0.3s' },
  { left: 50, top: 3,  size: 3, color: '#F5A623', dur: '4.4s', delay: '2.0s' },
  { left: 3,  top: 55, size: 5, color: '#4a7cf7', dur: '3.6s', delay: '1.1s' },
  { left: 75, top: 35, size: 3, color: '#F5A623', dur: '4.2s', delay: '2.5s' },
  { left: 40, top: 92, size: 5, color: '#4a7cf7', dur: '3.0s', delay: '0.5s' },
  { left: 62, top: 60, size: 4, color: '#F5A623', dur: '4.8s', delay: '1.8s' },
  { left: 28, top: 45, size: 3, color: '#4a7cf7', dur: '3.4s', delay: '3.0s' },
];

export default function RegisterForm() {
  const [activeTab, setActiveTab] = useState('student'); // 'student' | 'teacher'
  const [flipState, setFlipState] = useState('idle');    // 'idle' | 'out' | 'in'
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [sendError, setSendError] = useState('');
  const [formData, setFormData]   = useState({});
  const [cvFile, setCvFile]       = useState(null);

  const fields = activeTab === 'student' ? studentFields : teacherFields;

  const switchTab = (tab) => {
    if (tab === activeTab || flipState !== 'idle') return;

    // Phase 1: flip out (0 → -90deg)
    setFlipState('out');

    setTimeout(() => {
      // Content switches at the halfway point (card is edge-on)
      setActiveTab(tab);
      setFormData({});
      setCvFile(null);
      setSubmitted(false);
      setSendError('');
      // Phase 2: flip in (90deg → 0)
      setFlipState('in');
    }, 280);

    setTimeout(() => {
      setFlipState('idle');
    }, 280 + 320);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendError('');

    const isStudent  = activeTab === 'student';
    const accent     = isStudent ? '#F5A623' : '#4a7cf7';
    const accentDark = isStudent ? '#cc7a00' : '#1a3fa8';

    /* ── Validation ── */
    const requiredFields = fields.filter(f => !f.optional && f.type !== 'file');
    const emptyFields    = requiredFields.filter(f => !formData[f.name] || !formData[f.name].toString().trim());

    if (emptyFields.length > 0) {
      const fieldList = emptyFields
        .map(f => `<li style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#d1d5db;font-size:14px;">
                     <span style="color:${accent};font-weight:700;">→</span> ${f.label}
                   </li>`)
        .join('');

      Swal.fire({
        title: '<span style="color:#ffffff;font-size:20px;font-weight:800;">Please Fill Required Fields</span>',
        html: `
          <div style="text-align:left;padding:4px 0;">
            <div style="width:60px;height:60px;border-radius:50%;
                        background:linear-gradient(135deg,#f59e0b,#d97706);
                        display:flex;align-items:center;justify-content:center;
                        margin:0 auto 20px;
                        box-shadow:0 8px 24px rgba(245,158,11,0.4);">
              <svg width="28" height="28" fill="none" stroke="white" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                  d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
              </svg>
            </div>
            <p style="margin:0 0 14px;color:#9ca3af;font-size:14px;text-align:center;">
              The following <strong style="color:#f59e0b;">${emptyFields.length}</strong> field${emptyFields.length > 1 ? 's are' : ' is'} required:
            </p>
            <ul style="margin:0;padding:0;list-style:none;background:rgba(255,255,255,0.04);border-radius:10px;padding:4px 16px;border:1px solid rgba(255,255,255,0.08);">
              ${fieldList}
            </ul>
          </div>`,
        background: 'linear-gradient(145deg,#1a1f3a,#0f1629)',
        color: '#ffffff',
        confirmButtonText: 'Got it',
        confirmButtonColor: '#f59e0b',
        customClass: {
          popup: 'swal-custom-popup',
          confirmButton: 'swal-custom-confirm-warn',
        },
        didOpen: () => {
          const style = document.createElement('style');
          style.textContent = `
            .swal-custom-popup {
              border: 1px solid rgba(245,158,11,0.2) !important;
              border-radius: 20px !important;
              box-shadow: 0 24px 64px rgba(0,0,0,0.6) !important;
              padding: 36px 32px !important;
            }
            .swal-custom-confirm-warn {
              border-radius: 10px !important;
              font-weight: 700 !important;
              padding: 12px 36px !important;
              font-size: 15px !important;
              box-shadow: 0 6px 20px rgba(245,158,11,0.4) !important;
            }
            .swal2-title { padding: 0 0 16px !important; }
          `;
          document.head.appendChild(style);
        },
      });
      return; // stop here
    }

    /* ── Loading popup ── */
    Swal.fire({
      title: '<span style="color:#ffffff;font-size:20px;font-weight:800;">Submitting Registration…</span>',
      html: `
        <div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px 0;">
          <div style="position:relative;width:64px;height:64px;">
            <div style="position:absolute;inset:0;border-radius:50%;border:3px solid rgba(255,255,255,0.1);"></div>
            <div style="position:absolute;inset:0;border-radius:50%;border:3px solid transparent;border-top-color:${accent};animation:swal-spin 0.8s linear infinite;"></div>
            <div style="position:absolute;inset:8px;border-radius:50%;background:linear-gradient(135deg,${accent},${accentDark});display:flex;align-items:center;justify-content:center;">
              <svg width="22" height="22" fill="none" stroke="white" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
          </div>
          <p style="margin:0;color:#9ca3af;font-size:14px;line-height:1.6;">
            Sending your details &amp; notifying our team…
          </p>
        </div>`,
      background: 'linear-gradient(145deg,#1a1f3a,#0f1629)',
      color: '#ffffff',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      customClass: { popup: 'swal-custom-popup' },
      didOpen: () => {
        const style = document.createElement('style');
        style.textContent = `
          @keyframes swal-spin { to { transform: rotate(360deg); } }
          .swal-custom-popup {
            border: 1px solid rgba(255,255,255,0.1) !important;
            border-radius: 20px !important;
            box-shadow: 0 24px 64px rgba(0,0,0,0.6) !important;
            padding: 36px 32px !important;
          }
          .swal2-title { padding: 0 0 16px !important; }
        `;
        document.head.appendChild(style);
      },
    });

    setSending(true);
    try {
      const data = new FormData();
      data.append('type', activeTab);
      // append all text fields except 'cv' (cv is handled separately as a File)
      Object.entries(formData).forEach(([k, v]) => {
        if (k !== 'cv') data.append(k, v);
      });
      if (cvFile) {
        data.append('cv', cvFile, cvFile.name);
      }

      const res  = await fetch('/api/register', { method: 'POST', body: data });
      const json = await res.json();

      if (json.success) {
        /* ── Success popup ── */
        await Swal.fire({
          title: `<span style="color:#ffffff;font-size:22px;font-weight:800;">Registration Submitted! 🎉</span>`,
          html: `
            <div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:4px 0;">
              <div style="width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,${accent},${accentDark});
                          display:flex;align-items:center;justify-content:center;
                          box-shadow:0 8px 28px ${isStudent ? 'rgba(245,166,35,0.45)' : 'rgba(74,124,247,0.45)'};
                          animation:swal-pop 0.5s cubic-bezier(0.22,1,0.36,1) both;">
                <svg width="36" height="36" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div style="text-align:center;">
                <p style="margin:0 0 8px;color:#d1d5db;font-size:15px;line-height:1.7;">
                  Thank you, <strong style="color:${accent}">${formData.fullName || 'there'}</strong>!<br>
                  Your registration has been received.
                </p>
                <div style="display:inline-block;background:${isStudent ? 'rgba(245,166,35,0.12)' : 'rgba(74,124,247,0.12)'};
                            border:1px solid ${isStudent ? 'rgba(245,166,35,0.3)' : 'rgba(74,124,247,0.3)'};
                            border-radius:20px;padding:6px 16px;font-size:13px;color:${accent};font-weight:600;">
                  📧 Confirmation email sent to you
                </div>
              </div>
              <p style="margin:0;color:#6b7280;font-size:13px;text-align:center;line-height:1.6;">
                We will reach out to you as soon as possible.<br>Our team typically responds within 24–48 hours.
              </p>
            </div>`,
          background: 'linear-gradient(145deg,#1a1f3a,#0f1629)',
          color: '#ffffff',
          confirmButtonText: 'Done',
          confirmButtonColor: accent,
          customClass: {
            popup: 'swal-custom-popup',
            confirmButton: 'swal-custom-confirm',
          },
          didOpen: () => {
            const style = document.createElement('style');
            style.textContent = `
              @keyframes swal-pop {
                from { transform: scale(0); opacity: 0; }
                to   { transform: scale(1); opacity: 1; }
              }
              .swal-custom-popup {
                border: 1px solid rgba(255,255,255,0.1) !important;
                border-radius: 20px !important;
                box-shadow: 0 24px 64px rgba(0,0,0,0.6) !important;
                padding: 36px 32px !important;
              }
              .swal-custom-confirm {
                border-radius: 10px !important;
                font-weight: 700 !important;
                padding: 12px 36px !important;
                font-size: 15px !important;
                box-shadow: 0 6px 20px ${isStudent ? 'rgba(245,166,35,0.4)' : 'rgba(74,124,247,0.4)'} !important;
              }
              .swal2-title { padding: 0 0 16px !important; }
            `;
            document.head.appendChild(style);
          },
        });
        setSubmitted(true);
      } else {
        throw new Error(json.error || 'Something went wrong');
      }
    } catch (err) {
      /* ── Error popup ── */
      Swal.fire({
        title: '<span style="color:#ffffff;font-size:20px;font-weight:800;">Submission Failed</span>',
        html: `
          <div style="text-align:center;padding:4px 0;">
            <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#ef4444,#b91c1c);
                        display:flex;align-items:center;justify-content:center;margin:0 auto 16px;
                        box-shadow:0 8px 24px rgba(239,68,68,0.4);">
              <svg width="32" height="32" fill="none" stroke="white" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </div>
            <p style="margin:0;color:#9ca3af;font-size:14px;line-height:1.7;">
              ${err.message || 'Network error. Please check your connection and try again.'}
            </p>
          </div>`,
        background: 'linear-gradient(145deg,#1a1f3a,#0f1629)',
        color: '#ffffff',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#ef4444',
        customClass: {
          popup: 'swal-custom-popup',
          confirmButton: 'swal-custom-confirm-error',
        },
        didOpen: () => {
          const style = document.createElement('style');
          style.textContent = `
            .swal-custom-popup {
              border: 1px solid rgba(239,68,68,0.2) !important;
              border-radius: 20px !important;
              box-shadow: 0 24px 64px rgba(0,0,0,0.6) !important;
              padding: 36px 32px !important;
            }
            .swal-custom-confirm-error {
              border-radius: 10px !important;
              font-weight: 700 !important;
              padding: 12px 36px !important;
              font-size: 15px !important;
            }
            .swal2-title { padding: 0 0 16px !important; }
          `;
          document.head.appendChild(style);
        },
      });
    } finally {
      setSending(false);
    }
  };

  const isStudent = activeTab === 'student';
  const accent     = isStudent ? '#F5A623' : '#4a7cf7';
  const accentDark = isStudent ? '#cc7a00' : '#1a3fa8';
  const accentA    = isStudent ? 'rgba(245,166,35,' : 'rgba(74,124,247,';

  return (
    <section className={styles.section}>

      {/* ── BG elements ── */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />
      <div className={styles.stripes} />
      <div className={styles.dotGrid} />
      <div className={styles.particlesWrapper}>
        {particles.map((p, i) => (
          <span key={i} className={styles.particle} style={{
            left: `${p.left}%`, top: `${p.top}%`,
            width: p.size, height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationDuration: p.dur, animationDelay: p.delay,
          }} />
        ))}
      </div>

      <div className={styles.container}>

        {/* ── Page header ── */}
        <div className={styles.pageHeader}>
          <div className={styles.pill}>
            <span className={styles.pillDot} />
            <span>Join Ayaz Ahmad Academy</span>
          </div>
          <h1 className={styles.pageTitle}>
            Register <span className={styles.highlight}>Now</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Take the first step towards academic excellence
          </p>
        </div>

        {/* ── Tab switcher ── */}
        <div className={styles.tabBar}>
          <button
            className={`${styles.tabBtn} ${activeTab === 'student' ? styles.tabActive : ''}`}
            onClick={() => switchTab('student')}
            style={activeTab === 'student' ? {
              background: 'linear-gradient(135deg, #F5A623, #cc7a00)',
              boxShadow: '0 4px 20px rgba(245,166,35,0.4)',
              color: '#fff',
            } : {}}
          >
            <svg className={styles.tabIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Student
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'teacher' ? styles.tabActive : ''}`}
            onClick={() => switchTab('teacher')}
            style={activeTab === 'teacher' ? {
              background: 'linear-gradient(135deg, #4a7cf7, #1a3fa8)',
              boxShadow: '0 4px 20px rgba(74,124,247,0.4)',
              color: '#fff',
            } : {}}
          >
            <svg className={styles.tabIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Teacher
          </button>
        </div>

        {/* ── Flip card wrapper ── */}
        <div className={styles.flipWrapper}>
          <div className={`${styles.flipCard} ${flipState === 'out' ? styles.flipOut : ''} ${flipState === 'in' ? styles.flipIn : ''}`}>

            {submitted ? (
              /* ── Success state ── */
              <div className={styles.successBox} style={{ borderColor: `${accentA}0.3)` }}>
                <div className={styles.successIcon}
                  style={{ background: `linear-gradient(135deg, ${accent}, ${accentDark})`,
                           boxShadow: `0 8px 28px ${accentA}0.45)` }}>
                  <svg fill="none" stroke="white" viewBox="0 0 24 24" style={{ width: 40, height: 40 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className={styles.successTitle} style={{ color: accent }}>
                  Registration Submitted!
                </h3>
                <p className={styles.successText}>
                  Thank you for registering as a <strong>{activeTab}</strong>. Our team will contact you within 24 hours.
                </p>
                <button className={styles.resetBtn}
                  style={{ background: `linear-gradient(135deg, ${accent}, ${accentDark})`,
                           boxShadow: `0 6px 20px ${accentA}0.4)` }}
                  onClick={() => { setSubmitted(false); setFormData({}); setCvFile(null); setSendError(''); }}>
                  Register Another
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <div className={styles.formCard}
                style={{ borderColor: `${accentA}0.15)` }}>

                {/* card top bar */}
                <div className={styles.formTopBar}
                  style={{ background: `linear-gradient(90deg, ${accent}, ${accentDark})` }} />

                {/* card header */}
                <div className={styles.formHeader}>
                  <div className={styles.formIconBox}
                    style={{ background: `linear-gradient(135deg, ${accent}, ${accentDark})`,
                             boxShadow: `0 8px 24px ${accentA}0.4)` }}>
                    {isStudent ? (
                      <svg fill="none" stroke="white" viewBox="0 0 24 24" style={{ width: 28, height: 28 }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    ) : (
                      <svg fill="none" stroke="white" viewBox="0 0 24 24" style={{ width: 28, height: 28 }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h2 className={styles.formTitle}>
                      {isStudent ? 'Student Registration' : 'Teacher Registration'}
                    </h2>
                    <p className={styles.formSubtitle}>
                      {isStudent
                        ? 'Fill in your details to enroll at Ayaz Ahmad Academy'
                        : 'Join our expert faculty team today'}
                    </p>
                  </div>
                </div>

                {/* fields */}
                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  <div className={styles.fieldsGrid}>
                    {fields.map((field) => (
                      <div
                        key={field.name}
                        className={`${styles.fieldGroup} ${field.type === 'textarea' || field.type === 'file' ? styles.fullWidth : ''}`}
                      >
                        <label className={styles.label}>
                          {field.label}
                          {field.optional && (
                            <span className={styles.optionalBadge}>Optional</span>
                          )}
                        </label>
                        <div className={styles.inputWrapper}>
                          <Icon name={field.icon} />
                          {field.type === 'file' ? (
                            <label className={styles.fileLabel} style={{ '--focus-color': accent }}>
                              <input
                                type="file"
                                name={field.name}
                                accept=".pdf,.doc,.docx"
                                className={styles.fileInput}
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  setCvFile(file || null);
                                  // do NOT store cv in formData state — cvFile state handles it
                                }}
                              />
                              <span className={styles.filePlaceholder}>
                                {cvFile ? (
                                  <span className={styles.fileName} style={{ color: accent }}>
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: 16, height: 16, display: 'inline', marginRight: 6 }}>
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {cvFile.name}
                                  </span>
                                ) : (
                                  <span style={{ color: '#4b5563' }}>
                                    Click to upload CV &nbsp;
                                    <span style={{ fontSize: 12, color: '#374151' }}>(PDF, DOC, DOCX)</span>
                                  </span>
                                )}
                              </span>
                              <span className={styles.fileBrowseBtn} style={{ background: `linear-gradient(135deg, ${accent}, ${accentDark})` }}>
                                Browse
                              </span>
                            </label>
                          ) : field.type === 'select' ? (
                            <select
                              name={field.name}
                              className={styles.input}
                              value={formData[field.name] || ''}
                              onChange={handleChange}
                              style={{ '--focus-color': accent }}
                            >
                              <option value="" disabled>{field.placeholder}</option>
                              {field.options.map(o => (
                                <option key={o} value={o}>{o}</option>
                              ))}
                            </select>
                          ) : field.type === 'textarea' ? (
                            <textarea
                              name={field.name}
                              placeholder={field.placeholder}
                              rows={3}
                              className={`${styles.input} ${styles.textarea}`}
                              value={formData[field.name] || ''}
                              onChange={handleChange}
                              style={{ '--focus-color': accent }}
                            />
                          ) : (
                            <input
                              type={field.type}
                              name={field.name}
                              placeholder={field.placeholder}
                              className={styles.input}
                              value={formData[field.name] || ''}
                              onChange={handleChange}
                              style={{ '--focus-color': accent }}
                            />
                          )}
                          <div className={styles.inputFocusLine}
                            style={{ background: `linear-gradient(90deg, ${accent}, ${accentDark})` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={sending}
                    style={{ background: `linear-gradient(135deg, ${accent}, ${accentDark})`,
                             boxShadow: `0 8px 28px ${accentA}0.4)`,
                             opacity: sending ? 0.75 : 1,
                             cursor: sending ? 'not-allowed' : 'pointer' }}>
                    <span className={styles.submitBtnText}>
                      {isStudent ? 'Submit Student Registration' : 'Submit Teacher Application'}
                    </span>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: 20, height: 20 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className={styles.submitBtnShine} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
