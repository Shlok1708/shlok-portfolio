import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import shlok from "./assets/shlok.jpeg";
import javaLogo from "./assets/logos/java.svg";
import reactLogo from "./assets/logos/react.svg";
import nodeLogo from "./assets/logos/nodejs.svg";
import mongoLogo from "./assets/logos/mongodb.svg";
import mysqlLogo from "./assets/logos/Mysql.svg";
import githubLogo from "./assets/logos/github.svg";
import firebaseLogo from "./assets/logos/firebase.svg";
import htmlLogo from "./assets/logos/html.svg";
import cssLogo from "./assets/logos/css.svg";
import jsLogo from "./assets/logos/javascript.svg";
import phpLogo from "./assets/logos/php.svg";
import pythonLogo from "./assets/logos/python.svg";
import cLogo from "./assets/logos/c.svg";
import cccLogo from "./assets/logos/ccc.svg";
import { supabase } from "./lib/supabase";

function App() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    });
const [loading, setLoading] = useState(false);
const handleChange = (e) => {
     setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

 const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const { error } = await supabase
    .from("messages")
    .insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    ]);

  setLoading(false);

  if (error) {
    console.log(error);
    alert("Message not sent!");
  } else {
    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }
};
  return (
    <div className="relative min-h-screen bg-[#050816] text-white">

      {/* Gradient Background */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-purple-600/30 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-600/30 blur-[150px] rounded-full"></div>

      {/* Navbar */}
       <nav className="relative z-50 flex items-center justify-between px-8 md:px-20 py-6">
        <h1 className="text-3xl font-bold tracking-wider">
          SHLOK VYAS
        </h1>

        <ul className="hidden md:flex items-center gap-10 text-gray-300">

         <li className="hover:text-purple-400 transition-all duration-300 cursor-pointer">
           <a href="#home">Home</a>
         </li>
        <li className="hover:text-purple-400 transition-all duration-300 cursor-pointer">         
           <a href="#projects">Projects</a>
         </li>

          <li className="hover:text-purple-400 transition-all duration-300 cursor-pointer">
           <a href="#skills">Skills</a>
          </li>

         <li className="hover:text-purple-400 transition-all duration-300 cursor-pointer">
           <a href="#contact">Contact</a>
          </li>

        </ul>

      </nav>


      {/* Hero Section */}
      <section
       id="home"
        className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-8 md:px-20 pt-10"
          >
      
        {/* Left Content */}
        <div className="max-w-2xl">

          <p className="uppercase tracking-[4px] text-purple-400 mb-3">
            TURNING IDEAS INTO DIGITAL EXPERIENCES
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            Building

            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              {" "}Intelligent{" "}
            </span>

            Solutions
            <br />

            for a Smarter Tomorrow.

          </h1>

          <p className="text-gray-400 text-lg mt-8 leading-relaxed max-w-xl">

            Hi, I’m Shlok Vyas — a Computer Science Engineering student passionate about building modern, AI-ready, and user-friendly digital experiences. Actively seeking internship opportunities to learn, grow, and contribute as a Software Developer.


          </p>
          <div className="flex flex-wrap gap-3 mt-8">
             <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
             Software Developer 
             </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            Android Developer
          </span>
     
         <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
              AI Enthusiast
         </span>

  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
    Problem Solver
  </span>

</div>

          {/* Buttons */} 
<div className="flex gap-5 mt-10">

     <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition duration-300">
      View Projects 
      </button>
      <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition duration-300">
      Contact Me
      </button>

  <a
    href="/resume.pdf"
    download
    className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition duration-300"
  >
    Download Resume
  </a>

</div>

        </div>

        {/* Right Image */}
        <div className="relative mb-20 lg:mb-0">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-[100px] opacity-40 rounded-full"></div>

          <img
            src={shlok}
            alt="profile"
            className="relative w-[300px] md:w-[420px] rounded-[40px] border border-white/10 shadow-2xl object-cover translate-y-8 md:-translate-y-25"
          />

        </div>

      </section>
      <section className="px-8 md:px-20 py-20">

  <div className="grid md:grid-cols-4 gap-6">

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <h2 className="text-4xl font-bold">8.17</h2>
      <p className="text-gray-400">Current CGPA</p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <h2 className="text-4xl font-bold">Top 50</h2>
      <p className="text-gray-400">Among 278 Teams</p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <h2 className="text-4xl font-bold">2+</h2>
      <p className="text-gray-400">Major Projects</p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <h2 className="text-4xl font-bold">4+</h2>
      <p className="text-gray-400">Certifications</p>
    </div>

  </div>

</section>
<section
  id="projects"
  className="scroll-mt-24 px-8 md:px-20 py-20"
>

  <p className="uppercase tracking-[4px] text-purple-400 mb-4">
    Featured Projects
  </p>

  <h2 className="text-4xl md:text-5xl font-bold mb-12">
    Projects I've Built
  </h2>

  <div className="grid lg:grid-cols-2 gap-8">

    {/* Donation Bridge */}

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition duration-300">

      <h3 className="text-3xl font-bold mb-4">
        DonationBridge
      </h3>

      <p className="text-gray-400 mb-6">
        Real-time donation platform connecting donors with NGOs using live tracking, secure authentication, instant notifications, and smart matching.
      </p>

      <div className="flex flex-wrap gap-2">

        <span className="px-3 py-1 bg-white/5 rounded-full">
          Next.js
        </span>

        <span className="px-3 py-1 bg-white/5 rounded-full">
          Node.js
        </span>

        <span className="px-3 py-1 bg-white/5 rounded-full">
          MongoDB
        </span>

        <span className="px-3 py-1 bg-white/5 rounded-full">
          Socket.io
        </span>

      </div>

    </div>

    {/* Air Quality */}

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition duration-300">

      <h3 className="text-3xl font-bold mb-4">
        Air Quality Monitoring System
      </h3>

      <p className="text-gray-400 mb-6">
        AI-powered air quality monitoring platform using real-time APIs, pollution analysis, interactive dashboards, and intelligent alerts.
      </p>

      <div className="flex flex-wrap gap-2">

        <span className="px-3 py-1 bg-white/5 rounded-full">
          JavaScript
        </span>

        <span className="px-3 py-1 bg-white/5 rounded-full">
          Python
        </span>

        <span className="px-3 py-1 bg-white/5 rounded-full">
          MongoDB
        </span>

        <span className="px-3 py-1 bg-white/5 rounded-full">
          Gemini API
        </span>

      </div>

    </div>

  </div>

</section>
<section
  id="skills"
  className="scroll-mt-24 px-8 md:px-20 py-24"
>

  <p className="uppercase tracking-[4px] text-purple-400 mb-4">
    Technical Skills
  </p>

  <h2 className="text-4xl md:text-5xl font-bold mb-12">
    Technologies I Work With
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {[
      { name: "Java", logo: javaLogo },
      { name: "React", logo: reactLogo },
      { name: "Node.js", logo: nodeLogo },
      { name: "MongoDB", logo: mongoLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "GitHub", logo: githubLogo, invert: true },
      { name: "Firebase", logo: firebaseLogo },
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "PHP", logo: phpLogo },
      { name: "Python", logo: pythonLogo },
      { name: "c", logo: cLogo },
      { name: "c++", logo: cccLogo },

    ].map((skill) => (
      <div
        key={skill.name}
       className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-4 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:-translate-y-2 hover:scale-105 transition-all duration-300"
      >
       <img
          src={skill.logo}
          alt={skill.name}
         className={`w-16 h-16 object-contain ${skill.invert ? "invert" : ""}`}
       />

        <span className="font-medium">
          {skill.name}
        </span>
      </div>
    ))}

  </div>

</section>
<section className="px-8 md:px-20 py-24">

  <p className="uppercase tracking-[4px] text-purple-400 mb-4">
    Achievements & Journey
  </p>

  <h2 className="text-4xl md:text-5xl font-bold mb-12">
    Highlights of My Journey
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* UDBHAV */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:col-span-2 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">

      <h3 className="text-2xl font-bold mb-4">
        🏆 UDBHAV 2026
      </h3>

      <p className="text-gray-400">
        Led my team as Team Leader and secured a place among the Top 50 teams out of 278 in a 24-hour offline hackathon.
      </p>

    </div>

    {/* IIT Bombay */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300">

      <h3 className="text-xl font-bold mb-4">
        🎓 IIT Bombay
      </h3>

      <p className="text-gray-400">
        Served as a Campus Ambassador and promoted events, opportunities, and student engagement.
      </p>

    </div>

    {/* CGPA */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-pink-500 transition-all duration-300">

      <h3 className="text-xl font-bold mb-4">
        📚 Academic
      </h3>

      <p className="text-gray-400">
        Current CGPA: 8.17 in B.Tech Computer Science & Engineering.
      </p>

    </div>

    {/* DonationBridge */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-green-500 transition-all duration-300">

      <h3 className="text-xl font-bold mb-4">
        🚀 DonationBridge
      </h3>

      <p className="text-gray-400">
        Developed a real-time donation platform connecting donors with NGOs using modern web technologies.
      </p>
      <div className="flex gap-4 mt-6">
  <a
    href="https://github.com/"
    target="_blank"
    rel="noreferrer"
    className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition"
  >
    GitHub
  </a>

  <a
    href="#"
    className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
  >
    Live Demo
  </a>
</div>

    </div>

    {/* Air Quality */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:col-span-2 hover:border-cyan-500 transition-all duration-300">

      <h3 className="text-2xl font-bold mb-4">
        🌍 Air Quality Monitoring
      </h3>

      <p className="text-gray-400">
        Built an AI-powered monitoring platform with real-time analytics, alerts, and pollution insights.
      </p>
      <div className="flex gap-4 mt-6">
  <a
    href="https://github.com/"
    target="_blank"
    rel="noreferrer"
    className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition"
  >
    GitHub
  </a>

  <a
    href="#"
    className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
  >
    Live Demo
  </a>
</div>
    </div>

    {/* Certifications */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-yellow-500 transition-all duration-300">

      <h3 className="text-xl font-bold mb-4">
        📜 Certifications
      </h3>

      <p className="text-gray-400">
        Cisco Networking Academy, NSQF Software Developer, GDG India Tour and more.
      </p>

    </div>

  </div>

</section>
<section
  id="contact"
  className="scroll-mt-24 px-8 md:px-20 py-24"
>

  <p className="uppercase tracking-[4px] text-purple-400 mb-4">
    Contact
  </p>

  <h2 className="text-4xl md:text-5xl font-bold mb-6">
    Let's Build Something Amazing
  </h2>

  <p className="text-gray-400 max-w-2xl mb-10">
    I'm always open to discussing new opportunities, collaborations,
    internships, and innovative projects.
  </p>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <FaEnvelope className="text-3xl text-purple-400 mb-3" />
  <h3 className="text-xl font-semibold mb-2">Email</h3>

  <a
    href="mailto:contact.shlok.official@gmail.com"
    className="text-purple-400 hover:text-purple-300"
  >
    contact.shlok.official@gmail.com
  </a>
</div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <FaCode className="text-3xl text-purple-400 mb-3" />
    <h3 className="text-xl font-semibold mb-2">LeetCode</h3>
<p className="text-gray-400 mb-2">
  100+ Problems Solved
</p>

<a
  href="https://leetcode.com/u/Shlokvyas90/"
  target="_blank"
  rel="noreferrer"
  className="text-purple-400 hover:text-purple-300"
>
  View Profile →
</a>
</div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
     <FaLinkedin className="text-3xl text-purple-400 mb-3" />
      <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>

<a
  href="https://linkedin.com/in/shlokvyas"
  target="_blank"
  rel="noreferrer"
  className="text-purple-400 hover:text-purple-300"
>
  linkedin.com/in/shlokvyas
</a>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <FaGithub className="text-3xl text-purple-400 mb-3" />
     <h3 className="text-xl font-semibold mb-2">GitHub</h3>
       <a
         href="https://github.com/Shlok1708"
         target="_blank"
         rel="noreferrer"
         className="text-purple-400 hover:text-purple-300"
       >
        github.com/Shlok1708
      </a>
    </div>

  </div>
  <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-8">
  <h3 className="text-2xl font-semibold mb-6">
    Send Me a Message
  </h3>

  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Your Name"
      className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none"
   />

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Your Email"
      className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none"
    />

    <textarea
      rows="5"
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Your Message"
      className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none"
    />

 <button
  type="submit"
  disabled={loading}
  className="px-8 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition disabled:opacity-50"
>
  {loading ? "Sending..." : "Send Message"}
</button>
  </form>
</div>

</section>
<footer className="px-8 md:px-20 py-8 border-t border-white/10 text-center text-gray-400">
  <p>© 2026 Shlok Vyas. All Rights Reserved.</p>
</footer>

    </div>
    
  )
}

export default App