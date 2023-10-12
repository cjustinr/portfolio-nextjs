import React from 'react'
import { motion } from "framer-motion";

const Heading = ({ isDark = false, children }) => {
    return (
        <div

            className="mb-6">
            <h1

                className={`flex items-center gap-2 ${isDark ? 'text-fern-light-2' : 'text-dune'} text-2xl font-bold`}>
                <motion.span
                    className={isDark ? 'text-fern-light-2' : 'text-dune'}
                    initial={{ opacity: 0, translateX: -20 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ delay: .3, duration: 0.3 }}
                    viewport={{ once: true }}
                >{children}</motion.span>
                <motion.span
                    initial={{ opacity: 0, translateX: 20 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ delay: .3, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="h-[2px] w-48 bg-fog"
                ></motion.span>
            </h1>
        </div>
    )
}

export default Heading