import React, { useEffect, useState } from "react";
import { Data } from "../../Data";

export const AllergiesContainer = ({allergies, setData, filters, setFilterType, setFilters}) => {
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
        console.log(index)

        filtersCopy.splice(index, 1)
        setFilters(filtersCopy)
      }
    }
  }

  // useEffect(() => {
  //   if (filters.length > 0) {
  //     // const newItem = Data.filter(newVal => {
  //     //   return newVal.region === filters[0]
  //     // })
  //     const newData = Data.filter(item =>{
  //       var orStatement = "item.allergy !== " ;
  //       filters.forEach(filter => {
  //         orStatement += "'"+ filter +"'"
  //         if(filters.indexOf(filter)!==filters.length-1){
  //           orStatement+="&& item.allergy !== "
  //         }
  //         // const filterFunc = function (item, region) {
  //         //   return item.region === region
  //         // }
  //       })
  //       console.log(orStatement)

  //       return eval(orStatement)
  //     } )
  //     console.log(newData)

  //     setData(newData)
  //   } 
  //   else {
  //     setData(Data)
  //   }
  // }, [filters])

  return <div style={{display:'flex', padding:'10px', flexDirection:'column'}}>
    <b> Select Allergy To Avoid </b>
    { allergies.map((allergy, index) => {//TODO: this is where custom toggle component will go
        return <div key={index}>
          <input
            type="checkbox"
            onClick={e => filterAllergy(allergy, e.target.checked)}
          />
          <label>{allergy}</label>
        </div>
      }
    )}
  </div>
}
  
  