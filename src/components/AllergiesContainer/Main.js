import React from "react";
import { Data } from "../../Data";

  export const AllergiesContainer = ({allergies, setData}) => {
    const filterCountry = (curcat) => {
      const newItem = Data.filter((newVal) => {
        return newVal.allergy === curcat;
      });
      setData(newItem);
    };

    return <>
      <b> Select Allergy To Avoid </b>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-around'}}>
      { allergies.map(allergy => //TODO: this is where custom toggle component will go
          <label style={{ display: 'flex'}}>
            <div>{allergy}</div>
            <input type="checkbox" onClick={()=> filterCountry(allergy)}></input>
          </label>
        )
      }
      </div>
    </>
  }
  
  