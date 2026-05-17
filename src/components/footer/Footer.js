'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import './footer.module.css'

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [particles, setParticles] = useState([]);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Generate random particles for background
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !email.trim()) {
      Swal.fire({
        title: '<span style="color:#ffffff;font-size:20px;font-weight:800;">Email Required</span>',
        html: `
          <div style="text-align:center;padding:4px 0;">
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
            <p style="margin:0;color:#9ca3af;font-size:14px;">
              Please enter your email address to subscribe to our newsletter.
            </p>
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
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: '<span style="color:#ffffff;font-size:20px;font-weight:800;">Invalid Email</span>',
        html: `
          <div style="text-align:center;padding:4px 0;">
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
            <p style="margin:0;color:#9ca3af;font-size:14px;">
              Please enter a valid email address (e.g., example@email.com).
            </p>
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
      return;
    }

    // Show processing popup
    Swal.fire({
      title: '<span style="color:#ffffff;font-size:20px;font-weight:800;">Processing Subscription…</span>',
      html: `
        <div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px 0;">
          <div style="position:relative;width:64px;height:64px;">
            <div style="position:absolute;inset:0;border-radius:50%;border:3px solid rgba(255,255,255,0.1);"></div>
            <div style="position:absolute;inset:0;border-radius:50%;border:3px solid transparent;border-top-color:#F5A623;animation:swal-spin 0.8s linear infinite;"></div>
            <div style="position:absolute;inset:8px;border-radius:50%;background:linear-gradient(135deg,#F5A623,#cc7a00);display:flex;align-items:center;justify-content:center;">
              <svg width="22" height="22" fill="none" stroke="white" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
          </div>
          <p style="margin:0;color:#9ca3af;font-size:14px;line-height:1.6;">
            Subscribing you to our newsletter…
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

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (data.success) {
        // Success popup
        await Swal.fire({
          title: '<span style="color:#ffffff;font-size:22px;font-weight:800;">Successfully Subscribed! 🎉</span>',
          html: `
            <div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:4px 0;">
              <div style="width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,#F5A623,#cc7a00);
                          display:flex;align-items:center;justify-content:center;
                          box-shadow:0 8px 28px rgba(245,166,35,0.45);
                          animation:swal-pop 0.5s cubic-bezier(0.22,1,0.36,1) both;">
                <svg width="36" height="36" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div style="text-align:center;">
                <p style="margin:0 0 8px;color:#d1d5db;font-size:15px;line-height:1.7;">
                  Thank you for subscribing to our newsletter!<br>
                  You will now stay updated with all our latest news and events.
                </p>
                <div style="display:inline-block;background:rgba(245,166,35,0.12);
                            border:1px solid rgba(245,166,35,0.3);
                            border-radius:20px;padding:6px 16px;font-size:13px;color:#F5A623;font-weight:600;">
                  📧 Confirmation email sent to <strong>${email}</strong>
                </div>
              </div>
              <p style="margin:0;color:#6b7280;font-size:13px;text-align:center;line-height:1.6;">
                Check your inbox for a welcome message from us.<br>
                We'll keep you informed about courses, events, and educational insights.
              </p>
            </div>`,
          background: 'linear-gradient(145deg,#1a1f3a,#0f1629)',
          color: '#ffffff',
          confirmButtonText: 'Done',
          confirmButtonColor: '#F5A623',
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
                box-shadow: 0 6px 20px rgba(245,166,35,0.4) !important;
              }
              .swal2-title { padding: 0 0 16px !important; }
            `;
            document.head.appendChild(style);
          },
        });
        
        // Clear the email input
        setEmail('');
      } else {
        throw new Error(data.error || 'Subscription failed');
      }
    } catch (error) {
      // Error popup
      Swal.fire({
        title: '<span style="color:#ffffff;font-size:20px;font-weight:800;">Subscription Failed</span>',
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
              ${error.message || 'Network error. Please check your connection and try again.'}
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
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: '#',
    },
    { 
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: '#',
    },
    { 
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      url: '#',
    },
    { 
      name: 'YouTube',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      url: '#',
    },
    { 
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: '#',
    },
  ];

  const stats = [
    { number: '15+', label: 'Years Experience', icon: '🏆' },
    { number: '500+', label: 'Students', icon: '👨‍🎓' },
    { number: '95%', label: 'Success Rate', icon: '📈' },
    { number: '20+', label: 'Expert Teachers', icon: '👩‍🏫' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      {/* Animated Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-[#F5A623] opacity-20 animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
        
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/5 via-transparent to-[#2B4C9F]/5"></div>
        
        {/* Animated Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#F5A623]/20 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-[#2B4C9F]/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#F5A623]/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Stats Section - Top Banner */}
        {/* <div className="py-12 border-b border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-[#F5A623] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#F5A623]/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/0 to-[#F5A623]/0 group-hover:from-[#F5A623]/10 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
                  
                  <div className="relative text-center">
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#ff8c00] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section - Takes more space */}
            <div className="lg:col-span-5">
              <div className="relative group">
                {/* Logo & Brand */}
                <div className="flex items-center space-x-5 mb-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#F5A623] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    {/* Academy Logo Image */}
                    <div className="relative w-24 h-24 rounded-3xl overflow-hidden transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500 shadow-2xl border-2 border-white/10">
                      <img 
                        src="/academy-logo.png" 
                        alt="Ayaz Ahmad Academy" 
                        className="w-full h-full object-contain bg-white p-3 footer-logo"
                      />
                      {/* Corner Accent */}
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#F5A623] rounded-full animate-pulse shadow-lg shadow-[#F5A623]/50"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-1">
                      Ayaz Ahmad
                    </h3>
                    <p className="text-[#F5A623] font-bold text-xl tracking-wide">Academy</p>
                  </div>
                </div>

                <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-md">
                  Institute of O & A Level - Empowering students with world-class education and shaping tomorrow's leaders since 2010.
                </p>

                {/* Newsletter */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center pt-[70px]">
                    <span className="w-2 h-2 bg-[#F5A623] rounded-full mr-3 animate-pulse"></span>
                    Subscribe to Newsletter
                  </h4>
                  <form onSubmit={handleNewsletterSubmit} className="relative group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#F5A623] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-r from-[#F5A623] to-[#ff8c00] rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-[#F5A623]/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </form>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                    <span className="w-2 h-2 bg-[#F5A623] rounded-full mr-3 animate-pulse"></span>
                    Connect With Us
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        onMouseEnter={() => setHoveredLink(index)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className="group relative"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:border-[#F5A623] hover:shadow-lg hover:shadow-[#F5A623]/50 ${
                          hoveredLink === index ? 'bg-gradient-to-br from-[#F5A623] to-[#ff8c00]' : ''
                        }`}>
                          {social.icon}
                        </div>
                        {/* Tooltip */}
                        <div className={`absolute -top-10 left-1/2 -translate-x-1/2 bg-[#F5A623] text-white px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                          hoveredLink === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                        }`}>
                          {social.name}
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#F5A623] rotate-45"></div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Top 3 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
                  Quick Links
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F5A623] to-transparent rounded-full"></span>
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'About Us', href: '/pages/about' },
                    { name: 'Contact Us', href: '/pages/contact' },
                    { name: 'Courses', href: '/pages/courses' },
                    { name: 'Faculty', href: '/pages/faculty' }
                  ].map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="group flex items-center text-gray-300 hover:text-[#F5A623] transition-all duration-300"
                      >
                        <span className="w-0 group-hover:w-6 h-px bg-[#F5A623] transition-all duration-300 mr-0 group-hover:mr-3"></span>
                        <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Courses */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
                  Our Courses
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F5A623] to-transparent rounded-full"></span>
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: 'O Level', href: '/pages/courses' },
                    { name: 'A Level', href: '/pages/courses' },
                    { name: 'Mathematics', href: '/pages/courses' },
                    { name: 'Sciences', href: '/pages/courses' },
                    { name: 'Business', href: '/pages/courses' },
                    { name: 'Computer', href: '/pages/courses' }
                  ].map((course, index) => (
                    <li key={index}>
                      <Link
                        href={course.href}
                        className="group flex items-center text-gray-300 hover:text-[#F5A623] transition-all duration-300"
                      >
                        <span className="w-0 group-hover:w-6 h-px bg-[#F5A623] transition-all duration-300 mr-0 group-hover:mr-3"></span>
                        <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">{course.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
                  Contact Us
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F5A623] to-transparent rounded-full"></span>
                </h4>
                <ul className="space-y-4">
                  <li className="group">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F5A623]/20 to-[#F5A623]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-[#F5A623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Phone</p>
                        <p className="text-sm text-white font-medium">+92 XXX XXXXXXX</p>
                      </div>
                    </div>
                  </li>
                  <li className="group">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F5A623]/20 to-[#F5A623]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-[#F5A623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Email</p>
                        <p className="text-sm text-white font-medium">info@ayazacademy.edu</p>
                      </div>
                    </div>
                  </li>
                  <li className="group">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F5A623]/20 to-[#F5A623]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-[#F5A623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Location</p>
                        <p className="text-sm text-white font-medium">Your City, Pakistan</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Map — fills remaining space below the 3 columns */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#0a0e27]/90 via-[#1a1f3a]/90 to-[#0a0e27]/90 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <span className="ml-2 text-gray-400 text-xs font-mono">maps.ayazacademy.edu</span>
                </div>
                <div className="flex items-center space-x-1 text-[#F5A623]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs font-semibold">Karachi, Pakistan</span>
                </div>
              </div>

              {/* Map Iframe */}
              <div className="relative h-52">
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#0a0e27]/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#0a0e27]/40 to-transparent"></div>
                  <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-[#0a0e27]/40 to-transparent"></div>
                  <div className="absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-[#0a0e27]/40 to-transparent"></div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231960.27722053638!2d66.99006!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>

              {/* Bottom Info Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-gradient-to-r from-[#0a0e27]/90 via-[#1a1f3a]/90 to-[#0a0e27]/90 border-t border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-xs">Karachi, Sindh</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <span className="text-gray-300 text-xs">24°51′N 67°00′E</span>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Karachi,Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-1.5 bg-gradient-to-r from-[#F5A623] to-[#ff8c00] rounded-lg text-white text-xs font-semibold hover:shadow-lg hover:shadow-[#F5A623]/40 hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Open in Maps</span>
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; 2026 <span className="text-[#F5A623] font-semibold">Ayaz Ahmad Academy</span>. All rights reserved.
            </p>
            {/* <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[#F5A623] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/terms" className="text-gray-400 hover:text-[#F5A623] transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/sitemap" className="text-gray-400 hover:text-[#F5A623] transition-colors">
                Sitemap
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-[#F5A623] to-[#ff8c00] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#F5A623]/50 hover:shadow-[#F5A623]/70 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group z-50 ${
          showScrollBtn ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <svg className="w-6 h-6 text-white group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}
