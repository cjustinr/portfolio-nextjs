import React from 'react'
import Skill from './Skill'
import Section from '../Section'

const skills = [
    { title: 'ReactJs', img: 'react.png' },
    { title: 'Redux', img: 'redux.png' },
    { title: 'Javascript', img: 'javascript.png' },
    { title: 'WebSocket', img: 'websocket.png' },
    { title: 'PHP', img: 'php.png' },
    { title: 'Laravel', img: 'laravel.png' },
    { title: 'CodeIgniter', img: 'codeigniter.png' },
    { title: 'jQuery', img: 'jquery.png' },
    { title: 'Bootstrap', img: 'bootstrap.png' },
    { title: 'HTML', img: 'html.png' },
    { title: 'SASS', img: 'sass.png' },
    { title: 'CSS', img: 'css.png' },
    { title: 'Bootstrap', img: 'bootstrap.png' },
    { title: 'MySQL', img: 'mysql.png' },
    { title: 'Magento 2', img: 'magento2.png' },
    { title: 'October CMS', img: 'octobercms.png' },
]
const SkillSection = () => {

    return (
        <Section title="Skills" className="bg-white mt-0 md:mt-6">
            <ul
                className="list-none w-full md:w-4/5 m-auto p-0 flex justify-center gap-5 flex-wrap"
            >
                {skills.map((i, key) => (
                    <Skill key={key} data={{...i, key}} />
                ))}
            </ul>
        </Section>
    )
}

export default SkillSection