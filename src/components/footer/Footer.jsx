import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { aswinLogo, } from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-10 sm:py-16 lg:py-20 h-auto border-b border-b-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full h-full flex flex-col gap-6 sm:gap-8">
        <div className="flex items-center gap-4">
          <img className="w-24 sm:w-24 lg:w-24 rounded-full" src={aswinLogo} alt="logo" />
          <h2 className="text-xl sm:text-3xl lg:text-2xl font-bold ">ASWIN</h2>
        </div>
        <div className="flex gap-3 sm:gap-4">
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
      <div className="w-full h-full">
        <h3 className="text-[var(--color-design)] text-lg sm:text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-3 sm:gap-4 font-titleFont font-medium py-4 sm:py-6 overflow-hidden">
          <li>
            <span className="w-full text-base sm:text-lg relative hover:text-[var(--color-design)] duration-300 group cursor-pointer">
              About
              <span className="w-full h-[1px] bg-[var(--color-design)] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-base sm:text-lg relative hover:text-[var(--color-design)] duration-300 group cursor-pointer">
              Portfolio
              <span className="w-full h-[1px] bg-[var(--color-design)] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-base sm:text-lg relative hover:text-[var(--color-design)] duration-300 group cursor-pointer">
              Services
              <span className="w-full h-[1px] bg-[var(--color-design)] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-base sm:text-lg relative hover:text-[var(--color-design)] duration-300 group cursor-pointer">
              Blog
              <span className="w-full h-[1px] bg-[var(--color-design)] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-base sm:text-lg relative hover:text-[var(--color-design)] duration-300 group cursor-pointer">
              Contact
              <span className="w-full h-[1px] bg-[var(--color-design)] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-[var(--color-design)] text-lg sm:text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-3 sm:gap-4 font-titleFont font-medium py-4 sm:py-6 overflow-hidden">
          <li>
            <span className="w-full text-base sm:text-lg relative hover:text-[var(--color-design)] duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-[var(--color-design)] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-base sm:text-lg relative hover:text-[var(--color-design)] duration-300 group cursor-pointer">
              System Status
              <span className="w-full h-[1px] bg-[var(--color-design)] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-base sm:text-lg relative hover:text-[var(--color-design)] duration-300 group cursor-pointer">
              Terms of Service
              <span className="w-full h-[1px] bg-[var(--color-design)] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-base sm:text-lg relative hover:text-[var(--color-design)] duration-300 group cursor-pointer">
              Pricing
              <span className="w-full h-[1px] bg-[var(--color-design)] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-base sm:text-lg relative hover:text-[var(--color-design)] duration-300 group cursor-pointer">
              Over Right
              <span className="w-full h-[1px] bg-[var(--color-design)] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-[var(--color-design)] text-lg sm:text-xl uppercase text-designColor tracking-wider">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-3 sm:gap-4 font-titleFont font-medium overflow-hidden py-4 sm:py-6">
          <li>
            <span className="w-full text-base sm:text-lg relative hover:text-[var(--color-design)] duration-300 group cursor-pointer">
              Documentation
              <span className="w-full h-[1px] bg-[var(--color-design)] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-base sm:text-lg relative hover:text-[var(--color-design)] duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-[var(--color-design)] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-base sm:text-lg relative hover:text-[var(--color-design)] duration-300 group cursor-pointer">
              API Reference
              <span className="w-full h-[1px] bg-[var(--color-design)] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-base sm:text-lg relative hover:text-[var(--color-design)] duration-300 group cursor-pointer">
              Support
              <span className="w-full h-[1px] bg-[var(--color-design)] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-base sm:text-lg relative hover:text-[var(--color-design)] duration-300 group cursor-pointer">
              Open Source
              <span className="w-full h-[1px] bg-[var(--color-design)] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer