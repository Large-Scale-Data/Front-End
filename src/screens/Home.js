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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <div style={{ padding: '50px' }} >
        <SearchBar setData={setData} data={data}></SearchBar>
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          gap: '10px',
          justifyContent: 'space-evenly'
        }}
      >
        <AllergiesContainer
          allergies={allergies}
          filters={filters}
          setFilterType={setFilterType}
          setFilters={setFilters}
        />
      </div>
      <Table data={data} />
    </div>
  )
}
