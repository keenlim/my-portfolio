import {motion, useAnimation, useAnimationControls} from 'framer-motion';



const TextSpan = ({children}) => {
    const controls = useAnimationControls();

    const rubberBand = () => {
        controls.start({
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.4, .55, 1)",
                "scale3d(.75, 1.25, 1)",
                "scale3d(1.25, .85, 1)",
                "scale3d(.9, 1.05, 1)",
                "scale3d(1, 1, 1)",
            ],
        })
    }

    

    return(
        <motion.span 
        animate ={controls}
        onMouseOver = {() => 
            {
                rubberBand()
            }}
         >
            {children}
        </motion.span>
    )
}

export default TextSpan;