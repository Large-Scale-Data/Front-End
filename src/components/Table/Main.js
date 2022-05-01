import React from "react";
export const TableComponent = ({ data }) => {
  return <table>
      <thead>
      <tr>
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
  