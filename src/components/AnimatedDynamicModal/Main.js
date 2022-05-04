import { AnimatedFullScreen } from './AnimatedFullScreen';
import { AnimatedBanner } from './AnimatedBanner';
import { AnimatedModal } from './AnimatedModal';
import { useState , useEffect} from 'react'
import { FaTimesCircle } from "react-icons/fa";
import { AnimatedBottomSheet } from './AnimatedBottomSheet';

export const AnimatedDynamicModal = props => {
    const {
        type, // banner, modal, fullscreen
        themeColor,
        fontColor,
        icon,
        headerText,
        headerItems,
        bodyItems,
        bodyDropDown,
        children,
        footer,
        footerText,
        footerItems, 
        dismissable,
        delay,
        showModal,
    } = props

    const [clicked, setClicked] = useState(true)
    const isDismissable = props => {
        if (dismissable) { return <FaTimesCircle onClick={() => setClicked(false)} ></FaTimesCircle> } 
    }

    useEffect(() => {
        if ((!dismissable && !delay) || (dismissable && !delay)) 
            setClicked(true)
        const timeId = setTimeout(() => {
            if (delay && delay > 0) { setClicked(false) } 
        }, delay) 
        return () => { clearTimeout(timeId) }
    }, []);

    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }
    
    const viewType = (type) => {
        switch(type) {
            case 'banner': 
                return <AnimatedBanner   
                        {...props}
                        clicked={clicked}
                        backdrop={backdrop} 
                        isDismissable={isDismissable} />
                break;
            case 'modal': 
                return <AnimatedModal 
                        {...props} 
                        backdrop={backdrop} 
                        clicked={clicked}
                        isDismissable={isDismissable}
                        setClicked={setClicked}/> 
                break;
            case 'fullscreen': 
                return <AnimatedFullScreen
                        {...props} 
                        backdrop={backdrop}
                        isDismissable={isDismissable}  
                        clicked={clicked}/>
                break;
            case 'bottom sheet': 
                return <AnimatedBottomSheet 
                        {...props}
                        clicked={clicked}
                        backdrop={backdrop} 
                        setClicked={setClicked}
                        isDismissable={isDismissable}
                        />
                break;
            default: 
                return <AnimatedModal 
                        {...props} 
                        backdrop={backdrop} 
                        clicked={clicked}
                        isDismissable={isDismissable}
                        setClicked={setClicked}/> 
                break;
        }
    }
    // if (clicked) { return null }
    return viewType(type)
}