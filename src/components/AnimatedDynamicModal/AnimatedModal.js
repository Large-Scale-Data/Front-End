import { motion, AnimatePresence } from "framer-motion";
import { Body } from "./Body";

export const AnimatedModal = (props) => {
    const { backdrop, clicked, setClicked} = props 

    const handleParentClick = (e) => { 
        console.log('parent');
        setClicked(false)
    }
    
    const handleChildClick = (e) => {
        e.stopPropagation();
        console.log('child');
    }

    return <AnimatePresence exitBeforeEnter>
        {clicked && <motion.div 
            style={{
                // border: '2px solid green',
                display: 'flex',
                position:'fixed',
                top:0,
                left:0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.5)',
                alignItems: 'center',
                zIndex:2
            }} 
            variants={backdrop} 
            initial='hidden'
            animate='visible'
            exit='hidden'
            // onClick={(e) => handleParentClick(e)}
            >
            <motion.div 
                style={{
                    // border: '2px solid red',
                    borderRadius: '10px',
                    width: '75%',
                    height: '50%',
                    overflow:'hidden',
                    margin:' 0 auto'
                }}
                // onClick={(e) => handleChildClick(e)}
                >
                <Body {...props} ></Body>
            </motion.div>
        </motion.div>}
    </AnimatePresence>;
}
  