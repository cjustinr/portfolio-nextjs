"use client"
import Footer from '@/components/layout/Footer'
import Loader from '@/components/layout/Loader'
import NavBar from '@/components/layout/navbar/NavBar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/about/AboutSection'
import ContactSection from '@/components/sections/contact/ContactSection'
import EducationSection from '@/components/sections/education/EducationSection'
import ExperienceSection from '@/components/sections/experience/ExperienceSection'
import ProjectSection from '@/components/sections/project/ProjectSection'
import SkillSection from '@/components/sections/skill/SkillSection'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
    const [showContent, setShowContent] = useState(false)
    return (
        <AnimatePresence>
            <Loader key={'loader'} setShowContent={setShowContent} />
            <NavBar key={'navbar'} animateStart={showContent} />
            <main>
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <EducationSection />
                <ProjectSection />
                <SkillSection />
                <ContactSection />
            </main>
            <Footer key={'footer'} />
        </AnimatePresence>
    )
}
