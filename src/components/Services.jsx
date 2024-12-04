import React from "react";

export default function Services() {
  const data = [
    {
      icon: "ri-tools-fill",
      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti cumque repudiandae mollitia quae animi fuga, quasi tempora eos quod ducimus unde sunt illum quos dolorum autem tempore earum modi.",
    },
    {
      icon: "ri-reactjs-line",
      title: "Frontend",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti cumque repudiandae mollitia quae animi fuga, quasi tempora eos quod ducimus unde sunt illum quos dolorum autem tempore earum modi.",
    },
    {
      icon: "ri-nodejs-line",
      title: "Backend",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti cumque repudiandae mollitia quae animi fuga, quasi tempora eos quod ducimus unde sunt illum quos dolorum autem tempore earum modi.",
    },
  ];
  return (
    <div className="w-full mt-8 py-12">
      <h1 className="text-center text-6xl font-bold text-white">
        My <span className="text-[#EB5B00] ">Services</span>
      </h1>
      <div className="w-full flex justify-center items-center gap-10 mt-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[25%] bg-[#640D5F]  rounded-3xl p-10 shadow-[0px_0px_10px_rgba(235,91,0,0.7)] hover:-translate-y-3 transition-all duration-700"
          >
            <div>
              <i className={`${item.icon} text-5xl text-[#EB5B00]`}></i>
            </div>
            <h1 className="text-white text-3xl font-semibold mt-6">
              {item.title}
            </h1>
            <p className="text-white mt-6 text-sm font-semibold">
              {item.description}
            </p>
            <button className="bg-[#EB5B00] px-4 py-1 rounded-full mt-6 shadow-[0px_0px_20px_rgba(235,91,0,0.7)] ">
              leran more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
