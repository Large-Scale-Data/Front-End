import { useEffect, useState } from 'react'
import '../components/SearchBar/style/searchBar.css'
import axios from 'axios'
import { SearchBar } from '../components/SearchBar/Main'
import { FilterAllergens } from '../components/FilterAllergens/Main'
import { Table } from '../components/Table/Main'
import { smallData } from '../branded_food_small'
import { Data } from '../Data'


export const Home = () => {
  const [data, setData] = useState(smallData)
  const [filteredData, setFilteredData] = useState(smallData)

  // use this if you dont know how many allergens you will have
  // const allergies = [...new Set(Data.map(Val => Val.allergens))]
  const [searchInput, setSearchInput] = useState('')

  const [filterType, setFilterType] = useState()
  // const countries = [...new Set(Data.map(Val => Val.region))]
  const [filters, setFilters] = useState([])

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

  useEffect(() => {
    if (filters.length > 0) {
      var newData
      if (filterType === 'allergy') {
        newData = filteredData.filter(item => {
          var orStatement = 'item.allergens !== '
          console.log(item.allergens)
          console.log(item.allergens.includes(','))
          // (item.allergens.includes(','))
          filters.forEach(filter => {
            console.log(filter)
            orStatement += "'" + filter + "'"
            if (filters.indexOf(filter) !== filters.length - 1) {
              orStatement += '&& item.allergens !== '
            }
          })
          return eval(orStatement)
        })
      }
      setData(newData)
    } else {
      setData(smallData)
    }
  }, [searchInput, filters])

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h3> Search For A Food Product </h3>
      <div style={{ padding: '20px' }}>
        <SearchBar setSearchInput={setSearchInput}></SearchBar>
      </div>
      <FilterAllergens
        // allergies={allergies}
        filters={filters}
        setFilterType={setFilterType}
        setFilters={setFilters}
        filteredData={filteredData}
      />
      {/* {console.log(smallData)} */}
      {/* {console.log(smallData.map(x => x))} */}
      <Table
        data={data}
        input={searchInput}
        setFilteredData={setFilteredData}
      />
    </div>
  )
}
