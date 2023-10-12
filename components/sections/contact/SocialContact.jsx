import Image from 'next/image'
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaMobileScreen } from 'react-icons/fa6'

const iconClassName = "w-[30px] h-[30px] fill-fern"
const socials = [
    { title: 'cjustinr12@gmail.com', icon: <FaEnvelope className={iconClassName}/>, type: 'email' },
    { title: 'linkedin.com/in/carl-justin-romutap', icon: <FaLinkedin className={iconClassName}/>, type: 'linkedin' },
    { title: 'cjustinr', icon: <FaGithub className={iconClassName}/>, type: 'git' },
    { title: '+971581763119', icon: <FaMobileScreen className={iconClassName}/>, type: 'mobile' },
]

const SocialContact = () => {
    return (
        // <div className="w-full md:w-1/2 h-max m-auto mb-5 md:mb-auto">
        <div className="w-full h-max m-auto mb-5 md:mb-auto">
            <ul className="list-none w-full md:w-max m-auto p-0">
                {socials.map((i, key) => <SocialItem key={key} data={i}/>)}
            </ul>
        </div>
    )
}

const SocialItem = ({ data = {} }) => {
    const { title = '', icon = null, type = '' } = data ?? {}

    let hrefPrefix = 'mailto:'
    switch (type) {
        case 'linkedin':
            hrefPrefix = 'https://www.'
            break;
        case 'git':
            hrefPrefix = 'https://github.com/'
            break;
    
        default:
            break;
    }
    return (
        <li className="my-4 mx-0 gap-[10px]">
            <a href={`${hrefPrefix}${title}`} className="text-sm break-all flex items-center gap-2 font-medium hover:underline">{icon} {title}</a>
        </li>
    )
}

export default SocialContact