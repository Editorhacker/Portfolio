import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
    "Hello",            // English
    "Bonjour",          // French
    "Hola",             // Spanish
    "Ciao",             // Italian
    "Olá",              // Portuguese
    "Hallo",            // German
    "नमस्ते",            // Hindi
    "こんにちは",         // Japanes
    "Привет",           // Russian
    "Merhaba",          // Turkish
];

const Preloader = ({ finishLoading }) => {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index == words.length - 1) {
            // Wait a bit on the last word before finishing loading
            // finishLoading passed from App.jsx controls the state to remove this component
            // We don't call it immediately so the last word is visible
            return;
            // Actually, we need to trigger the exit. 
            // In layout, often the exit is triggered by the parent state change.
            // If I call finishLoading(), parent sets isLoading(false), this component exits.
        }
        setTimeout(() => {
            setIndex(index + 1);
        }, index == 0 ? 1000 : 150);
    }, [index]);

    // Separate useEffect for the completion logic to trigger finishLoading
    useEffect(() => {
        if (index === words.length - 1) {
            const timer = setTimeout(() => {
                finishLoading();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [index, finishLoading]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;

    // We want the curve to flatten only at the very end or keep its shape. 
    // For a "solid" swipe effect, keeping the curve shape while moving the container up is often better.
    // However, to mimic the "pulling" effect, we can flatten it slightly.
    // Let's try keeping it simple: The curve stays, but we move the whole container further up.

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: initialPath, // Keep the shape
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    }

    return (
        <motion.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black cursor-wait"
        >
            {dimension.width > 0 && (
                <>
                    <motion.p
                        variants={opacity}
                        initial="initial"
                        animate="enter"
                        className="text-white text-4xl sm:text-6xl font-myFont flex items-center z-10"
                    >
                        <span className="block w-2.5 h-2.5 bg-white rounded-full mr-2.5"></span>
                        {words[index]}
                    </motion.p>

                    <svg className="absolute w-full h-[calc(100%+300px)] top-0 left-0 pointer-events-none fill-gray-700">
                        <motion.path
                            variants={curve}
                            initial="initial"
                            exit="exit"
                        />
                    </svg>
                </>
            )}
        </motion.div>
    );
};

const slideUp = {
    initial: {
        y: 0
    },
    exit: {
        y: "-120vh", // Move further up to clear the curve (100vh + extra)
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
}

const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: { duration: 1, delay: 0.2 }
    },
}

export default Preloader;
