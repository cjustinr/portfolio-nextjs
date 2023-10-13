import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ data = {} }) => {
    const { title = '', img = '', key = 0 } = data ?? {}
    return (
        <motion.li
            initial={{ opacity: 0, translateY: 15 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ delay: key * 0.2, duration: 0.3 }}
            viewport={{ once: true }}
            className="w-1/4 md:w-[100px] text-center flex flex-col justify-center items-center gap-1 grayscale-[1] hover:grayscale-0 hover:text-fern">
            <Image width={60} height={60} src={`/img/tools/${img}`} alt={title} className="select-none" />
            <h4 className="text-sm text-inherit">{title}</h4>
        </motion.li>
    )
}

export default Skill