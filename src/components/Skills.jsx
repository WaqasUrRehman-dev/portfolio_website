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
    <div className="w-full mt-24">
      <h1 className="text-center text-6xl font-bold text-white">
        My <span className="text-[#EB5B00] ">Skills</span>
      </h1>
      <div className="mt-10 py-20 px-28 flex flex-wrap justify-between items-center gap-x-32 gap-y-20">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <i
              class={`${item.icon} text-9xl text-[#EB5B00] hover:drop-shadow-[0px_0px_10px_rgba(235,91,0,0.7)] transition-all duration-500`}
            ></i>
            <h1 className="text-3xl font-bold text-white">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
