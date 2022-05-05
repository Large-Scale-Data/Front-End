import React, { useEffect, useState } from 'react'
import { a1, a2 } from '../../Allergies'

export const FilterAllergens = props => {
  const { filters, setFilterType, setFilters } = props

  const filterAllergy = (curcat, checked) => {
    if (checked) {
      setFilterType('allergy')
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
        // console.log(index)
        filtersCopy.splice(index, 1)
        setFilters(filtersCopy)
      }
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', padding:'20px'}}>
      <b> Filter Allergens </b>
      <div style={{ display: 'flex', gap:'20px',flexDirection: 'row'}}>
        <div>
          {a1.map((allergy, index) => {
            return (
              <div key={index}>
                <input
                  type='checkbox'
                  onClick={e => filterAllergy(allergy, e.target.checked)}
                />
                <label>{allergy}</label>
              </div>
            )
          })}
        </div>
        <div style={{ alignSelf: 'center' }}>
          {a2.map((allergy, index) => {
            return (
              <div key={index}>
                <input
                  type='checkbox'
                  onClick={e => filterAllergy(allergy, e.target.checked)}
                />
                <label>{allergy}</label>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
