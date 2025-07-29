import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full xl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg shadow-gray-600/30 flex flex-col gap-6 sm:gap-8 justify-center">
      <img
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-3 sm:gap-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">Aswinraj S</h3>
        <p className="text-base sm:text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-sm sm:text-base text-gray-400 tracking-wide leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="text-sm sm:text-base text-gray-400 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span>Phone:</span>
          <span className="text-lightText">+91 7695997982</span>
        </p>
        <p className="text-sm sm:text-base text-gray-400 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span>Email:</span>
          <span className="text-lightText break-all sm:break-normal">aswinraj2002.as@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4">
        <h2 className="text-sm sm:text-base uppercase font-titleFont mb-2 sm:mb-4">Find me in</h2>
        <div className="flex gap-3 sm:gap-4">
          <span className="w-12 h-12 sm:w-14 sm:h-14 bg-[#18181b] text-gray-300 hover:text-red-500 hover:animate-shake duration-300 cursor-pointer text-lg sm:text-xl flex justify-center items-center rounded-md hover:bg-[#0f0f0f] transition-all">
            <a href="https://www.instagram.com/aswin_unofficial_?igsh=N2pxdXhvOWVzZmd0"
              target="_blank">
              <FaInstagram />
            </a>
          </span>
          <span className="w-12 h-12 sm:w-14 sm:h-14 bg-[#18181b] text-gray-300 hover:text-red-500 hover:animate-shake duration-300 cursor-pointer text-lg sm:text-xl flex justify-center items-center rounded-md hover:bg-[#0f0f0f] transition-all">
            <a href="https://x.com/Aswin_soundaraj?t=UBk9tEJGqbTvBCT5eOp5Iw&s=08"
              target="_blank">
              <FaTwitter />
            </a>
          </span>
          <span className="w-12 h-12 sm:w-14 sm:h-14 bg-[#18181b] text-gray-300 hover:text-red-500 hover:animate-shake duration-300 cursor-pointer text-lg sm:text-xl flex justify-center items-center rounded-md hover:bg-[#0f0f0f] transition-all">
            <a href="https://www.linkedin.com/in/aswinraj-s-264395264/"
              target="_blank">
              <FaLinkedinIn />
            </a>
          </span>
        </div>

      </div>
    </div>
  );
}

export default ContactLeft;
