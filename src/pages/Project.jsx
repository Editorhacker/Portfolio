import React from "react";



const Project = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store built with React and Node.js. Includes cart functionality, payment processing, and user authentication.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity tool for managing daily tasks and projects. Features drag-and-drop interface and real-time updates.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking application using OpenWeatherMap API. Displays current conditions and 5-day forecast.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website to showcase creative work. Built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
      link: "#"
    }
  ];

  return (
    <section id="work" className="min-h-screen pt-24 pb-16 px-4 md:px-6 bg-zinc-950 text-white flex flex-col justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

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
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-block px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
