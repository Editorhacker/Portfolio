import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        org: "",
        services: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        // Simulate API call
        setTimeout(() => {
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", org: "", services: "", message: "" });
        }, 1500);
    };

    return (
        <section id="contact" className="min-h-screen bg-zinc-950 pt-24 pb-12 px-4 sm:px-12 lg:px-24 flex flex-col justify-between">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                {/* Left Side: Heading & Form */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white mb-12 md:mb-16 tracking-tight">
                            Let's start a <br className="hidden md:block" /> project together
                        </h2>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="space-y-12 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <label htmlFor="name" className="block text-sm uppercase tracking-wider text-zinc-500 mb-4 group-focus-within:text-white transition-colors duration-300">
                                01 &nbsp; What's your name?
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe *"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl md:text-2xl text-white focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-zinc-700"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <label htmlFor="email" className="block text-sm uppercase tracking-wider text-zinc-500 mb-4 group-focus-within:text-white transition-colors duration-300">
                                02 &nbsp; What's your email?
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@doe.com *"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl md:text-2xl text-white focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-zinc-700"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <label htmlFor="org" className="block text-sm uppercase tracking-wider text-zinc-500 mb-4 group-focus-within:text-white transition-colors duration-300">
                                03 &nbsp; What's the name of your organization?
                            </label>
                            <input
                                type="text"
                                id="org"
                                name="org"
                                placeholder="John & Doe ®"
                                value={formData.org}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl md:text-2xl text-white focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-zinc-700"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <label htmlFor="services" className="block text-sm uppercase tracking-wider text-zinc-500 mb-4 group-focus-within:text-white transition-colors duration-300">
                                04 &nbsp; What services are you looking for?
                            </label>
                            <input
                                type="text"
                                id="services"
                                name="services"
                                placeholder="Web Design, Development..."
                                value={formData.services}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl md:text-2xl text-white focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-zinc-700"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <label htmlFor="message" className="block text-sm uppercase tracking-wider text-zinc-500 mb-4 group-focus-within:text-white transition-colors duration-300">
                                05 &nbsp; Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Hello Aditya, can you help me with..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="3"
                                className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl md:text-2xl text-white focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-zinc-700 resize-none"
                            ></textarea>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="pt-8"
                        >
                            <button
                                type="submit"
                                className="group relative inline-flex items-center gap-4 text-white text-xl font-medium"
                            >
                                <div className="relative overflow-hidden h-8 flex items-center">
                                    <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-full block">Send it!</span>
                                    <span className="absolute top-full left-0 z-10 transition-transform duration-300 group-hover:-translate-y-full block text-zinc-400">Send it!</span>
                                </div>

                                <span className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-500 text-white">
                                    <ArrowUpRight className="w-6 h-6" />
                                </span>
                            </button>
                            {status && <p className="mt-6 text-sm text-zinc-400 animate-pulse">{status}</p>}
                        </motion.div>
                    </form>
                </div>

                {/* Right Side: Contact Details */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="lg:w-1/3 flex flex-col gap-12 mt-12 lg:mt-32"
                >
                    <div>
                        <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Contact Details</h4>
                        <a href="mailto:hello@aditya.dev" className="block text-lg md:text-xl text-white hover:text-blue-500 transition-colors mb-2">
                            hello@aditya.dev
                        </a>
                        <a href="tel:+911234567890" className="block text-lg md:text-xl text-white hover:text-blue-500 transition-colors">
                            +91 123 456 7890
                        </a>
                    </div>

                    <div>
                        <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Socials</h4>
                        <div className="flex flex-col gap-2">
                            {['LinkedIn', 'Instagram', 'Twitter', 'Github'].map((social) => (
                                <a key={social} href="#" className="text-lg md:text-xl text-white hover:text-blue-500 transition-colors flex items-center gap-2 group">
                                    {social}
                                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Location</h4>
                        <p className="text-lg md:text-xl text-white">
                            Pune, India <br />
                            <span className="text-zinc-500 text-base">Local Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
