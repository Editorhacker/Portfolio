import React from "react";
import img1 from "../assets/i1.png";
import img2 from "../assets/i2.png";
import img3 from "../assets/i3.png";
import img4 from "../assets/i4.png";
import img5 from "../assets/i5.png";
import img6 from "../assets/i6.png";
import img7 from "../assets/i7.png";


const Project = () => {
  const projects = [
    {
      title: "Thunder Game Cafe",
      description: "A modern and responsive website for a gaming cafe, built with React and Tailwind CSS. It features a sleek design, interactive elements, and showcases the cafe's services and events.",
      image: img6,
      link: "https://thunder-management-six.vercel.app/",
      codeLink: "https://github.com/Editorhacker/thunder-management"
    },
    {
      title: "Kalastra",
      description: "Kalastra is a modern clothing brand website built with React and Tailwind CSS. It features a sleek design, interactive elements, and showcases the brand's products and collections.",
      image: img7,
      link: "https://kalastrastyle.com/",
      codeLink: "https://github.com/Editorhacker/Kalasatra"
    },
    {
      title: "Invoice Generator",
      description: "A invoice generator built with Next.Js. Where user can generate invoice for their products.",
      image: img4,
      link: "https://billkar.vercel.app",
      codeLink: "https://github.com/Editorhacker/Invoice"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website to showcase creative work. Built with React and Tailwind CSS.",
      image: img1,
      link: "https://art-photos-studio.vercel.app/",
      codeLink: "https://github.com/Editorhacker/Art-photos"
    },
    {
      title: "Photo Share",
      description: "PhotoShare is a full-stack web application that allows photographers to upload client photos to Google Drive, compress them, and share view-only public galleries with clients. ",
      image: img5,
      link: "https://selectyourphoto.vercel.app/",
      codeLink: "https://github.com/Editorhacker/photoshare"
    },
    {
     title: "KamDone",
     description: "A Agency website built with React and Node.js, where user can book their services.",
     image: img3,
     link: "https://kamdone.vercel.app",
     codeLink: "https://github.com/Editorhacker/KamDone"
   },
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store built with React and Node.js. Includes cart functionality, payment processing, and user authentication.",
      image: img2,
      link: "#",
      codeLink: "https://github.com/Editorhacker"
    },
  ];

  return (
    <section id="work" className="min-h-screen pt-24 pb-16 px-4 md:px-6 bg-zinc-950 text-white flex flex-col justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none will-change-transform" style={{transform: 'translateZ(0)'}} />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none will-change-transform" style={{transform: 'translateZ(0)'}} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-6xl font-caveat font-bold text-center mb-16 text-white relative inline-block w-full">
          My Projects
          <span className="block w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></span>
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-zinc-900/80 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/30 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 mt-auto">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    className="inline-block px-6 py-2 bg-white text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-zinc-900 hover:text-white hover:border-zinc-700 border border-transparent"
                  >
                    View Project
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.codeLink}
                    className="inline-flex items-center gap-2 px-6 py-2 border border-blue-500/50 text-blue-400 font-bold rounded-full bg-transparent transition-all duration-300 transform hover:scale-105 hover:bg-blue-600 hover:text-white hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                  >
                    View Code
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
