import { Home } from './screens/Home';
import { ViewPortProvider } from './app/context'
import './App.css';
import { DynamicHeader } from './components/DynamicHeader';
import { useEffect, useState } from 'react';
import './components/SearchBar/style/searchBar.css';
import axios from "axios";
import { Box, Tab, Tabs } from '@mui/material';
import { TabPanel } from './components/TabPanel';
import { AllergyInfo } from './screens/AllergyInfo';
import { AboutUs } from './screens/AboutUs';


function App() {
  
  // const [data, setData] = useState({Data:[]});
  // useEffect(() =>{
  //   let x ;
  //       axios.get('http://localhost:8000/admin/')
  //       .then(res => {
  //           x = res.x;
  //           setData({
  //               Data : x    
  //           });
  //       })
  //       .catch(err => {})
  // })
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ViewPortProvider>
    <DynamicHeader 
      title={'Food Products Sold In the US, MX and UK'}
      backgroundColor='lightblue'
      position='center'/>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange}
          textColor='secondary'
          indicatorColor='secondary'
          centered>
          <Tab label="Home" />
          <Tab label="Allergy Information"  />
          <Tab label="About Us" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AllergyInfo/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AboutUs/>
      </TabPanel>
    </Box>
    </ViewPortProvider>
  )
}

export default App;
