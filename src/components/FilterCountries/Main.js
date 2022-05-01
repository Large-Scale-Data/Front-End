import React from "react";

  export const FilterCountries = ({countries}) => {
    return <>
      <b> Filter by Countries </b>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'space-around'}}>
      { countries.map(country => //TODO: this is where custom toggle component will go
        <label style={{ display: 'flex', flexDicretion: 'row' }}>
          <input type="checkbox"></input>
        <div>{country}</div>
        </label>)}
      </div>
    </>
  }
  
  