// Simple and Reliable Scroll Animation System
class SimpleScrollAnimations {
  constructor() {
    this.isInitialized = false;
    this.sections = [];
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      setTimeout(() => this.setup(), 100); // Small delay to ensure all components are rendered
    }
  }

  setup() {
    console.log('Setting up scroll animations...');
    
    // Find and setup sections
    this.setupIconButtonsSection();
    this.setupWhatWeDoSection();
    
    // Start animation loop
    this.startAnimationLoop();
    this.isInitialized = true;
    
    console.log('Scroll animations initialized');
  }

  setupIconButtonsSection() {
    const section = document.querySelector('.icon-buttons-section');
    const buttons = document.querySelectorAll('.icon-button');
    
    console.log('Icon buttons section:', section);
    console.log('Icon buttons found:', buttons.length);
    
    if (section && buttons.length > 0) {
      this.sections.push({
        element: section,
        items: buttons,
        type: 'icon-buttons'
      });
    }
  }

  setupWhatWeDoSection() {
    const section = document.querySelector('.what-we-do-section');
    const buttons = document.querySelectorAll('.what-we-do-button');
    
    console.log('What we do section:', section);
    console.log('What we do buttons found:', buttons.length);
    
    if (section && buttons.length > 0) {
      this.sections.push({
        element: section,
        items: buttons,
        type: 'what-we-do'
      });
    }
  }

  startAnimationLoop() {
    const animate = () => {
      this.updateAnimations();
      requestAnimationFrame(animate);
    };
    animate();
  }

  updateAnimations() {
    if (!this.isInitialized) return;
    
    this.sections.forEach(section => {
      const progress = this.calculateProgress(section.element);
      
      if (section.type === 'icon-buttons') {
        this.animateIconButtons(section.items, progress);
      } else if (section.type === 'what-we-do') {
        this.animateWhatWeDoButtons(section.items, progress);
      }
    });
  }

  calculateProgress(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Simple calculation: section is "active" when it's in viewport
    const sectionTop = rect.top;
    const sectionBottom = rect.bottom;
    
    // Progress from 0 to 1 based on how much of the section is visible
    if (sectionBottom < 0) return 0; // Section is above viewport
    if (sectionTop > windowHeight) return 0; // Section is below viewport
    
    // Section is in viewport - calculate progress
    const visibleHeight = Math.min(rect.height, windowHeight - Math.max(sectionTop, 0));
    const progress = Math.max(0, Math.min(1, visibleHeight / rect.height));
    
    return progress;
  }

  animateIconButtons(buttons, progress) {
    buttons.forEach((button, index) => {
      if (!button) return;
      
      const isMobile = window.innerWidth <= 768;
      const maxDistance = isMobile ? 200 : 300;
      const maxRotation = 15;
      
      // Smooth easing
      const easedProgress = this.easeOutCubic(progress);
      
      let translateX = 0;
      let translateY = 0;
      let rotation = 0;
      let opacity = easedProgress;
      
      if (isMobile) {
        // Mobile: vertical animation
        const direction = index === 0 ? -1 : 1;
        translateY = maxDistance * direction * (1 - easedProgress);
        rotation = maxRotation * direction * (1 - easedProgress);
      } else {
        // Desktop: horizontal animation
        const direction = index === 0 ? -1 : 1;
        translateX = maxDistance * direction * (1 - easedProgress);
        rotation = maxRotation * direction * (1 - easedProgress);
      }
      
      // Apply the transform
      button.style.opacity = opacity;
      button.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg)`;
    });
  }

  animateWhatWeDoButtons(buttons, progress) {
    buttons.forEach((button, index) => {
      if (!button) return;
      
      const isMobile = window.innerWidth <= 768;
      const maxDistance = isMobile ? 250 : 350;
      const maxRotation = 10;
      
      // Add slight delay for each button
      const delay = index * 0.1;
      const adjustedProgress = Math.max(0, Math.min(1, (progress - delay) / (1 - delay)));
      const easedProgress = this.easeOutCubic(adjustedProgress);
      
      let translateX = 0;
      let translateY = 0;
      let rotation = 0;
      let opacity = easedProgress;
      let scale = 0.8 + (0.2 * easedProgress);
      
      if (isMobile) {
        // Mobile: vertical animation
        const direction = index % 2 === 0 ? -1 : 1;
        translateY = maxDistance * direction * (1 - easedProgress);
        rotation = maxRotation * direction * (1 - easedProgress);
      } else {
        // Desktop: horizontal animation based on column
        const direction = index % 2 === 0 ? -1 : 1; // Left column vs right column
        translateX = maxDistance * direction * (1 - easedProgress);
        rotation = maxRotation * direction * (1 - easedProgress);
      }
      
      // Apply the transform
      button.style.opacity = opacity;
      button.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotation}deg)`;
    });
  }

  easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }
}

// Initialize the animation system
console.log('Loading scroll animations...');
let animationInstance;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    animationInstance = new SimpleScrollAnimations();
  });
} else {
  animationInstance = new SimpleScrollAnimations();
}

export default SimpleScrollAnimations; 