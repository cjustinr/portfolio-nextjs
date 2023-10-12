import React from 'react'
import Project from './Project'
import Section from '../Section'

const projects = [
    {
        title: 'Groxfy',
        tech: ['ReactJs', 'Redux toolkit', 'Websocket', 'SCSS/SASS'],
        paragraphs: [
            'Groxfy.com is poised to become the go-to platform for UAE shoppers seeking intelligent grocery solutions. By providing a tool that not only simplifies shopping but also enriches savings, Groxfy.com is shaping a future where shopping is both prudent and efficient',
            'In this era of digital commerce, strategic affiliations between Groxfy.com and retailers exemplify the power of collaboration and innovation, marking a promising step toward a prosperous and frugal future for the UAE consumer.',
            'I did the whole frontend development on this project'
        ],
        img: '/img/projects/groxfy/groxfy.png',
        link: 'https://groxfy.com/'
    },
    {
        title: 'Online Betting Data Management System',
        tech: ['React', 'React Bootstrap'],
        paragraphs: [
            'This web application was developed and maintained when I was working with PlaxOne Technologies. The main functionalities of this system are to manage the configuration, players, etc. of the online betting website of our company.',
            'My role on this project is front-end developer. I built it from layout to API implementation using React.'
        ],
        img: '/img/projects/betting-dashboard/betting.png',
        link: 'https://nextra.isctrl.net/'
    },
    
    {
        title: 'Online Betting',
        tech: ['ReactJs', 'Redux toolkit', 'Websocket', 'SCSS/SASS'],
        paragraphs: [
            'A full online betting site contains sports, live sports, online casinos, and many more.',
            'The purpose of developing an online betting site with ReactJs is to improve the current web application and make it lightning fast so that players can enjoy using it.'
        ],
        img: '/img/projects/betting/betting-desktop.png',
        link: 'https://new.changesport365.live/#/sports'
    },
    {
        title: 'Online Betting (mobile version)',
        tech: ['ReactJs', 'Redux toolkit', 'Websocket', 'SCSS/SASS'],
        paragraphs: [
            'This is the mobile version of the online betting site.',
            'The reason why it is separated from the desktop version is to make it faster than the desktop version and easier to use on any kind of mobile device.'
        ],
        img: '/img/projects/mobile-betting/mobile.png',
        link: 'https://m.changesport365.live'
    },
    {
        title: 'Plax1 Corporate Website',
        tech: ['Javascript', 'SCSS/SASS'],
        paragraphs: [
            'This is the corporate website of the previous company where I worked as a web developer.',
            'I built it with pure vanilla Javascript. Why? To achieve lightning-fast website!'
        ],
        img: '/img/projects/plax1/plax1.png',
        link: 'https://plax1.com/'
    },
    {
        title: 'Restaurant Website',
        tech: ['NextJs', 'Tailwind'],
        paragraphs: [
            'I build this website during my lesson of NextJs and tailwind CSS and its fun!.'
        ],
        img: '/img/projects/ramen/ramen.png',
        link: 'https://ramen-olive.vercel.app/'
    },
    {
        title: 'Data Management System of Ecommerce',
        tech: ['Php Laravel', 'jQuery', 'Material UI'],
        paragraphs: [
            'The main functionalities of this system is to managed all data of Magento ecommerce website of our company before IWEB Technology IT-Services. I developed modules here like Return Management, Content Management and Manufacturer Management.'
        ],
        img: '/img/projects/ebp-console/ecommerce.png',
        link: 'https://ebpconsole.ecommercebusinessprime.com/'
    },
    {
        title: 'Magento Ecommerce',
        tech: ['Magento 2', 'Php Laravel'],
        paragraphs: [
            'Magento 2 is an open-source e-commerce platform, and I fully modified and optimized it from design, layout, product synchronization, product content, creation of extensions, and background processes. The product data for this is also linked to the data management system on which I worked.',
            'This project was previously developed as a full-stack developer at my previous company, IWEB Technology IT-Services.'
        ],
        img: '/img/projects/ebp/magento-ecom.png',
        link: 'https://www.ecommercebusinessprime.com/'
    },
    {
        title: 'My Portfolio',
        tech: ['NextJs', 'Tailwind CSS'],
        paragraphs: [
            'I choose NextJs to develop my portfolio to make it fast and seo friendly.',
            'Want this layout?, check my repository now!',
            'Sharing is caring!.'
        ],
        img: '/img/projects/portfolio/portfolio.png',
        link: '',
        repo: ''
    },
    
    
]
const ProjectSection = () => {
    /* return (
        <section className="bg-blue-dianne py-14" id="projects">
            <div className="custom-container">
                <Heading isDark>
                    Projects
                </Heading>

                {projects.map((i, key) => (
                    <Project key={key} data={i} imgPosition={key % 2 == 0 ? 'right' : 'left'} />
                ))}
            </div>
        </section>
    ) */

    return (
        <Section 
            title="Projects" 
            headingDark
            className="bg-blue-dianne py-6 md:py-11">
            {projects.map((i, key) => (
                <Project 
                    key={key} 
                    data={{...i, key}} 
                    imgPosition={key % 2 == 0 ? 'right' : 'left'} 
                    isLast={key+1 === projects.length}
                    />
            ))}
        </Section>
    )
}

export default ProjectSection