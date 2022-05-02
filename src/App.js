import { Main, TableComponent } from './components/Table/Main';
import { ViewPortProvider } from './app/context'
import './App.css';
import { DynamicHeader } from './components/DynamicHeader';
import { useState } from 'react';
import { SearchBar } from './components/SearchBar/Main';
import { AllergiesContainer } from './components/AllergiesContainer/Main';
import { FilterCountries } from './components/FilterCountries/Main';
import './components/SearchBar/style/searchBar.css';
import axios from "axios";
import { Data } from './Data';

function App() {
  const [data, setData] = useState(Data);
  const allergies = [...new Set(Data.map((Val) => Val.allergy))];
  const countries = [...new Set(Data.map((Val) => Val.region))];
  
  // refreshList = () => {
  //   axios
  //     .get("/api/todos/")
  //     .then((res) => this.setState({ todoList: res.data }))
  //     .catch((err) => console.log(err));
  // };
  
  return (
    <ViewPortProvider>
    <DynamicHeader 
      title={'Food Products Sold In the US, MX and UK'}
      backgroundColor='lightblue'
      position='center'
      items={[<div>Allergy Information</div>,  <div>About Us</div>]}/>
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', padding:'20px', }}>
      <div style={{padding: '50px'}}><SearchBar></SearchBar></div>
      <div style={{display:'flex', width:'100%', gap:'10px', justifyContent:'space-evenly'}}>
        <AllergiesContainer 
          allergies={allergies}
          setData={setData} />
        <FilterCountries 
          countries={countries}
          setData={setData} />
      </div>
      <TableComponent data={data} />
    </div>
    </ViewPortProvider>
  )
}

export default App;
