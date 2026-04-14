import { motion} from "framer-motion"
import { cardVariants } from "./BentoMotionVariants"


export default function BentoCard({
    children, 
    styleInsert = "col-span-1", 
    disableHoverEvents = false,
    addBorder = false,
} : {
    children: any, 
    styleInsert?: string, 
    disableHoverEvents?: boolean,
    addBorder?: boolean
}) {
    return (
        <div className={`${styleInsert} relative group h-full`}>
            <motion.div 
                variants={cardVariants} 

                whileHover={!disableHoverEvents ? { scale: 1.01 } : {}}
                
                className={`
                    w-full h-full p-5 flex flex-col
                    bg-surface rounded-3xl shadow-md origin-center
                    
                    ${!disableHoverEvents && `transition-[box-shadow,color] duration-300 
                        group-hover:ring-accent group-hover:ring-2 
                        group-hover:shadow-accent/20`}
                        
                    ${addBorder && "bento-card-border-glass"} 
                    transform-gpu backface-visibility-hidden
                `}
            >
                {children}
            </motion.div>
        </div>
    )
}