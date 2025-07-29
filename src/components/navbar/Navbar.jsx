import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { aswinLogo, logo } from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-[var(--color-body)] px-4 mx-auto flex justify-between items-center font-[var(--font-title)] border-b border-b-gray-600">
      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-80}
        className="cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <img
            src={aswinLogo}
            alt="logo"
            className="w-16 h-16 rounded-full object-cover"
          />
          <h1 className="text-white text-xl font-semibold">ASWIN</h1>
        </div>
      </Link>

      <div>
        {/* Desktop/Laptop Navigation - Hidden on mobile and tablet */}
        <ul className="hidden lg:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-[var(--color-design)] duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu - Visible on mobile and tablet */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl lg:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-[var(--color-design)] cursor-pointer"
        >
          <FiMenu />
        </span>

        {/* Mobile/Tablet Menu Overlay */}
        {showMenu && (
          <div className="w-4/5 h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div className="flex items-center gap-2">
                <img src={aswinLogo} alt="logo" className="w-16 h-16 rounded-full object-cover" />
                <h1 className="text-white text-xl font-semibold">ASWIN</h1>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                I'm a MERN Stack Developer skilled in MongoDB, Express.js, React.js, and Node.js. I enjoy building responsive interfaces and strong backend systems, always aiming to improve and deliver smooth user experiences.
              </p>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-[var(--color-design)] duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-[var(--font-title)] mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <a href="https://www.instagram.com/aswin_unofficial_?igsh=N2pxdXhvOWVzZmd0"
                      target="_blank">
                      <FaInstagram />
                    </a>
                  </span>
                  <span className="bannerIcon">
                    <a href="https://x.com/Aswin_soundaraj?t=UBk9tEJGqbTvBCT5eOp5Iw&s=08"
                      target="_blank">
                      <FaTwitter />
                    </a>
                  </span>
                  <span className="bannerIcon">
                    <a href="https://www.linkedin.com/in/aswinraj-s-264395264/"
                      target="_blank">
                      <FaLinkedinIn />
                    </a>
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-[var(--color-design)] duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
