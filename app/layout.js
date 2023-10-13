import { poppins } from '@/components/variables/fonts'
import './globals.css'

export const metadata = {
    title: 'Carl Justin Romutap',
    description: 'My name is Carl Justin Romutap, an enthusiastic frontend developer.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.variable}`}>

                {/* <NavBar />
                <main>
                    {children}
                </main>
                <Footer /> */}
                {children}
            </body>
        </html>
    )
}
