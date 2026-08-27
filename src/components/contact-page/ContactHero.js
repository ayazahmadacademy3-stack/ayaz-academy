'use client';

import { useEffect, useState } from 'react';

export default function ContactHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section 
        style={{
          position: 'relative',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          paddingTop: '140px',
          paddingBottom: '80px',
          background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a1628 100%)'
        }}
      >
        {/* Background Elements */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div 
            style={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              opacity: 0.15,
              filter: 'blur(80px)',
              background: 'radial-gradient(circle, rgba(245, 166, 35, 0.15) 0%, transparent 70%)',
              animation: 'float 10s ease-in-out infinite'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              right: '10%',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              opacity: 0.12,
              filter: 'blur(90px)',
              background: 'radial-gradient(circle, rgba(43, 76, 159, 0.12) 0%, transparent 70%)',
              animation: 'float 12s ease-in-out infinite 2s'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '30%',
              width: '350px',
              height: '350px',
              borderRadius: '50%',
              opacity: 0.1,
              filter: 'blur(70px)',
              background: 'radial-gradient(circle, rgba(74, 124, 247, 0.1) 0%, transparent 70%)',
              animation: 'float 14s ease-in-out infinite 4s'
            }}
          />
        </div>

        {/* Grid Overlay */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0.5,
            backgroundImage: 'linear-gradient(rgba(245, 166, 35, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 166, 35, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(245, 166, 35, 0.1)',
              border: '1px solid rgba(245, 166, 35, 0.3)',
              borderRadius: '50px',
              padding: '10px 24px',
              marginBottom: '28px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#F5A623',
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite'
              }} />
              <span style={{
                color: '#F5A623',
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Contact Us</span>
            </div>

            {/* Main Heading */}
            <h1 style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '28px'
            }}>
              Get in <span style={{
                background: 'linear-gradient(135deg, #F5A623, #ff8c00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Touch</span>
            </h1>

            {/* Divider */}
            <div style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, #F5A623, #ff8c00)',
              borderRadius: '2px',
              margin: '0 auto 28px'
            }} />

            {/* Description */}
            <p style={{
              fontSize: '20px',
              lineHeight: 1.8,
              color: '#d1d5db',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              We&apos;d love to hear from you. Reach out for any inquiries about admissions, courses, or general information.
            </p>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) rotate(3deg);
          }
          66% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
      `}</style>
    </>
  );
}
