import React from "react";
export const TableComponent = ({ data }) => {
  return <table style={{width:'100%', tableLayout:'fixed', color:'white'}}>
      <thead>
      <tr style={{background:'grey'}}>
          <th>Region</th>
          <th>Product Name</th>
          <th>Product Category</th>
          <th>Unit Price</th>
          <th>Action</th>
      </tr>
      </thead>
      <tbody>
        {data.map(item => <tr key={item.id}>
              <td>{item.product_name}</td>
              <td>{item.product_category}</td>
              <td>{item.unit_price}</td>
              <td />
            </tr>)}
      </tbody>
    </table>;
}
  