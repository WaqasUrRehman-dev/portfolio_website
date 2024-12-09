import React, { useState } from "react";
import logo from "/logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [toggle, settoggle] = useState(false);
  const location = useLocation();
  console.log(location);
  const data = [
    { id: "/", name: "Home" },
    { id: "/about", name: "About" },
    { id: "/services", name: "Services" },
    { id: "/skills", name: "Skills" },
    { id: "/portfolio", name: "Portfolio" },
    { id: "/contact", name: "Contact" },
  ];
  const isActive = (id) => {
    return location.pathname === id;
  };
  return (
    <div className="w-full bg-[#331031]">
      {/* dekstop menu */}
      <div className="hidden max-w-screen-lg mx-auto lg:flex justify-between items-center pt-5">
        <div className="w-14 h-14 bg-zinc-50 rounded-full">
          <img src={logo} alt="" />
        </div>
        <div className="text-white text-lg lg:flex gap-6 font-semibold">
          {data.map((n, i) => (
            <Link
              key={i}
              to={`${n.id}`}
              className={`${
                isActive(n.id) ? "text-[#EB5B00]" : "hover:text-[#EB5B00]"
              }`}
            >
              {n.name}
            </Link>
          ))}
        </div>
      </div>
      {/* mobile menu */}
      {toggle ? (
        <div className="lg:hidden w-full h-screen bg-black">
          <button
            onClick={() => settoggle(false)}
            className="m-2 text-white text-3xl lg:hidden"
          >
            <i class="ri-close-fill"></i>
          </button>
          <div className="text-white text-lg flex flex-col gap-4 pl-4 font-semibold pt-6">
            {data.map((n, i) => (
              <Link
                key={i}
                to={`${n.id}`}
                className={`${
                  isActive(n.id) || (location.pathname === "/" && i === 0)
                    ? "text-[#EB5B00]"
                    : "hover:text-[#EB5B00]"
                }`}
                onClick={() => settoggle(false)}
              >
                {n.name}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-between items-center py-3 px-6">
          <div className="w-14 h-14 bg-zinc-50 rounded-full lg:hidden">
            <img src={logo} alt="" />
          </div>
          <button onClick={() => settoggle(true)}>
            <i class="ri-menu-line block text-3xl text-white lg:hidden"></i>
          </button>
        </div>
      )}
    </div>
  );
}
