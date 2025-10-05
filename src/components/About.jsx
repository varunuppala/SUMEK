import React from 'react';
import { Building2, Award, Settings, Rocket, Microscope, MapPin, Mail } from 'lucide-react';

function About() {
  const stats = [
    { number: '1998', label: 'Founded' },
    { number: '26+', label: 'Years of Excellence' },
    { number: 'ISO 9001', label: 'Certified' },
    { number: 'Hyderabad', label: 'Based in India' }
  ];

  const timeline = [
    {
      year: '1998',
      title: 'Precision Machining Unit',
      description: 'S&U MEK Engineers was founded by Umamaheswara Rao Abburi with a clear focus on precision machining for aerospace and defense, beginning with specialized job-work assignments.',
      icon: <Building2 size={28} strokeWidth={1.5} />
    },
    {
      year: '2008',
      title: 'Best Vendor for Precision Engineering',
      description: 'As capabilities expanded, we moved into mass-production machining and quickly became a trusted name for executing complex and challenging projects with absolute reliability.',
      icon: <Award size={28} strokeWidth={1.5} />
    },
    {
      year: '2020',
      title: 'Expanded into Composite Material Machining',
      description: 'Scaled up operations and expanded capabilities to machine advanced composite materials including C-SIC, FRP, and graphite for aerospace applications.',
      icon: <Settings size={28} strokeWidth={1.5} />
    },
    {
      year: '2024',
      title: 'One-Stop Product Solution',
      description: 'Advanced into manufacturing carbon composite materials in-house, machining with next-generation processes, and delivering complete solutions from raw material to finished product.',
      icon: <Rocket size={28} strokeWidth={1.5} />
    },
    {
      year: 'Future',
      title: 'Indigenous Product Manufacturer',
      description: 'Expanding into carbon composite manufacturing with carbonization, siliconization, and graphitization processes for aerospace, defense, drone, UAV, and industrial applications.',
      icon: <Microscope size={28} strokeWidth={1.5} />
    }
  ];

  const teamMembers = [
    {
      name: 'Umamaheswara Rao Abburi',
      role: 'Founder',
      location: 'Hyderabad, India',
      description: 'Founded S&U MEK Engineers in 1998 with a vision to manufacture high-precision engineering components for aerospace and defense. A young experienced technocrat who built the company from the ground up.',
      expertise: ['Visionary Leadership', 'Precision Engineering', 'Aerospace & Defense'],
      image: null
    },
    {
      name: 'Yeshwanth Kumar Abburi',
      role: 'Director of Business Management',
      location: 'Hyderabad, India',
      description: 'Leads business strategy and management, ensuring customer satisfaction and driving continuous learning and adaptation to the latest technologies.',
      expertise: ['Business Management', 'Customer Relations', 'Strategic Planning'],
      image: null
    },
    {
      name: 'Karthik Abburi',
      role: 'Director of Operations',
      location: 'Hyderabad, India',
      description: 'Oversees all operational aspects including production, lean manufacturing, quality control, and ensures operational excellence across all projects.',
      expertise: ['Operations Management', 'Lean Manufacturing', 'Quality Assurance'],
      image: null
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <div className="section-tag">LEARN ABOUT US</div>
            <h1 className="about-hero-title">
              <span>ABOUT</span>
              <span className="text-blue">S & U MEK</span>
            </h1>
            <p className="about-hero-description">
              For over 26 years, S & U MEK Engineers has been at the forefront of precision
              engineering for aerospace and defense, delivering innovative solutions from machining 
              to complete product manufacturing - proudly Make in India.
            </p>
            <div className="about-hero-cta">
              <span className="cta-text">OUR STORY</span>
              <span className="cta-arrow">↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-story-container">
          <div className="story-content">
            <div className="section-tag">ABOUT US</div>
            <h2 className="story-title">
              Engineering Excellence<br />
              Since 1998
            </h2>
            <div className="story-text">
              <p>
                S & U MEK Engineers Pvt. Ltd. was founded in 1998 by Umamaheswara Rao Abburi, 
                a young experienced technocrat, to manufacture high-precision engineering components. 
                Over the past three decades, we have successfully carved out a niche market by 
                tackling projects that demand critical attention and complexity.
              </p>
              <p>
                At SUMEK, our managerial and skilled engineers collaborate seamlessly to deliver 
                exceptional results, prioritizing customer satisfaction above all else. We are 
                committed to continuous learning and adapting to the latest technologies, which 
                distinguishes us in the industry.
              </p>
              <p>
                As a family-run organization based in Hyderabad, we take pride in our legacy of 
                manufacturing precision engineering components in India. Today, we are advancing 
                into a new chapter - manufacturing advanced carbon composite materials in-house, 
                machining them with next-generation processes, and delivering them as complete 
                solutions for the aerospace and defense sector.
              </p>
            </div>
          </div>
          <div className="story-image">
            <div className="image-placeholder">
              <div className="stats-overlay">
                <span className="stat-number">26+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="about-stat-item">
              <div className="about-stat-number">{stat.number}</div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-mission-container">
          <div className="section-tag">OUR MISSION</div>
          <h2 className="mission-title">
            Empowering Industries Through<br />
            Precision Engineering
          </h2>
          <p className="mission-description">
            Our mission is to be the trusted partner for the world's most critical industries, delivering precision
            engineering solutions that enable our clients to achieve their most ambitious goals while contributing
            to global progress and innovation.
          </p>
          
          <div className="mission-quote">
            <blockquote>
              "Aerospace and defense manufacturing continues to evolve, blending precision 
              and innovation. Thank you for joining us. For more insights, contact our team. 
              Together, let's shape the future."
            </blockquote>
            <cite>— S & U MEK Leadership Team</cite>
          </div>

          <div className="vision-card">
            <h3>Our Vision</h3>
            <p>
              To become a complete indigenous product manufacturer, delivering one-stop solutions 
              from raw material to finished product in carbon composite manufacturing for aerospace, 
              defense, drone, UAV, and industrial applications - contributing to India's Make in 
              India initiative.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline">
        <div className="about-timeline-container">
          <div className="section-tag">OUR JOURNEY</div>
          <h2 className="timeline-title">OUR TIMELINE</h2>
          <p className="timeline-description">
            Over 26 years of continuous growth, innovation, and excellence. From precision machining 
            to one-stop product solutions - discover the key milestones that have shaped S & U MEK 
            Engineers into the industry leader we are today.
          </p>
          
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-event">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-footer">
            <h3>What's Next?</h3>
            <p>
              As we continue to grow and evolve, we remain committed to pushing the
              boundaries of engineering excellence and creating solutions that shape the
              future.
            </p>
            <div className="timeline-cta">
               The journey continues...
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="about-team-container">
          <div className="section-tag">LEADERSHIP TEAM</div>
          <h2 className="team-title">OUR TEAM</h2>
          <p className="team-description">
            Meet the exceptional leaders driving innovation and excellence at S & U MEK Engineers. Our
            diverse team brings together decades of experience across critical engineering sectors.
          </p>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-member-image">
                  {member.image ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    <div className="image-placeholder">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="team-member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-location"><MapPin size={14} strokeWidth={2} style={{ display: 'inline', marginRight: '0.25rem' }} /> {member.location}</p>
                  <p className="member-description">{member.description}</p>
                  <div className="member-expertise">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                  <div className="member-contact">
                    <button className="contact-btn"><Mail size={16} strokeWidth={2} /></button>
                    <button className="linkedin-btn">in</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;