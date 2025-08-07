// import React from 'react'
// import Navbar from './components/navbar/Navbar'
// import Banner from './components/banner/Banner'
// import Features from './components/features/Features'
// import Projects from './components/projects/Projects'
// import Resume from './components/resume/Resume'
// import Testimonial from './components/testimonials/Testimonials'
// import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'
// import FooterBottom from './components/footer/FooterBottom'
// import { initGA, trackPageView } from './analytics';

// const App = () => {

//   useEffect(() => {
//     // Initialize Google Analytics when app loads
//     initGA();
    
//     // Track initial page view
//     trackPageView(window.location.pathname);
//   }, []);

//   return (
//      <div className="bg-[var(--color-body)] text-[var(--color-light)]">
//      <Navbar />
//       <div className="max-w-screen-xl mx-auto">
//       <Banner />
//       <Features />
//       <Projects />
//       <Resume />
//       {/* <Testimonial /> */}
//       < Contact />
//       < Footer />
//       < FooterBottom />
//      </div>
//     </div>
//   )
// }

// export default App






import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Features from './components/features/Features'
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'
import Testimonial from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import FooterBottom from './components/footer/FooterBottom'
import { initGA, trackPageView } from './analytics';

const App = () => {

  useEffect(() => {
    // Initialize Google Analytics when app loads
    initGA();
    
    // Track initial page view
    trackPageView(window.location.pathname);
  }, []);

  return (
     <div className="bg-[var(--color-body)] text-[var(--color-light)]">
     <Navbar />
      <div className="max-w-screen-xl mx-auto">
      <Banner />
      <Features />
      <Projects />
      <Resume />
      {/* <Testimonial /> */}
      < Contact />
      < Footer />
      < FooterBottom />
     </div>
    </div>
  )
}

export default App