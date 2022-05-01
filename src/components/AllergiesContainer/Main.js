import React from "react";

  export const AllergiesContainer = ({allergy}) => {
    return <>
      <b> Filter by Allergy </b>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'space-around'}}>
      { allergy.map(allergy => //TODO: this is where custom toggle component will go
        <label style={{ display: 'flex', flexDicretion: 'row' }}>
          <input type="checkbox"></input>
        <div>{allergy}</div>
        </label>)}
      </div>
    </>
  }
  
  