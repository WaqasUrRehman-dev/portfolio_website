import React from "react";
import logo from "/logo.png";

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
          <a href="" className="hover:text-[#EB5B00]">
            Home
          </a>
          <a href="" className="hover:text-[#EB5B00]">
            About
          </a>
          <a href="" className="hover:text-[#EB5B00]">
            Services
          </a>
          <a href="" className="hover:text-[#EB5B00]">
            Skills
          </a>
          <a href="" className="hover:text-[#EB5B00]">
            Portfolio
          </a>
          <a href="" className="hover:text-[#EB5B00]">
            Contact
          </a>
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
              href=""
              className="w-10 h-10 border-2 border-[#EB5B00] flex justify-center items-center rounded-full hover:bg-[#EB5B00] hover:text-white hover:shadow-[0px_0px_20px_rgba(235,91,0,0.7)]"
            >
              <i class="ri-linkedin-fill"></i>
            </a>
            <a
              href=""
              className="w-10 h-10 border-2 border-[#EB5B00] flex justify-center items-center rounded-full hover:bg-[#EB5B00] hover:text-white hover:shadow-[0px_0px_20px_rgba(235,91,0,0.7)]"
            >
              <i class="ri-github-fill"></i>
            </a>
            <a
              href=""
              className="w-10 h-10 border-2 border-[#EB5B00] flex justify-center items-center rounded-full hover:bg-[#EB5B00] hover:text-white hover:shadow-[0px_0px_20px_rgba(235,91,0,0.7)]"
            >
              <i class="ri-whatsapp-line"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#1A1A1A] text-white text-center py-4">
        <p>© 2021 Waqas Ur Rehman. All Rights Reserved.</p>
      </div>
    </div>
  );
}
