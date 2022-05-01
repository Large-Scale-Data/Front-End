import React from "react";

  export const AllergiesContainer = ({allergy}) => {
    return <>
      <b> Filter through allergies </b>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      { allergy.map(allergy => //TODO: this is where custom toggle component will go
        <label style={{ display: 'flex', flexDicretion: 'row' }}>
        <div>{allergy}</div>
        <input type="checkbox"></input>
        </label>)}
      </div>
    </>
  }
  
  