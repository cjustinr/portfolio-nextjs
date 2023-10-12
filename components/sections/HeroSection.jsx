import React from 'react'
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section
            className="bg-blue-dianne"
        >
            <div className="custom-container">
                <div className="h-screen w-full flex flex-col justify-center items-center">
                    <div className="w-full sm:w-[440px]">
                        <motion.h1
                            initial={{ opacity: 0, translateY: 10 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ delay: .5, duration: 0.3 }}
                            viewport={{ once: true }}
                            className="text-4xl text-fog flex flex-col text-center font-semibold mb-9">
                            <span className="text-base text-fern text-left">Hi, I'm</span> Carl Justin Romutap</motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, translateY: 10 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ delay: .7, duration: 0.3 }}
                            viewport={{ once: true }}
                            className="text-fog text-base leading-7 text-center sm:text-start">A professional <span className="text-fern text-[26px]">Web Developer</span> with extensive experience building websites and web applications.</motion.p>
                        <motion.h2 
                            initial={{ opacity: 0, translateY: 10 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ delay: .9, duration: 0.3 }}
                            viewport={{ once: true }}
                            className="text-fern mt-5 text-sm text-center">I am currently looking for a challenging role as a <span className="text-3xl text-fog underline">Frontend Developer</span></motion.h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection