import React from 'react'
import Resume from '../assets/Resume.pdf'
import myImage from "/myImage.png";

export default function Header() {
  return (
    <div className="w-full py-20">
      <div className="max-w-screen-xl flex flex-col lg:flex-row-reverse lg:justify-around gap-10 items-center  mx-auto">
        <div className="lg:w-[30%] w-[80%] rounded-full overflow-hidden">
          <img src={myImage} alt="" className="w-full object-cover" />
        </div>
        <div className="text-white lg:w-1/2 w-full px-6 flex flex-col lg:items-start items-center">
          <h2 className="lg:text-3xl text-xl font-bold">Hi, My Name is</h2>
          <h1 className="lg:text-6xl text-3xl font-bold">Waqas Ur Rehman</h1>
          <h2 className="lg:text-3xl text-lg font-bold">
            And I'am a{" "}
            <span className="text-[#EB5B00]">MERN Stack Developer</span>
          </h2>
          <p className="mt-6 leading-tight text-lg text-center lg:text-left">
            I am a web developer. I am passionate about coding and I love to
            learn new things. I have experience in HTML, CSS, and JavaScript. I
            am currently learning React and Node.js. I am looking for new
            opportunities to work on exciting projects.
          </p>
          <div className="mt-6 border-2 border-[#EB5B00] rounded-lg inline-block px-6 py-3 hover:bg-[#EB5B00] hover:bg-opacity-40 hover:text-white text-[#EB5B00] font-semibold hover:shadow-xl hover:shadow-[rgba(235,91,0,.3)]">
            <a href={Resume} download="Waqas_Resume.pdf">
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
