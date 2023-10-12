"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import Button from '../../common/Button'
import { motion } from "framer-motion";
import SocialLinks from './SocialLinks';

const navLinks = [
    { id: 1, value: 'About', link: 'about' },
    { id: 3, value: 'Experience', link: 'experience' },
    { id: 4, value: 'Projects', link: 'projects' },
    { id: 5, value: 'Contact', link: 'contact' },
]

const NavBar = () => {
    const [header, setHeader] = useState('show-top') // show-top
    const [lastScrollPosition, setLastScrollPosition] = useState(0)
    const [isOpenNav, setIsOpenNav] = useState(false);

    useEffect(() => {
        window?.addEventListener('scroll', onScroll)

        return () => window?.removeEventListener('scroll', onScroll)
    }, [lastScrollPosition])

    useEffect(() => {
        document.body.style.overflow = isOpenNav ? "hidden" : "unset";
        // console.log(document.body.clientWidth)
    }, [isOpenNav]);

    const onScroll = useCallback((e) => {
        const scrollPos = document?.documentElement?.scrollTop ?? 0
        let newHeader = 'show-top'

        if (scrollPos > 100) {
            newHeader = 'scroll-top-show'
        } else {
            newHeader = 'scroll-top-hide'
        }
        if (scrollPos === 0) {
            newHeader = 'show-top'
        } else {
            if ((scrollPos <= 300 || lastScrollPosition > scrollPos)) {
                newHeader = 'show'
            } else if ((scrollPos > 300)) {
                newHeader = 'hide'
            }
        }
        setHeader(newHeader)

        setLastScrollPosition(scrollPos)
    }, [header, lastScrollPosition])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    const onToggleNav = () => {
        if (window.innerWidth < 640) {
            setIsOpenNav((p) => !p);
        }
    };

    let scrollClassName = 'shadow-none '
    switch (header) {
        case 'show':
            scrollClassName = 'translate-y-[0%] shadow-[0_1px_3px_1px_rgba(0,0,0,0.3)]'
            break;
        case 'hide':
            scrollClassName += 'translate-y-[-100%]'
            break;

        default:
            break;
    }

    let scrollTopClassName = lastScrollPosition > 100 ? 'opacity-1 visible' : ' opacity-0 invisible'

    return (
        <>
            <header className={`fixed top-0 left-0 z-30 w-full py-3 bg-blue-dianne transition ease-in-out delay-200 duration-300 ${scrollClassName}`}>
                <div className="custom-container flex justify-between">
                    <SocialLinks />
                    <motion.div 
                        initial={{ opacity: 0}}
                        // whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className={`visible relative z-20 w-[33px] border-2 border-fern p-1 rounded-[3px] sm:hidden`} onClick={onToggleNav}>
                        <div
                            className={`h-[3px] w-full bg-fern transition delay-300 duration-300 ease-in-out ${isOpenNav ? "translate-y-[7px] rotate-[42deg]" : ""
                                }`}
                        ></div>
                        <div
                            className={`my-1 h-[3px] w-full bg-fern transition delay-300 duration-300 ease-in-out ${isOpenNav ? "opacity-0" : "opacity-100"
                                }`}
                        ></div>
                        <div
                            className={`h-[3px] w-full bg-fern transition delay-300 duration-300 ease-in-out ${isOpenNav
                                ? "-translate-y-[7px] -rotate-[42deg]"
                                : "translate-y-0 rotate-0"
                                }`}
                        ></div>
                    </motion.div>
                    <nav
                        
                        className={`fixed right-0 top-[53px] z-10 flex h-[calc(100vh-53px)] w-screen flex-col items-center justify-center gap-4 sm:gap-[30px] bg-fog transition delay-100 duration-300 ease-in-out ${!isOpenNav ? "translate-x-full" : ""
                            } sm:static sm:h-full sm:w-auto sm:translate-x-0 sm:flex-row sm:items-center sm:justify-end sm:bg-transparent`}>
                        {navLinks.map(({ id = '', value = '', link = '' }, key) => (
                            <motion.a
                                initial={{ opacity: 0, translateY: -40 }}
                                // whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                exit={{ opacity: 0, translateY: -40 }}
                                transition={{ delay: key * 0.2, duration: 0.3 }}
                                // viewport={{ once: true }}
                                key={key+'nav-link'}
                                href={`#${link}`}
                                className=" text-2xl text-blue-dianne p-4 sm:text-fog sm:text-sm sm:p-0 w-full sm:w-auto text-center hover:text-fern"
                                onClick={() => setIsOpenNav(false)}
                            >{value}</motion.a>
                        ))}
                        <motion.div
                            className="flex"
                            initial={{ opacity: 0, translateY: -40 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ delay: 5 * 0.2, duration: 0.3 }}
                        >
                            <Button
                                className="!text-lg sm:!text-sm !py-4 !px-7 sm:!py-2 sm:!px-4"
                                isLink
                            >Resume</Button>
                        </motion.div>
                    </nav>
                </div>
            </header>

            <div
                className={`fixed bottom-10 right-4 w-[35px] h-[35px] z-10 cursor-pointer transition ease-in-out delay-200 duration-300 flex justify-center items-center bg-fern rounded-[50%] shadow-lg ${scrollTopClassName}`}
                onClick={scrollToTop}
            >
                <FaArrowUp />
            </div>
        </>
    )
}

export default NavBar