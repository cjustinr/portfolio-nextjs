import React from 'react'

const Button = ({
    isLink = true,
    children,
    ...props
}) => {
    const className = 'text-fern border border-fern py-2 px-4 rounded-[5px] text-sm hover:bg-fern-light'
    if (isLink) {
        return (
            <a
                {...props}
                className={`${className} cursor-pointer ${props?.className}`}>
                {children}
            </a>
        )
    } else {
        return (
            <button
                {...props}
                className={`${className} ${props?.className}`}>
                {children}
            </button>
        )
    }
}

export default Button