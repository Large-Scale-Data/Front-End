import { Home } from './screens/Home'
import { ViewPortProvider } from './app/context'
import './App.css'
import { DynamicHeader } from './components/DynamicHeader'
import { useEffect, useState } from 'react'
import './components/SearchBar/style/searchBar.css'
import { Box, Tab, Tabs } from '@mui/material'
import { TabPanel } from './components/TabPanel'
import { AllergyInfo } from './screens/AllergyInfo'
import { AboutUs } from './screens/AboutUs'
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';

function App () {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const theme = useTheme()
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <ViewPortProvider>
      <DynamicHeader
        title={'Miriams PartyLand'}
        backgroundColor='#16A085'
        color='white'
        position='center'
      />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor='secondary'
            indicatorColor='secondary'
            centered
          >
            <Tab label='Home' />
            {/* <Tab label='Allergy Information' /> */}
            <Tab label='About Us' />
          </Tabs>
        </Box>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Home />
          </TabPanel>
          {/* <TabPanel value={value} index={1} dir={theme.direction}>
            <AllergyInfo />
          </TabPanel> */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <AboutUs />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </ViewPortProvider>
  )
}

export default App
