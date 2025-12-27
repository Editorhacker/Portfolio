import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle, XCircle, X } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        org: "",
        services: "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const showNotification = (type, message) => {
        setNotification({ type, message });
        // Auto dismiss after 5 seconds
        setTimeout(() => {
            setNotification(null);
        }, 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        // Web3Forms Configuration
        // TODO: Replace with your actual Web3Forms Access Key
        // Get your access key from https://web3forms.com/
        const ACCESS_KEY = "1ad1f3ac-6069-4ced-a190-38776d09c19b";

        try {
            // Prepare form data for Web3Forms
            const formDataToSend = new FormData();
            formDataToSend.append("access_key", ACCESS_KEY);
            formDataToSend.append("name", formData.name);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("organization", formData.org);
            formDataToSend.append("message", formData.message);
            formDataToSend.append("subject", `New Contact Form Message from ${formData.name} `);

            // Optional: Add more metadata
            formDataToSend.append("from_name", "Portfolio Contact Form");

            // Send to Web3Forms API
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                console.log("Email sent successfully!", data);
                setStatus("");

                // Show custom success notification
                showNotification("success", "Message sent successfully! I'll get back to you soon.");

                // Clear form after successful submission
                setFormData({ name: "", email: "", org: "", services: "", message: "" });
            } else {
                throw new Error(data.message || "Failed to send email");
            }
        } catch (error) {
            console.error("Failed to send email:", error);
            setStatus("");

            // Show custom error notification
            showNotification("error", "Oops! Something went wrong. Please try again or email me directly at adityasutar2807@gmail.com");
        }
    };


    return (
        <>
            {/* Custom Notification Toast */}
            <AnimatePresence>
                {notification && (
                    <motion.div
                        initial={{ opacity: 0, y: -100, scale: 0.3 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                        className="fixed top-24 right-4 sm:right-8 z-50 max-w-md"
                    >
                        <div className={`rounded-2xl p-6 shadow-2xl backdrop-blur-xl border ${notification.type === 'success'
                            ? 'bg-blue-600/90 border-blue-400/20'
                            : 'bg-red-600/90 border-red-400/20'
                            }`}>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    {notification.type === 'success' ? (
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    ) : (
                                        <XCircle className="w-6 h-6 text-white" />
                                    )}
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-white font-semibold mb-1">
                                        {notification.type === 'success' ? 'Success!' : 'Error!'}
                                    </h3>
                                    <p className="text-white/90 text-sm leading-relaxed">
                                        {notification.message}
                                    </p>
                                </div>

                                <button
                                    onClick={() => setNotification(null)}
                                    className="flex-shrink-0 text-white/70 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Contact Section */}
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
                                <label htmlFor="name" className="block text-sm uppercase tracking-wider text-zinc-500 mb-3 group-focus-within:text-white transition-colors duration-300">
                                    01 &nbsp; What's your name?
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Adi Sutar *"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-xl md:text-2xl text-white focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-zinc-700"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <label htmlFor="email" className="block text-sm uppercase tracking-wider text-zinc-500 mb-3 group-focus-within:text-white transition-colors duration-300">
                                    02 &nbsp; What's your email?
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="adisutar123@gmail.com *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-xl md:text-2xl text-white focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-zinc-700"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <label htmlFor="org" className="block text-sm uppercase tracking-wider text-zinc-500 mb-3 group-focus-within:text-white transition-colors duration-300">
                                    03 &nbsp; What's the name of your organization?
                                </label>
                                <input
                                    type="text"
                                    id="org"
                                    name="org"
                                    placeholder="Organization Name"
                                    value={formData.org}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-xl md:text-2xl text-white focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-zinc-700"
                                />
                            </motion.div>

                            {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <label htmlFor="services" className="block text-sm uppercase tracking-wider text-zinc-500 mb-3 group-focus-within:text-white transition-colors duration-300">
                                04 &nbsp; What services are you looking for?
                            </label>
                            <input
                                type="text"
                                id="services"
                                name="services"
                                placeholder="Web Design, Development..."
                                value={formData.services}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-zinc-800 py-3 text-xl md:text-2xl text-white focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-zinc-700"
                            />
                        </motion.div> */}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <label htmlFor="message" className="block text-sm uppercase tracking-wider text-zinc-500 mb-4 group-focus-within:text-white transition-colors duration-300">
                                    04 &nbsp; Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Hello Aditya, can you help me with..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="3"
                                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-xl md:text-2xl text-white focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-zinc-700 resize-none"
                                ></textarea>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="pt-7 justify-center"
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
                            <a href="mailto:adityasutar2807@gmail.com" className="block text-lg md:text-xl text-white hover:text-blue-500 transition-colors mb-2">
                                adityasutar2807@gmail.com
                            </a>
                            <a href="tel:+919767126282" className="block text-lg md:text-xl text-white hover:text-blue-500 transition-colors">
                                +91 9767126282
                            </a>
                        </div>

                        <div>
                            <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Socials</h4>
                            <div className="flex flex-col gap-2">
                                <a href="https://www.linkedin.com/in/aditya-sutar/" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-white hover:text-blue-500 transition-colors flex items-center gap-2 group">
                                    LinkedIn
                                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </a>
                                <a href="https://www.instagram.com/__adi__creation/" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-white hover:text-blue-500 transition-colors flex items-center gap-2 group">
                                    Instagram
                                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </a>
                                {/* <a href="https://twitter.com/aditya_sutar" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-white hover:text-blue-500 transition-colors flex items-center gap-2 group">
                                Twitter
                                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </a> */}
                                <a href="https://github.com/Editorhacker" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-white hover:text-blue-500 transition-colors flex items-center gap-2 group">
                                    Github
                                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Location</h4>
                            <p className="text-lg md:text-xl text-white">
                                Mumbai, India <br />
                                <span className="text-zinc-500 text-base">Local Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Contact;

