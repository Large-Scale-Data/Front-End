import React from "react";

  export const FilterCountries = ({countries}) => {
    return <>
      <b> Filter by countries </b>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-around'}}>
      { countries.map(country => //TODO: this is where custom toggle component will go
        <label style={{ display: 'flex', flexDicretion: 'row' }}>
        <div>{country}</div>
        <input type="checkbox"></input>
        </label>)}
      </div>
    </>
  }
  
  