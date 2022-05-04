import { useEffect, useState } from 'react'
import '../components/SearchBar/style/searchBar.css'
import axios from 'axios'
import { SearchBar } from '../components/SearchBar/Main'
import { AllergiesContainer } from '../components/AllergiesContainer/Main'
import { Table } from '../components/Table/Main'
import { Data } from '../Data'

export const Home = () => {
  const [data, setData] = useState(Data)
  const [filterType, setFilterType] = useState()
  const allergies = [...new Set(Data.map(Val => Val.allergens))]
  const countries = [...new Set(Data.map(Val => Val.region))]
  const [filters, setFilters] = useState([])
  const [searchInput, setSearchInput] = useState('')


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
      // const newItem = Data.filter(newVal => {
      //   return newVal.region === filters[0]
      // })

      var newData
      if (filterType === 'allergy') {
        newData = Data.filter(item => {
          var orStatement = 'item.allergy !== '
          filters.forEach(filter => {
            orStatement += "'" + filter + "'"
            if (filters.indexOf(filter) !== filters.length - 1) {
              orStatement += '&& item.allergy !== '
            }
            // const filterFunc = function (item, region) {
            //   return item.region === region
            // }
          })
          console.log(orStatement)
          return eval(orStatement)
        })
      }
      if (filterType === 'country') {
        newData = Data.filter(item => {
          var orStatement = 'item.region === '
          filters.forEach(filter => {
            orStatement += "'" + filter + "'"
            if (filters.indexOf(filter) !== filters.length - 1) {
              orStatement += '|| item.region === '
            }
            // const filterFunc = function (item, region) {
            //   return item.region === region
            // }
          })
          return eval(orStatement)
        })
      }
      // bad
      setData(newData)
    } else {
      setData(Data)
    }
  }, [filters])

  return (
    <div>
      <h3> Search For A Food Product </h3>
      <div style={{ padding: '25px' }}>
        <SearchBar 
          setSearchInput={setSearchInput}
        ></SearchBar>
      </div>
      <AllergiesContainer
        allergies={allergies}
        filters={filters}
        setFilterType={setFilterType}
        setFilters={setFilters}
      />
      <Table data={data} input={searchInput}/>
    </div>
  )
}
