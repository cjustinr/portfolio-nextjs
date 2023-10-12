import React from 'react'
import Heading from '../common/Heading'

const Section = ({ title = '', headingDark = false, children, ...props }) => {
    return (
        <section
            {...props}
            className={`py-5 md:py-7${props?.className ? ' ' + props.className : ''}`}
        >
            <div className="custom-container">
                <Heading isDark={headingDark}>{title}</Heading>
                {children}
            </div>
        </section>
    )
}

export default Section