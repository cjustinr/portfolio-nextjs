import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-blue-dianne py-4">
            <div className="custom-container">
                <p className="text-white text-xs text-center">All right reseve © {new Date().getFullYear()} Copyright</p>
            </div>
        </footer>
    )
}

export default Footer