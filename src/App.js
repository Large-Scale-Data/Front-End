import { ViewPortProvider } from './app/context'
import './App.css';
import { DynamicHeader } from './components/DynamicHeader';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const allergens = ["milk", 'egg', 'peanut', 'tree nuts', 'wheat', 'soy', 'fish', 'crustacean']

  return (
    <ViewPortProvider>
    <DynamicHeader 
      title={'Food Products Sold In the US, MX and UK'}
      backgroundColor='lightblue'
      position='flex-start'
    >
    </DynamicHeader>
    <b>
      Filter through allergies
    </b>
    <div style={{display:'flex', flexDirection:'row'}}>
      { allergens.map((allergy) => 
        //TODO: this is where custom toggle component will go
        <label style={{display:'flex', flexDicretion:'row'}}>
          <div>{allergy}</div>
          <input type="checkbox"></input>
        </label>
      )}
    </div>
    <table>
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
        {
          data.map((item) => (
            <tr key={item.id}>
              <td>{item.product_name}</td>
              <td>{item.product_category}</td>
              <td>{item.unit_price}</td>
              <td/>
            </tr>
          ))
        }
      </tbody>
    </table>
    </ViewPortProvider>
  )
}

export default App;
