import React from "react";
export const Table = ({ data, countires }) => {
  return <table style={{width:'100%', tableLayout:'fixed', color:'white'}}>
    <thead>
    <tr style={{background:'#16A085'}}>
      <th>Brand</th>
      <th>Product Name</th>
      <th>Ingredients</th>
      <th>Allergens</th>
    </tr>
    </thead>
    <tbody>
    {/* { console.log(data) } */}
    {data.map((val, key) => {
        return (
          <tr key={key} style={{color:'black'}}>
            <td style={{color:'black'}}>{val.brand_owner}</td>
            <td style={{color:'black'}}>{val.product_name}</td>
            <td style={{color:'black'}}>{val.ingredients}</td>
            <td style={{color:'black'}}>{val.allergens}</td>
          </tr>
        )
      })}
    </tbody>
    </table>;
}
  