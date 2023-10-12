import React from 'react'
import Experience from './Experience'
import Section from '../Section'

const experienceList = [
    {
        id: 1,
        company: 'PlaxOne Technologies LLC',
        position: 'Web Developer',
        stacks: ['ReactJs', 'jQuery', 'Javascript', 'CSS', 'HTML', 'Redux'],
        bullets: [
            'Develop and maintain the web-based data management system of online Betting site using Reactjs with fully improved UI/UX and optimization.',
            'Maintain and implement different template of betting site.'
        ],
        startDate: 'March 2022',
        endDate: 'Present'
    },
    {
        id: 2,
        company: 'IWEB Technology IT-Services',
        position: 'Full Stack Developer',
        stacks: ['PHP Laravel', 'Magento 2', 'jQuery', 'Bootstrap', 'API', 'CRON'],
        bullets: [
            'Worked on creating modules of web-based data management system for a ecommerce website.',
            'Maintain and developed Magento 2 ecommerce for both frontend and backend, lastly managed and maintain content of nearly 100,000 products gathered from multiple providers of well-known electronic devices.',
            'Created API for product content from data management system to ecommerce website.'
        ],
        startDate: 'February 2020',
        endDate: 'December 2021'
    },
    {
        id: 3,
        company: 'Oraclesee Inc',
        position: 'Jr. Web App Developer',
        stacks: ['PHP CodeIgniter', 'jQuery', 'Bootstrap', 'October CMS'],
        bullets: [
            'Collaborate with Sr. Developers to developed and maintain ERP Web Application such as Humman Resource, Accounting and Corporate Management.',
            'Maintain and worked on design of Online Real State Flatform.',
            'Created CMS corporate websites.'
        ],
        startDate: 'May 2019',
        endDate: 'August 2020'
    },
    {
        id: 4,
        company: 'Oraclesee Inc',
        position: 'IT Service Desk',
        stacks: ['Technical Support', 'Troubleshooting', 'Active Directory', 'Server monitoring'],
        bullets: [
            'Responsible for maintenance and backup of internal development servers.',
            'Support of legacy desktops, laptops and servers.',
            'Evaluate new hardware and software to meet company requirements.'
        ],
        startDate: 'August 2017',
        endDate: 'April 2019'
    },
]

const ExperienceSection = () => {

    return (
        <Section title="Experience" className="bg-white" id="experience">
            <div className="relative flex">
                <div className="h-full w-[3px] absolute left-0 top-0 bg-fern"></div>
                <div className="py-0 md:py-[30px]">
                    {experienceList.map((i, key) => (
                        <Experience key={key} data={i} />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default ExperienceSection