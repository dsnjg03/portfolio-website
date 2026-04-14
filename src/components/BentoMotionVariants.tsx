import {type Variants} from "framer-motion"

export const cardVariants:Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { type: "spring", stiffness: 260, damping: 20 }
    }
};
export const gridVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1 // Wait 0.1 seconds between each card animating!
        }
    }
};