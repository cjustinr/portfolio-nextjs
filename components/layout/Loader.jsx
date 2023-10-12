"use client"
import { motion } from "framer-motion";

const Loader = ({ setShowContent = () => null }) => {

    return
    return (
        <motion.div
            initial={{ clipPath: 'circle(80% at 50% 50%)' }}
            animate={{ clipPath: 'circle(0% at 50% 50%)' }}
            transition={{ duration: 0.8 }}
            onAnimationStart={() => setShowContent(true)}
            // onAnimationIteration={() => console.log('aaaa')}
            className="bg-fog fixed z-50 top-0 left-0 w-full h-full"
        >
        </motion.div>
    )
}

export default Loader