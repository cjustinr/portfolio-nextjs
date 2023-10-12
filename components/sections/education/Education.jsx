import React from 'react'
import { motion } from "framer-motion";

const Education = ({ data = {} }) => {
    const { title = '', school = '', startDate = '', endDate = '', address = '', id = 1 } = data ?? {}
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ delay: id * 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2">
            <h3 className="text-lg mb-1 border-b-[3px] border-fern w-fit font-bold">{title}</h3>
            <h5 className="text-sm m-0 font-bold">{school}</h5>
            <small className="text-xs text-fern font-bold">{startDate} - {endDate}</small>
            <p className="text-xs italic font-semibold mt-[6px] my-0 mb-0">{address}</p>
        </motion.div>
    )
}

export default Education