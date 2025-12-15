import React, { useState, useEffect, useRef } from 'react';

function HeroSection() {
  const videos = ['/Video-1.mp4', '/Video-2.mp4', '/Video-3.mp4'];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setIsTransitioning(true);

      // Wait for fade out, then switch video
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsTransitioning(false);
      }, 500);
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [videos.length]);

  // Reset and play video when index changes
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play().catch(err => console.log('Video autoplay prevented:', err));
    }
  }, [currentVideoIndex]);

  return (
    <section className="hero-section" style={{ position: 'relative', height: '80vh', minHeight: '500px' }}>
      {/* Video Background */}
      <div className="hero-video-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        <video
          ref={videoRef}
          className={`hero-video ${isTransitioning ? 'fading' : ''}`}
          src={videos[currentVideoIndex]}
          muted
          playsInline
          autoPlay
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
        />
        <div className="hero-video-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(15,23,42,0.3), rgba(15,23,42,0.6))', zIndex: 1 }}></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content-wrapper" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 2rem 60px' }}>
        <div className="hero-container" style={{ color: '#ffffff', textAlign: 'center' }}>
          <div className="hero-tagline" style={{ color: '#3b82f6', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '2.5px', marginBottom: '1rem', textTransform: 'uppercase', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Driven by Precision. Defined by Innovation.</div>
          <h1 className="hero-title" style={{ fontSize: '4.5rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, marginBottom: '1.5rem', textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>
            <span className="hero-title-line-1" style={{ display: 'block' }}>S & U MEK</span>
            <span className="hero-title-line-2" style={{ display: 'block', color: '#d1dae3', fontWeight: 400 }}>Engineers</span>
          </h1>
          <p className="hero-description" style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 600, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
            Precision Engineering for Aerospace & Defence since 1998
          </p>
          <p className="hero-subdescription" style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.95)', maxWidth: '700px', lineHeight: 1.7, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
            From precision machining to advanced carbon composite manufacturing - delivering complete
            solutions with unmatched quality, speed, and consistency.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection; 