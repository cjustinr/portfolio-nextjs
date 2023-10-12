import React from 'react'
import Education from './Education'
import Section from '../Section'
import { motion } from "framer-motion";

const educations = [
    {
        id: 1,
        title: 'BS Information Technology',
        school: 'AMA Computer College',
        startDate: 'May 2014',
        endDate: 'May 2017',
        address: 'Ilocos Norte, Philippines'
    },
    {
        id: 2,
        title: 'Computer System Design & Programming',
        school: 'AMA Computer Learning Center',
        startDate: 'May 2012',
        endDate: 'May 2014',
        address: 'Ilocos Sur, Philippines'
    },
]
const EducationSection = () => {
    return (
        <Section title="Education" className="bg-white mb-0 md:mb-6">
            {/* <div className="custom-container">
                <Heading>
                    Education
                </Heading>
                <div className="flex gap-5">
                    {educations.map((i, key) => (
                        <Education key={key} data={i} />
                    ))}
                </div>
            </div> */}
            <div className="flex gap-5 flex-col md:flex-row">
                {educations.map((i, key) => (
                    <Education key={key} data={i} />
                ))}
            </div>
        </Section>
    )
}

export default EducationSection