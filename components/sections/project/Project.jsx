import Button from '@/components/common/Button'
import Image from 'next/image'
import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa6';
import { HiExternalLink } from 'react-icons/hi';

const Project = ({
    data = {},
    imgPosition = 'right',
    isLast = false
}) => {
    const { title = '', tech = [], paragraphs = '', img = '', link = '', key = 0, repo = '' } = data ?? {}

    return (
        <div className={`flex gap-5 ${!isLast ? 'mb-10' : ''} flex-col-reverse ${imgPosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <motion.div
                initial={{ opacity: 0, translateX: (imgPosition === 'right' ? -15 : 15) }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full h-max m-auto md:w-2/5">
                <h3 className="text-[22px] font-bold leading-normal flex gap-1 text-fern mb-5 before:content-[''] before:block before:w-[3px] before:bg-fog">{title}</h3>
                <div className="flex items-center gap-[10px]">
                    <Image
                        src="/img/tools.png"
                        width={25}
                        height={25}
                    />
                    <h5 className="text-xs font-normal my-auto mx-0 text-fog">{tech.join(', ')}</h5>
                </div>
                {paragraphs.map((i, key) => (
                    <p key={key} className="text-base leading-normal text-fog my-4">{i}</p>
                ))}
                {(link || repo) &&
                    <div className="flex items-center gap-5">
                        {link &&
                            <a
                                href={link}
                                target="_blank"
                                className="text-fern border border-fern py-2 px-6 rounded-[5px] text-xl md:text-sm hover:bg-fern-light cursor-pointer md:px-4 flex items-center gap-1"
                            >View <HiExternalLink className="text-2xl md:text-xl fill-fern"/> </a>
                        }
                        {repo &&
                            <a href={repo} target='_blank' title="GitHub">
                                <FaGithub className="text-4xl fill-fern hover:scale-[1.2] md:text-2xl"/>
                            </a>
                        }
                    </div>
                }
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateX: (imgPosition === 'right' ? 15 : -15) }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full md:w-3/5">
                <img
                    src={img}
                    className="w-full h-auto rounded-[10px] md:scale-[0.9] transition ease-in-out delay-75 hover:scale-[1]"
                />
            </motion.div>
        </div>
    )
}

export default Project