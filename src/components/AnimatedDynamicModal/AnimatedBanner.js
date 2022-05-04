import { motion, AnimatePresence } from "framer-motion";
import { DynamicHeader } from "components/DynamicHeader";
import { DropDown } from "components/General/DropDown";
import React from "react";
import { Banner } from "./styles";
import { AnimatedDropDown } from "components/General/AnimatedDropDown";

export const AnimatedBanner = (props) => {
  const { type,
        themeColor,
        fontColor,
        headerText,
        headerItems,
        bodyItems,
        bodyDropDown,
        children,
        footer,
        footerText,
        footerItems, 
        backdrop,
        isDismissable,
        clicked} = props

    // if (!clicked) { return null }
    return <AnimatePresence>
        {clicked && <motion.div
            style={{position:'fixed', top:0, width:'100%', zIndex:1}}
            variants={backdrop} 
            initial='hidden'
            animate='visible'
            exit='hidden'>
            <Banner themeColor={themeColor}>
                <DynamicHeader 
                backgroundColor={themeColor}
                title={headerText}
                color={fontColor}
                position={'flex-start'}
                items={[headerItems, isDismissable()]}
                />
                {(children||footer) && <AnimatedDropDown>
                    {/* <div style={{height:'100%',width:'100%'}}> */}
                        {children}
                        { footer && <DynamicHeader 
                            backgroundColor={themeColor} 
                            items={footerItems}
                            color={fontColor}
                            position={'flex-start'}
                            subText={footerText}
                        /> }
                    {/* </div> */}
                </AnimatedDropDown>}
            </Banner>
        </motion.div>}
    </AnimatePresence>
}
  