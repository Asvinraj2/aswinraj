// 1. Create a new file: src/utils/analytics.js
import ReactGA from "react-ga4";

ReactGA.initialize("GA_MEASUREMENT_ID");
ReactGA.send("pageview");


// Replace with your actual Measurement ID
export const GA_MEASUREMENT_ID = 'G-YM5P7SV7VQ';

// Initialize Google Analytics
export const initGA = () => {
  gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url) => {
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track custom events (optional)
export const trackEvent = (action, category, label, value) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track clicks on portfolio projects
export const trackProjectClick = (projectName) => {
  gtag('event', 'click', {
    event_category: 'Portfolio',
    event_label: projectName,
  });
};

// Track contact form submissions
export const trackContactForm = () => {
  gtag('event', 'form_submit', {
    event_category: 'Contact',
    event_label: 'Contact Form',
  });
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  gtag('event', 'click', {
    event_category: 'Social Media',
    event_label: platform,
  });
};