import { motion, AnimatePresence } from "framer-motion";
import { SheetList, Container } from "./styles";
import { Body } from "./Body";

export const AnimatedBottomSheet = props => {
    const {
        clicked,
        setClicked, 
        backdrop
    } = props

    const modal = {
        visible: { y: 0 },
        hidden: { y: "100%" }
    }

    const handleParentClick = (e) => { 
        console.log('parent');
        setClicked(false)
    }
    
    const handleChildClick = (e) => {
        e.stopPropagation();
        console.log('child');
    }

    return <AnimatePresence>
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
                alignItems: 'end',
                zIndex:5
            }} 
            variants={backdrop} 
            initial='hidden'
            animate='visible'
            exit='hidden'
            onClick={e => handleParentClick(e)}
            >
            <motion.div 
                style={{
                    display: 'flex',
                    // border: '2px solid red',
                    width:'100%',
                    flexDirection:'column',
                    backgroundColor:'white',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    overflow:'hidden'
                }}
                variants={modal}
                transition={{
                    type: "spring",
                    damping: 40,
                    stiffness: 400
                }}
                initial='hidden'
                animate='visible'
                exit='hidden'
                onClick={e => handleChildClick(e)} >
                <Body {...props} ></Body>
            </motion.div>
        </motion.div>}
    </AnimatePresence>
}