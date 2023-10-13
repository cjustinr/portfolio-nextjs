import { motion } from 'framer-motion'
import SocialContact from './SocialContact'
import ContactForm from './ContactForm'
import Section from '../Section'

const ContactSection = () => {
    return (
        <Section title="Contact" className="bg-white mb-0 md:mb-6" id="contact">
            <motion.div 
                initial={{ opacity: 0, translateY: 15 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex relative flex-col md:flex-row">
                {/* <div className="hidden md:block absolute top-0 left-1/2 translate-x-[-50%] h-full w-[2px] bg-fog"></div> */}
                <SocialContact />
                {/* <ContactForm /> */}
            </motion.div>
        </Section>
    )
}

export default ContactSection