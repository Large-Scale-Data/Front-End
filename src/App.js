import { Main, TableComponent } from './components/Table/Main';
import { ViewPortProvider } from './app/context'
import './App.css';
import { DynamicHeader } from './components/DynamicHeader';
import { useState } from 'react';
import { SearchBar } from './components/SearchBar/Main';
import { AllergiesContainer } from './components/AllergiesContainer/Main';
import { FilterCountries } from './components/FilterCountries/Main';
import './components/SearchBar/style/searchBar.css';

function App() {
  const [data, setData] = useState([]);
  const allergens = ["Milk", 'Eggs', 'Peanut', 'Tree nuts', 'Wheat', 'Soy', 'Fish', 'Crustacean']
  const countries = ["USA", 'UK', 'MX']

  return (
    <ViewPortProvider>
    <DynamicHeader 
      title={'Food Products Sold In the US, MX and UK'}
      backgroundColor='lightblue'
      position='flex-start'
      items={[<div>Allergy Information</div>, 
      <div>About Us</div>]}/>
      <div style={{padding: '50px'}}><SearchBar></SearchBar></div>
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', padding:'20px', }}>
      <AllergiesContainer allergy={allergens} />
      <FilterCountries countries={countries} />


      <TableComponent data={data} />
    </div>
    </ViewPortProvider>
  )
}

export default App;
