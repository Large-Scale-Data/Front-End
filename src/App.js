import { Main, TableComponent } from './components/Table/Main';
import { ViewPortProvider } from './app/context'
import './App.css';
import { DynamicHeader } from './components/DynamicHeader';
import { useEffect, useState } from 'react';
import { SearchBar } from './components/SearchBar/Main';
import { AllergiesContainer } from './components/AllergiesContainer/Main';
import { FilterCountries } from './components/FilterCountries/Main';
import './components/SearchBar/style/searchBar.css';
import axios from "axios";
import { Data } from './Data';

function App() {
  const [data, setData] = useState(Data);
  const [filterType,setFilterType] = useState()
  const allergies = [...new Set(Data.map((Val) => Val.allergy))];
  const countries = [...new Set(Data.map((Val) => Val.region))];
  const [filters, setFilters] = useState([])

  // refreshList = () => {
  //   axios
  //     .get("/api/todos/")
  //     .then((res) => setState({ todoList: res.data }))
  //     .catch((err) => console.log(err));
  // };
  useEffect(() => {
    if (filters.length > 0) {
      // const newItem = Data.filter(newVal => {
      //   return newVal.region === filters[0]
      // })

      var newData;

      if(filterType==='allergy'){
       newData = Data.filter(item =>{
          var orStatement = "item.allergy !== " ;
          filters.forEach(filter => {
            orStatement += "'"+ filter +"'"
            if(filters.indexOf(filter)!==filters.length-1){
              orStatement+="&& item.allergy !== "
            }
            // const filterFunc = function (item, region) {
            //   return item.region === region  
            // }
          })
          console.log(orStatement)
  
          return eval(orStatement)
        } )
      }
      if(filterType==='country'){
         newData = Data.filter(item =>{
          var orStatement = "item.region === " ;
          filters.forEach(filter => {
            orStatement += "'"+ filter +"'"
            if(filters.indexOf(filter)!==filters.length-1){
              orStatement+="|| item.region === "
            }
            // const filterFunc = function (item, region) {
            //   return item.region === region
            // }
          })
          return eval(orStatement)
        } )
      }
      
      
      // bad
      setData(newData)
    } 
    else {
      setData(Data)
    }
  }, [filters])
  
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
          filters={filters}
          setFilterType={setFilterType}
          setFilters={setFilters}
          setData={setData} />
        <FilterCountries 
          countries={countries}
          // data={data}
          setFilterType={setFilterType}
          filters={filters}
          setFilters={setFilters}
          setData={setData} />
      </div>
      <TableComponent data={data} />
    </div>
    </ViewPortProvider>
  )
}

export default App;
