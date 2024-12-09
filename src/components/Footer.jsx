import React from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full bg-[#331031]">
      <div className="lg:max-w-screen-lg mx-auto flex lg:flex-row flex-col justify-between items-center flex-wrap py-8">
        <div className="text-white flex flex-col lg:items-start items-center gap-2">
          <div className="w-14 h-14 bg-zinc-50 rounded-full">
            <img src={logo} alt="" />
          </div>
          <h1 className="text-xl font-bold mt-4">Waqas Ur Rehman</h1>
          <h2 className="text-lg font-semibold text-zinc-200">
            MERN Stack Developer
          </h2>
          <p>Thank's for visiting my portfolio </p>
        </div>
        <div className="text-white flex flex-col lg:items-start items-center gap-1 lg:mt-0 mt-6">
          <h1 className="text-lg font-bold mb-2">Quick Links</h1>
          {/* fetch links */}
          <Link to="/" className="hover:text-[#EB5B00]">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#EB5B00]">
            About
          </Link>
          <Link to="/services" className="hover:text-[#EB5B00]">
            Services
          </Link>
          <Link to="/skills" className="hover:text-[#EB5B00]">
            Skills
          </Link>
          <Link to="/portfolio" className="hover:text-[#EB5B00]">
            Portfolio
          </Link>
          <Link to="/contact" className="hover:text-[#EB5B00]">
            Contact
          </Link>
        </div>
        <div className="text-white">
          <h1 className="text-lg font-bold lg:text-start text-center lg:mt-0 mt-6">
            Contact Links
          </h1>
          <p className="flex items-center justify-center lg:justify-start text-lg gap-3  mt-4 text-white">
            <i className="ri-mail-line text-[#EB5B00]"></i>
            <span>rehmanwaqas466@gmail.com</span>
          </p>
          <p className="flex items-center justify-center lg:justify-start gap-3 mt-2 text-white">
            <i className="ri-phone-line text-[#EB5B00]"></i>
            <span>0315 2958257</span>
          </p>
          <div className="flex items-center gap-6 mt-10 text-xl text-[#EB5B00] justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/waqasurrehman-dev/"
              target="_blank"
              className="w-10 h-10 border-2 border-[#EB5B00] flex justify-center items-center rounded-full hover:bg-[#EB5B00] hover:text-white hover:shadow-[0px_0px_20px_rgba(235,91,0,0.7)]"
            >
              <i class="ri-linkedin-fill"></i>
            </a>
            <a
              href="https://github.com/WaqasUrRehman-dev"
              target="_blank"
              className="w-10 h-10 border-2 border-[#EB5B00] flex justify-center items-center rounded-full hover:bg-[#EB5B00] hover:text-white hover:shadow-[0px_0px_20px_rgba(235,91,0,0.7)]"
            >
              <i class="ri-github-fill"></i>
            </a>
            <a
              href="https://wa.me/923152958257?text=Hello%20Thank%20you%20for%20reaching%20out.%20How%20can%20I%20assist%20you%20today?" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border-2 border-[#EB5B00] flex justify-center items-center rounded-full hover:bg-[#EB5B00] hover:text-white hover:shadow-[0px_0px_20px_rgba(235,91,0,0.7)]"
            >
              <i class="ri-whatsapp-line"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#1A1A1A] text-white lg:text-base text-sm text-center py-4">
        <p>© 2024 Waqas Ur Rehman. All Rights Reserved.</p>
      </div>
    </div>
  );
}
