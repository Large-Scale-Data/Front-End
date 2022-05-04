import React, { useEffect, useState } from 'react'
import { Data } from '../../Data'

export const FilterCountries = ({ countries, filters,setFilters,setFilterType}) => {
  const filterCountry = (curcat, checked) => {
    if (checked) {
      setFilterType('country')
      const filtersCopy = [...filters]
      var index = filtersCopy.indexOf(curcat)
      if (index == -1) {
        filtersCopy.push(curcat)
        setFilters(filtersCopy)
      }
    } else {
      //if filter is in filters, remove it else do nothing
      const filtersCopy = [...filters]
      var index = filtersCopy.indexOf(curcat)
      if (index !== -1) {
        console.log(index)

        filtersCopy.splice(index, 1)
        setFilters(filtersCopy)
      }
    }
  }


  return (
    <div style={{ display: 'flex', padding: '10px', flexDirection: 'column' }} >
      <b> Filter by countries </b>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {countries.map(country => (
          <label style={{ display: 'flex' }}>
            <input
              type='checkbox'
              onClick={e => filterCountry(country, e.target.checked)}
            ></input>
            <div>{country}</div>
          </label>
        ))}
      </div>
    </div>
  )
}
