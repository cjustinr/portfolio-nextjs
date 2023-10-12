import React from 'react'
import Section from '../Section'
import { motion } from "framer-motion";

const techs = ['Javascript (ES6)', 'React', 'Redux toolkit', 'NextJs', 'Tailwind CSS', 'Websocket']

const AboutSection = () => {
    return (
        <Section title="About me" className="bg-white mb-0 md:mb-6 pt-8 md:pt-12" id="about">
            <motion.div
                initial={{ opacity: 0, translateY: 10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ delay: .3, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex gap-8 flex-col md:flex-row">
                <div className="flex justify-center md:block w-full md:w-1/3 relative">
                    {/* <div className="w-full h-full absolute top-0 left-0 bg-[rgba(83,184,118,0.6)] opacity-1 hover:opacity-0 transition ease-in-out delay-75"></div> */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: .2, duration: 0.8 }}
                        viewport={{ once: true }}
                        src="/img/profile/2x2-min.jpg"
                        className="w-2/3 h-auto md:w-full rounded-[4px] transition ease-in-out delay-75 hover:scale-110"
                        alt="" />
                </div>
                <div className="w-full">
                    <p className="mb-3">Hello! My name is <strong className="text-blue-dianne border-b-2 border-b-fern">Justin</strong>, and I enjoy creating websites that are a pleasure to use. My passion for web development started way back in 2013 when I tried to modify the color skin of my Facebook profile to show my friends that my profile was unique, and my interest in web development ignited.</p>
                    <p className="mb-3">As of today, I'm focusing <strong className="text-blue-dianne border-b-2 border-b-fern">Frontend Development</strong>. In my previous role as a Fullstack Developer I realize how important <strong>UI/UX</strong> and I really enjoy developing uinque UI. Poor UI/UX means uncompetitive web application.</p>

                    <p className="mb-2">Here are a few technologies I'm using as a Frontend Developer:</p>

                    <ul className="w-full sm:w-1/2 list-disc ml-5 font-medium flex flex-wrap gap-3">
                        {techs.map((i, key) => (
                            <li key={key} className="w-[calc(50%-12px)]">{i}</li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </Section>
    )
}

export default AboutSection