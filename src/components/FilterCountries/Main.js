import React, { useEffect, useState } from 'react'
import { Data } from '../../Data'

export const FilterCountries = ({ countries, setData, filters,setFilters,setFilterType}) => {
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

  // const newItem = Data.filter(newVal => {
  //   //filters.map((filter)=>{})
  //   return newVal.region === filters[0] && newVal.region === filters[1]
  // })
  // useEffect(() => {
  //   if (filters.length > 0) {
  //     // const newItem = Data.filter(newVal => {
  //     //   return newVal.region === filters[0]
  //     // })
  //     const newData = Data.filter(item =>{
  //       var orStatement = "item.region === " ;
  //       filters.forEach(filter => {
  //         orStatement += "'"+ filter +"'"
  //         if(filters.indexOf(filter)!==filters.length-1){
  //           orStatement+="|| item.region === "
  //         }
  //         // const filterFunc = function (item, region) {
  //         //   return item.region === region
  //         // }
  //       })
  //       return eval(orStatement)
  //     } )
  //     // bad
  //     setData(newData)
  //   } 
  //   else {
  //     setData(Data)
  //   }
  // }, [filters])

  // useEffect(() => {}, [data])
  return (
    <div
      div
      style={{ display: 'flex', padding: '10px', flexDirection: 'column' }}
    >
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
