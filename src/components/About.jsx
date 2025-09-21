import React from 'react';

function About() {
  const stats = [
    { number: '1999', label: 'Founded' },
    { number: '150+', label: 'Team Members' },
    { number: '4', label: 'Global Offices' },
    { number: '500+', label: 'Successful Projects' }
  ];

  const timeline = [
    {
      year: '1999',
      title: 'Company Founded',
      description: 'S & U MEK Engineers was established with a vision to deliver precision engineering solutions to critical industries.',
      icon: '🏢'
    },
    {
      year: '2003',
      title: 'First Major Defense Contract',
      description: 'Secured our first major defense contract, establishing our reputation in the defense sector with innovative solutions.',
      icon: '🛡️'
    },
    {
      year: '2007',
      title: 'Aerospace Division Launch',
      description: 'Expanded into aerospace engineering, developing specialized capabilities for aircraft and satellite systems.',
      icon: '✈️'
    },
    {
      year: '2010',
      title: 'ISO Certifications Achieved',
      description: 'Obtained ISO 9001:2015 and AS9100D certifications, demonstrating our commitment to quality and industry standards.',
      icon: '🏆'
    },
    {
      year: '2014',
      title: 'Global Expansion',
      description: 'Opened international offices in Europe and North America, establishing our global presence and capabilities.',
      icon: '🌍'
    },
    {
      year: '2018',
      title: 'Energy Sector Entry',
      description: 'Entered the renewable energy sector, developing solutions for solar, wind, and hydroelectric power systems.',
      icon: '⚡'
    },
    {
      year: '2020',
      title: 'Team Growth Milestone',
      description: 'Reached 150+ team members across four countries, representing our commitment to talent and expertise.',
      icon: '👥'
    },
    {
      year: '2024',
      title: 'Innovation Hub Launch',
      description: 'Launched our state-of-the-art innovation hub, focusing on next-generation engineering technologies and R&D.',
      icon: '🔬'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Executive Officer',
      location: 'London, UK',
      description: 'With over 20 years in precision engineering, Dr. Mitchell leads our strategic vision and global operations.',
      expertise: ['Strategic Leadership', 'Engineering Management', 'Global Operations'],
      image: null
    },
    {
      name: 'James Richardson',
      role: 'Chief Technology Officer',
      location: 'Manchester, UK',
      description: 'James drives our technological innovation and oversees our advanced engineering capabilities across all sectors.',
      expertise: ['Technology Innovation', 'R&D Management', 'Advanced Manufacturing'],
      image: null
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Head of Aerospace Division',
      location: 'Birmingham, UK',
      description: 'A leading expert in aerospace engineering with extensive experience in aircraft and satellite systems.',
      expertise: ['Aerospace Engineering', 'Satellite Systems', 'Aircraft Design'],
      image: null
    },
    {
      name: 'Michael Chen',
      role: 'Head of Defense Solutions',
      location: 'London, UK',
      description: 'Michael specializes in defense engineering solutions and leads our most critical defense sector projects.',
      expertise: ['Defense Systems', 'Security Engineering', 'Project Management'],
      image: null
    },
    {
      name: 'Emma Thompson',
      role: 'Director of Operations',
      location: 'Leeds, UK',
      description: 'Emma ensures operational excellence across all our projects and manages our global supply chain.',
      expertise: ['Operations Management', 'Supply Chain', 'Quality Control'],
      image: null
    },
    {
      name: 'Dr. Robert Wilson',
      role: 'Head of Energy Division',
      location: 'Glasgow, UK',
      description: 'Dr. Wilson leads our renewable energy initiatives and sustainable engineering solutions.',
      expertise: ['Renewable Energy', 'Sustainable Engineering', 'Power Systems'],
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
              For over 25 years, S & U MEK Engineers has been at the forefront of precision
              engineering, delivering innovative solutions that power the world's most critical
              industries.
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
              Since 1999
            </h2>
            <div className="story-text">
              <p>
                S & U MEK Engineers began as a vision to bridge the gap between
                innovative engineering concepts and practical, real-world applications.
                Founded in 1999, we have grown from a small team of passionate
                engineers to become a globally recognized leader in precision
                engineering solutions.
              </p>
              <p>
                Our expertise spans across critical industries including Defense,
                Aerospace, Oil & Gas, and Energy sectors. We specialize in delivering
                complex engineering projects that require the highest levels of
                precision, reliability, and innovation.
              </p>
              <p>
                Today, with offices across four countries and a team of over 150 skilled
                professionals, we continue to push the boundaries of what's possible in
                engineering, always with our clients' success at the heart of everything
                we do.
              </p>
            </div>
          </div>
          <div className="story-image">
            <div className="image-placeholder">
              <div className="stats-overlay">
                <span className="stat-number">25+</span>
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
              "We believe that exceptional engineering is not just about
              technical excellence—it's about creating solutions that
              make a meaningful difference in the world."
            </blockquote>
            <cite>— S & U MEK Leadership Team</cite>
          </div>

          <div className="vision-card">
            <h3>Our Vision</h3>
            <p>
              To be recognized globally as the premier engineering partner, known for our
              unwavering commitment to excellence, innovation, and the positive impact we
              create for our clients and communities worldwide.
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
            Over 25 years of continuous growth, innovation, and excellence. Discover the key
            milestones that have shaped S & U MEK Engineers into the industry leader we are today.
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
              📅 The journey continues...
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
                    <div className="image-placeholder">👤</div>
                  )}
                </div>
                <div className="team-member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-location">📍 {member.location}</p>
                  <p className="member-description">{member.description}</p>
                  <div className="member-expertise">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                  <div className="member-contact">
                    <button className="contact-btn">✉️</button>
                    <button className="linkedin-btn">in</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="join-team-cta">
            <h3>Join Our Team</h3>
            <p>
              We're always looking for exceptional talent to join our growing team.
              Discover exciting career opportunities in precision engineering.
            </p>
            <button className="cta-button">View Open Positions</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;