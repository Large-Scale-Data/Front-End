import React, { useState } from "react";
import { Data } from "../../Data";

  export const FilterCountries = ({countries, setData}) => {
    const filterCountry = (curcat) => {
      const newItem = Data.filter((newVal) => {
        return newVal.region === curcat;
      });
      setData(newItem);
    };

    return <>
      <b> Filter by countries </b>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-around'}}>
      { countries.map(country =>
          <label style={{ display: 'flex' }}>
            <div>{country}</div>
            <input type="checkbox" onClick={()=> filterCountry(country)}></input>
          </label>
        )
      }
      </div>
    </>
  }
  
  