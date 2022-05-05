import React, { useEffect } from 'react'

export const Table = ({ data, input, setFilteredData }) => {

  const newData = data.filter(el => {
    //if no input then return the original
    if (input === '') {
      return el
    }
    //return the item which contains the user input
    else {
      return el.product_name.toLowerCase().includes(input) // returns true false
    }
  })

  useEffect(() => {
    setFilteredData(newData)
  },[input])

  return (
    <table
      style={{
        width: '100%',
        tableLayout: 'fixed',
        color: 'white'
      }}
    >
      <thead>
        <tr style={{ background: '#16A085' }}>
          <th>Brand</th>
          <th>Product Name</th>
          <th>Ingredients</th>
          <th>Allergens</th>
        </tr>
      </thead>
      <tbody>
        { newData.map((val, key) => {
          return (
            <tr key={key} style={{ color: 'black' }}>
              <td style={{ color: 'black' }}>{val.brand_owner}</td>
              <td style={{ color: 'black' }}>{val.product_name}</td>
              <td style={{ color: 'black' }}>{val.ingredients}</td>
              <td style={{ color: 'black' }}>{val.allergens}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
