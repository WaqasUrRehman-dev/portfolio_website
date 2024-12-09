import React from "react";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";
import project4 from "/project4.png";
import project5 from "/project5.png";
import project6 from "/project6.png";

export default function Portfolio() {
  const data = [
    {
      image: project1,
      title: "Movie App",
      description:
        "Explore a ReactJS-powered clone of a movie database app, featuring a sleek user interface for browsing movies, viewing detailed information, and enjoying a seamless user experience.",
      link: "https://github.com/WaqasUrRehman-dev/movie-app",
    },
    {
      image: project2,
      title: "Islamic Tutorial App",
      description:
        "Qutor offers online Quran classes for kids and adults, taught by experienced tutors. With interactive lessons, a user-friendly interface, and no credit card required for a free trial, it's a seamless way to learn Quran online.",
      link: "https://islam-journey.vercel.app/",
    },
    {
      image: project3,
      title: "Saylani Registration App",
      description:
        "Qutor offers online Quran classes for kids and adults, taught by experienced tutors. With interactive lessons, a user-friendly interface, and no credit card required for a free trial, it's a seamless way to learn Quran online.",
      link: "https://sylani-registration-form.vercel.app/",
    },
    {
      image: project4,
      title: "Zeenexers App",
      description:
        "In this project I have just adding something and this is not my project. At ZeeNexers we are dedicated to providing you with a seamless and enjoyable shopping experience. As a leading e-commerce platform in Pakistan.",
      link: "https://zeenexers.vercel.app/",
    },
    {
      image: project5,
      title: "Landing Page",
      description:
        "This project showcases a minimalist design with a clean layout and vibrant visuals. The left section focuses on typography and a call-to-action, while the right side is a feast for the eyes with bold, fruit-inspired imagery.",
      link: "https://github.com/WaqasUrRehman-dev/Landing-Page",
    },
    {
      image: project6,
      title: "Landing Page",
      description:
        "This landing page features a modern and artistic design with bold typography arranged diagonally for a dynamic visual effect. The layout combines earthy tones and vibrant green, with a portrait photograph on the right.",
      link: "https://sylani-registration-form.vercel.app/",
    },
  ];

  return (
    <div className="w-full py-20">
      <h1 className="text-center lg:text-6xl text-4xl font-bold text-white">
        Latest <span className="text-[#EB5B00] ">Projects</span>
      </h1>
      <div className="cards flex justify-between px-10 items-center flex-wrap gap-y-6 mt-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="card lg:w-[32%] h-[50vh] bg-gray-400 cursor-pointer rounded-xl overflow-hidden relative group"
          >
            <img
              src={item.image}
              className="w-full h-full lg:object-cover object-center transition-transform duration-500 group-hover:scale-110"
              alt="Project Preview"
            />
            <div className="w-full h-0 bg-gradient-to-t to-[#d91657dc] from-[#eb5a00d5] absolute left-0 -bottom-36 flex flex-col justify-center items-center text-center px-5 transition-all duration-500 group-hover:h-full group-hover:bottom-0">
              <h1 className="text-xl font-semibold mb-4 ">{item.title}</h1>
              <p className="font-semibold">"{item.description}"</p>
              <a
                href={item.link}
                target="_blank"
                className="mt-5 px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
              >
                <i class="ri-links-line text-xl text-[#EB5B00] pb-[2px] border-b-2 border-black"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
