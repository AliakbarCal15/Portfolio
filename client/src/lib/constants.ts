// Font Awesome script for icons
export const fontAwesomeScript = document.createElement('script');
fontAwesomeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js';
fontAwesomeScript.crossOrigin = 'anonymous';
document.head.appendChild(fontAwesomeScript);

// Section IDs
export const SECTIONS = {
  HOME: 'home',
  ABOUT: 'about',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CERTIFICATIONS: 'certifications',
  CONTACT: 'contact'
};

// Colors
export const COLORS = {
  NAVY: '#0A192F',
  NAVY_DARK: '#050E1A',
  DARK: '#121212',
  DARK_LIGHTER: '#1E1E1E',
  DARK_LIGHT: '#333333',
  LIGHT: '#F5F5F5',
  LIGHT_DARKER: '#CCCCCC',
  NEON_GREEN: '#39FF14',
  NEON_BLUE: '#0076FF',
  NEON_ORANGE: '#FF5722'
};
