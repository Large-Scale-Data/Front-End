import { Main, TableComponent } from './components/Table/Main';
import { ViewPortProvider } from './app/context'
import './App.css';
import { DynamicHeader } from './components/DynamicHeader';
import { useState } from 'react';
import { SearchBar } from './components/SearchBar/Main';
import { AllergiesContainer } from './components/AllergiesContainer/Main';

function App() {
  const [data, setData] = useState([]);
  const allergens = ["milk", 'egg', 'peanut', 'tree nuts', 'wheat', 'soy', 'fish', 'crustacean']

  return (
    <ViewPortProvider>
    <DynamicHeader 
      title={'Food Products Sold In the US, MX and UK'}
      backgroundColor='lightblue'
      position='flex-start'
      items={<button>Allergies</button>}/>
    <SearchBar></SearchBar>
    <AllergiesContainer allergy={allergens} />
    <TableComponent data={data} />
    </ViewPortProvider>
  )
}

export default App;
