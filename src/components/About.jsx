import React from 'react'
import myImage from '/myImage.png'

export default function About() {
  return (
    <div className="w-full py-20">
      <div className="max-w-screen-xl flex flex-col lg:flex-row lg:justify-around gap-10 items-center  mx-auto">
        <div className="lg:w-[30%] w-[80%] rounded-full overflow-hidden">
          <img src={myImage} alt="" className="w-full object-cover" />
        </div>
        <div className="text-white lg:w-1/2 w-full px-6 flex flex-col lg:items-start items-center">
          <h1 className="lg:text-6xl text-4xl font-bold">
            About <span className="text-[#EB5B00]">Me</span>
          </h1>
          <h2 className="lg:text-4xl text-2xl font-bold mt-1">
            MERN Stack Developer!
          </h2>
          <p className="mt-6 leading-tight text-lg text-center lg:text-left">
            I am a passionate MERN stack developer with hands-on experience in
            creating and maintaining robust web applications. Recently, I worked
            as a backend developer at Sharyng.ai, a promising start-up, where I
            contributed to building scalable and efficient backend solutions
            over a period of three months. My expertise lies in leveraging the
            MERN stack to deliver high-quality, user-centric applications.
          </p>
        </div>
      </div>
    </div>
  );
}
