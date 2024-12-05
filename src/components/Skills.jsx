import React from 'react'

export default function Skills() {
    const data = [
      {
        icon: "ri-html5-line",
        title: "HTML5",
      },
      {
        icon: "ri-css3-line",
        title: "CSS3",
      },
      {
        icon: "ri-javascript-line",
        title: "Javascipt",
      },
      {
        icon: "ri-nodejs-fill",
        title: "NodeJS",
      },
      {
        icon: "ri-reactjs-fill",
        title: "ReactJS",
      },
      {
        icon: "bx bxl-redux",
        title: "Redux",
      },
      {
        icon: "bx bx-code-curly",
        title: "ExpressJS",
      },
      {
        icon: "bx bxl-mongodb",
        title: "MongoDB",
      },
    ];
  return (
    <div className="w-full pt-20">
      <h1 className="text-center lg:text-6xl text-4xl font-bold text-white">
        My <span className="text-[#EB5B00] ">Skills</span>
      </h1>
      <div className="py-20 lg:px-28 px-10 flex flex-wrap justify-center items-center lg:gap-x-32 lg:gap-y-20 gap-y-10 gap-x-10">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <i
              class={`${item.icon} lg:text-9xl text-6xl text-[#EB5B00] hover:drop-shadow-[0px_0px_10px_rgba(235,91,0,0.7)] transition-all duration-500`}
            ></i>
            <h1 className="lg:text-3xl font-bold text-white">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
