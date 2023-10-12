import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { motion } from "framer-motion";

const iconClassName = 'fill-fog text-2xl hover:fill-fern'
const socialLinks = [
    { id: 1, title: 'cjustinr12@gmail.com', link: 'mailto:cjustinr12@gmail.com', icon: <FaEnvelope className={iconClassName} /> },
    { id: 2, title: 'https://www.linkedin.com/in/carl-justin-romutap', link: 'https://www.linkedin.com/in/carl-justin-romutap', icon: <FaLinkedin className={iconClassName} />, newTab: true },
    { id: 3, title: 'https://github.com/cjustinr', link: 'https://github.com/cjustinr', icon: <FaGithub className={iconClassName} />, newTab: true },
]

const SocialLinks = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="flex items-center gap-4">
            {socialLinks.map((i, key) => {
                const { id = '', title = '', link = '', icon = null, newTab = false } = i ?? {}

                return (
                    <a
                        key={id}
                        className="text-fog hover:pb-2 transition ease-in-out delay-75"
                        href={link}
                        title={title}
                        target={newTab ? '_blank' : ''}>{icon}</a>
                )
            })}
        </motion.div>
    )
}

export default SocialLinks