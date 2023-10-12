const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                poppins: ["var(--font-poppins)", ...fontFamily.sans],
            },
            colors: {
                'blue-dianne': '#1B4752',
                'fog': '#ccd6f6',
                'fern': '#53b876',
                'fern-light': 'rgba(83, 184, 118, 0.1)',
                'fern-light-2': 'rgb(161 217 168)',
                'dune': '#333',
                'junglemist': '#b6ced8',
            }
        },
    },
    plugins: [],
}
