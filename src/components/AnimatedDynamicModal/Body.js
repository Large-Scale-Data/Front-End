import { ContentWrapper, MiddleContainer, BodyItems } from './styles/Main'
import { DynamicHeader } from 'components'
import { DropDown } from 'components/General/DropDown'

export const Body = props => {
    const {
        type,
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
        isDismissable
    } = props

    return ( <ContentWrapper>
        { headerText && <DynamicHeader
            backgroundColor={themeColor}
            title={headerText}
            color={fontColor}
            position={'flex-start'}
            items={[headerItems, isDismissable()]}
          >
          </DynamicHeader>
        }
        <MiddleContainer className='body-container'>
            <div className='items-container' 
                style={{display:'flex', flexDirection:'column', width:type === 'fullscreen' ? '80%':'100%', height:type === 'fullscreen' ? '80%':'100%'}}>
                { bodyItems && <BodyItems className='body-items'>{bodyItems}</BodyItems>}
                { bodyDropDown === true
                ? <DropDown 
                    text='Show More' 
                    // textColor=''
                    iconColor='blue'
                    // icon={<FaBeer/>}
                    children={children}
                    items={footerItems}
                > 
                    {children}  
                </DropDown> 
                : children && <div style={{width:'100%', height:'100%'}}>{children}</div>
                }
            </div>
        </MiddleContainer>
        { footer && <DynamicHeader 
            backgroundColor={ themeColor} 
            items={ footerItems}
            color={ fontColor}
            position={'flex-start'}
            subText={ footerText}
        /> }
    </ContentWrapper>)
}