import React from 'react'
import { motion } from "framer-motion";

const Experience = ({ data = {} }) => {
    const { company = '', position = '', startDate = '', endDate = '', stacks = [], bullets = [] } = data ?? {}
    return (
        <div className="mb-5 mt-0 mx-0 relative pt-5 pl-5 md:pl-[250px] md:pt-0 md:mb-10">
            <motion.h4
                initial={{ opacity: 0, translateY: 10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg leading-tight mt-0 mx-0 mb-1 font-bold">{company} - <span className="font-normal border-b-[3px] border-fern text-dune">{position}</span></motion.h4>
            <motion.div
                initial={{ opacity: 0, translateX: 10 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="font-semibold absolute left-0 translate-y-2/4 flex items-center gap-[5px] text-xs text-dune top-[-16px] md:top-2/4 before:content-[''] before:block before:w-10 before:h-[3px] before:bg-fern">
                {startDate} - {endDate}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateY: 10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
            >
                <small className="text-xs font-medium">{stacks.join(', ')}</small>
                <ul className="mb-0 mt-3 pl-7 list-disc">
                    {bullets.map((i, key) => (
                        <li key={key} className="text-sm leading-normal font-normal">{i}</li>
                    ))}
                </ul>
            </motion.div>
        </div>
    )
}

export default Experience