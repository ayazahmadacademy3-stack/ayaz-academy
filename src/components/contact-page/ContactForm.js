'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ContactForm.module.css';

const particles = [
  { left: 8,  top: 12, size: 5, color: '#F5A623', dur: '3.2s', delay: '0s'   },
  { left: 92, top: 8,  size: 4, color: '#4a7cf7', dur: '4.0s', delay: '0.7s' },
  { left: 15, top: 75, size: 6, color: '#F5A623', dur: '3.7s', delay: '1.4s' },
  { left: 85, top: 70, size: 4, color: '#4a7cf7', dur: '5.0s', delay: '0.3s' },
  { left: 50, top: 5,  size: 3, color: '#F5A623', dur: '4.4s', delay: '2.0s' },
  { left: 5,  top: 50, size: 5, color: '#4a7cf7', dur: '3.6s', delay: '1.1s' },
  { left: 70, top: 40, size: 3, color: '#F5A623', dur: '4.2s', delay: '2.5s' },
  { left: 35, top: 88, size: 5, color: '#4a7cf7', dur: '3.0s', delay: '0.5s' },
];

const contactInfo = [
  {
    id: 'address',
    title: 'Address',
    lines: ['Karachi, Sindh, Pakistan'],
    iconColor: 'orange',
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  },
  {
    id: 'phone',
    title: 'Phone',
    lines: ['+92 345 2260042'],
    iconColor: 'blue',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
  },
  {
    id: 'email',
    title: 'Email',
    lines: ['info@ayazahmadacademy.com'],
    iconColor: 'orange',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    id: 'hours',
    title: 'Operating Hours',
    lines: ['Mon - Fri: 9:00 AM - 5:00 PM', 'Saturday: 10:00 AM - 3:00 PM'],
    iconColor: 'blue',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errMsg, setErrMsg] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setErrMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section ref={sectionRef} className={styles.formSection}>
      {/* Background decorations */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />
      <div className={styles.gridOverlay} />
      <div className={styles.stripes} />

      <div className={styles.particlesWrapper}>
        {particles.map((p, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              animationDuration: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.wrapper}>

          {/* Contact Info */}
          <div className={`${styles.infoSection} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.sectionBadge}>
              <div className={styles.badgeDot} />
              <span className={styles.badgeText}>Reach Us</span>
            </div>

            <h2 className={styles.heading}>
              Contact <span className={styles.highlight}>Information</span>
            </h2>
            <div className={styles.divider} />

            <div className={styles.infoCards}>
              {contactInfo.map((item, index) => (
                <div
                  key={item.id}
                  className={`${styles.infoCard} ${isVisible ? styles.visible : ''}`}
                  style={{ transitionDelay: `${0.1 + index * 0.12}s` }}
                >
                  <div className={`${styles.iconBox} ${styles[item.iconColor]}`}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <h3>{item.title}</h3>
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`${styles.formWrapper} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.formCard}>
              <h2 className={styles.formHeading}>
                Send us a <span className={styles.highlight}>Message</span>
              </h2>
              <p className={styles.formDescription}>
                Fill out the form below and we&apos;ll get back to you within 24-48 hours.
              </p>

              {status === 'success' ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. Our team will get back to you within 24–48 hours.</p>
                  <button onClick={() => setStatus('idle')} className="btn-primary">
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  {[
                    { name: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Your full name' },
                    { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'your@email.com' },
                    { name: 'phone', label: 'Phone Number', type: 'tel', required: false, placeholder: '+92 XXX XXXXXXX', optional: true },
                  ].map((field, index) => (
                    <div
                      key={field.name}
                      className={`${styles.formGroup} ${isVisible ? styles.visible : ''}`}
                      style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <label>
                        {field.label}{' '}
                        {field.optional ? (
                          <span className={styles.optional}>(optional)</span>
                        ) : (
                          <span>*</span>
                        )}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}

                  <div
                    className={`${styles.formGroup} ${isVisible ? styles.visible : ''}`}
                    style={{ transitionDelay: '0.6s' }}
                  >
                    <label>
                      Message <span>*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Write your message here..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className={styles.errorMessage}>
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>{errMsg}</span>
                    </div>
                  )}

                  <div
                    className={`${styles.submitWrapper} ${isVisible ? styles.visible : ''}`}
                    style={{ transitionDelay: '0.7s' }}
                  >
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className={styles.submitButton}
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className={styles.spinner} fill="none" viewBox="0 0 24 24">
                            <circle className={styles.spinnerCircle} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className={styles.spinnerPath} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span className={styles.submitButtonText}>Sending...</span>
                        </>
                      ) : (
                        <span className={styles.submitButtonText}>Send Message</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
