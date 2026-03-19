import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Download } from 'lucide-react';
import codeclogo from "../assets/codec.png";
import aerozonelogo from "../assets/aerozone.png";


const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Cloud Computing Intern",
      company: "Codec Technologies India",
      type: "Internship",
      duration: "Mar 2026 - Present",
      durationDetail: "1 mo",
      location: "India · Hybrid",
      logo: codeclogo,
      gradient: "from-cyan-400 to-blue-600",
      bgBlur: "bg-blue-900/10",
      borderGlow: "group-hover:border-blue-500/50"
    },
    {
      id: 2,
      role: "Full Stack Engineer",
      company: "AEROZONE",
      type: "Internship",
      duration: "Aug 2025 - Mar 2026",
      durationDetail: "8 mos",
      location: "Mumbai, Maharashtra, India · Hybrid",
      logo: aerozonelogo,
      gradient: "from-purple-400 to-pink-600",
      bgBlur: "bg-purple-900/10",
      borderGlow: "group-hover:border-purple-500/50"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 md:px-6 bg-zinc-950 text-white flex flex-col justify-center relative overflow-hidden w-full">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none opacity-50 transform-gpu" />
      <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none opacity-50 transform-gpu" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500 tracking-tight leading-tight mb-4">
            Experience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>

          <div className="space-y-16 md:space-y-20">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''} group`}
                >

                  {/* Timeline Badge/Icon */}
                  <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden sm:flex z-20">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-zinc-950 border-2 border-white/20 group-hover:border-blue-400 flex items-center justify-center shadow-lg transition-all duration-300 z-10 box-border`}
                    >
                      <Briefcase className="w-4 h-4 md:w-6 md:h-6 text-zinc-400 group-hover:text-white transition-colors" />
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Card Content */}
                  <div className={`w-full sm:pl-20 md:w-1/2 md:px-10 ${isEven ? 'md:text-right' : 'md:text-left'} relative z-10 mt-6 sm:mt-0`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={`relative overflow-hidden ${exp.bgBlur} backdrop-blur-xl border border-white/10 ${exp.borderGlow} rounded-[2rem] p-8 sm:p-10 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]`}
                    >
                      {/* Decorative Gradient Blob inside card */}
                      <div className={`absolute -top-24 ${isEven ? '-left-24' : '-right-24'} w-48 h-48 bg-gradient-to-br ${exp.gradient} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>

                      <div className={`flex flex-col sm:flex-row items-start ${isEven ? 'md:flex-row-reverse md:items-center md:justify-end md:text-right' : 'sm:items-center'} gap-6 mb-8 relative z-10`}>
                        {/* Company Logo representation */}
                        <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${exp.gradient} p-[4px] shadow-lg group-hover:scale-105 transition-transform duration-500`}>
                          <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center">
                            {typeof exp.logo === "string" && exp.logo.endsWith(".png") ? (
                              <img
                                src={exp.logo}
                                alt={exp.company}
                                className="w-18 h-18 object-contain rounded-[13px]"
                              />
                            ) : (
                              <span className={`text-2xl sm:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-br ${exp.gradient}`}>
                                {exp.logo}
                              </span>
                            )}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-2xl sm:text-2xl font-bold text-white tracking-wide mb-1">
                            {exp.role}
                          </h3>
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-zinc-300 ${isEven ? 'md:flex-row-reverse md:ml-auto' : ''}`}>
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient}`}></span>
                            {exp.type}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 relative z-10">
                        <div className={`text-xl sm:text-2xl font-medium text-zinc-200 ${isEven ? 'md:text-right' : ''}`}>
                          {exp.company}
                        </div>

                        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} gap-3 text-sm sm:text-base text-zinc-400 font-medium`}>
                          <div className={`flex items-center gap-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            <div className="p-2 rounded-lg bg-white/5 text-blue-400">
                              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <span>{exp.duration} <span className="opacity-50">({exp.durationDetail})</span></span>
                          </div>

                          <div className={`flex items-center gap-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            <div className="p-2 rounded-lg bg-white/5 text-purple-400">
                              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
