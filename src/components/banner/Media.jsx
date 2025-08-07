// import React from 'react'
// import { FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp, FaReact } from "react-icons/fa";
// import { SiTailwindcss, SiMongodb, SiNextdotjs } from "react-icons/si";
// const Media = () => {
//   return (
//     <div className="flex flex-col xl:flex-row gap-6 xl:gap-20 justify-between">

//       <div>
//         <h2 className="text-base uppercase font-[var(--font-title)] mb-4">
//           Find me in
//         </h2>
//         <div className="flex gap-4">
//           <a
//             href="https://www.instagram.com/aswin_unofficial_?igsh=N2pxdXhvOWVzZmd0"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bannerIcon"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             href="https://x.com/Aswin_soundaraj?t=UBk9tEJGqbTvBCT5eOp5Iw&s=08"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bannerIcon"
//           >
//             <FaTwitter />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/aswinraj-s-264395264/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bannerIcon"
//           >
//             <FaLinkedinIn />
//           </a>
//           {/* <a
//             href="https://wa.me/917695997982"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bannerIcon"
//           >
//             <FaWhatsapp />
//           </a> */}
//         </div>
//       </div>

//       <div>
//         <h2 className="text-base uppercase font-[var(--font-title)] mb-4">
//           BEST SKILL ON
//         </h2>
//         <div className="flex gap-4">
//           <span className="bannerIcon">
//             <FaReact />
//           </span>
//           <span className="bannerIcon">
//             <SiNextdotjs />
//           </span>
//           <span className="bannerIcon">
//             <SiTailwindcss />
//           </span>
//           <span className="bannerIcon">
//             <SiMongodb />
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Media








// 3. Update your Media.js component to track social clicks
import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiNextdotjs } from "react-icons/si";
import { trackSocialClick } from '../../analytics'; // Import the tracking function

const Media = () => {
  const handleSocialClick = (platform) => {
    trackSocialClick(platform);
  };

  return (
    <div className="flex flex-col xl:flex-row gap-6 xl:gap-20 justify-between">

      <div>
        <h2 className="text-base uppercase font-[var(--font-title)] mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/aswin_unofficial_?igsh=N2pxdXhvOWVzZmd0"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            onClick={() => handleSocialClick('Instagram')}
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/Aswin_soundaraj?t=UBk9tEJGqbTvBCT5eOp5Iw&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            onClick={() => handleSocialClick('Twitter')}
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/aswinraj-s-264395264/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            onClick={() => handleSocialClick('LinkedIn')}
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-base uppercase font-[var(--font-title)] mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiMongodb />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media