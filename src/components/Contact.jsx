import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_jp141n7",
        "template_czofru4",
        templateParams,
        "a73YWGs31nzLhTqzd"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          // react toastify used for notification
          toast.success("Thanks for contacting me! check your email", {
            position: "top-center",
            autoClose: 2000,
          });
          // Reset the form
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          toast.error("There was an error. Please try again.", {
            position: "top-center",
            autoClose: 2000,
          });
        }
      );
  };

  return (
    <>
      <div className="w-full lg:py-20 pt-20 pb-28 flex lg:flex-row lg:justify-between lg:gap-0 gap-8 items-center flex-col">
        <div className="lg:w-1/2 px-6 lg:text-start text-center">
          <h1 className="text-center lg:text-6xl text-4xl font-bold text-white">
            Contact <span className="text-[#EB5B00] ">Me</span>
          </h1>
          <h2 className="text-2xl text-white font-semibold mt-6">
            Let's Work Together
          </h2>
          <p className="text-zinc-300 text-xl mt-4">
            I am available for freelance work. Connect with me via email or also
            you can contact me via the form below. I'll get back to you as soon
            as possible.
          </p>
          <p className="flex items-center justify-center lg:justify-start gap-3 lg:text-xl mt-8 text-white">
            <i className="ri-mail-line text-[#EB5B00]"></i>
            <span>rehmanwaqas466@gmail.com</span>
          </p>
          <p className="flex items-center justify-center lg:justify-start gap-3 lg:text-xl mt-2 text-white">
            <i className="ri-phone-line text-[#EB5B00]"></i>
            <span>0315 2958257</span>
          </p>
          <div className="flex items-center gap-6 mt-10 text-xl text-[#EB5B00] justify-center lg:justify-start">
            {/* fetch links */}
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
        <form onSubmit={sendEmail} className="lg:w-1/2 px-8">
          <div>
            <label htmlFor="name" className="text-white text-xl font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 mt-3 text-white font-semibold text-lg rounded-lg bg-transparent border border-[#EB5B00] outline-none focus:ring-2 focus:ring-[#EB5B00] placeholder:text-zinc-400 placeholder:font-semibold placeholder:text-lg placeholder:bg-transparent"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="text-white text-xl font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 mt-3 text-white font-semibold text-lg rounded-lg bg-transparent border border-[#EB5B00] outline-none focus:ring-2 focus:ring-[#EB5B00] placeholder:text-zinc-400 placeholder:font-semibold placeholder:text-lg placeholder:bg-transparent"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="message"
              className="text-white text-xl font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter Your Message"
              className="w-full px-4 py-2 mt-4 text-white font-semibold text-lg rounded-lg bg-transparent border border-[#EB5B00] outline-none focus:ring-2 focus:ring-[#EB5B00] placeholder:text-zinc-400 placeholder:font-semibold placeholder:text-lg placeholder:bg-transparent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-4 text-white font-semibold text-xl bg-[#EB5B00] rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
