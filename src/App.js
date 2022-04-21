import { ViewPortProvider } from './app/context'
import './App.css';
import { DynamicHeader } from './components/DynamicHeader';

function App() {
  const row = [ 1,  'US', 'peanut butter',  'peanuts',  'peanut']
  const rowItems = row.map((items) => <td>{items}</td>)

  return (
    <ViewPortProvider>
    <DynamicHeader 
      title={'Food Products Sold In the US, MX and UK'}
      backgroundColor='lightblue'
      position='flex-start'
    >

    </DynamicHeader>
    <table style={{border:'2px solid black'}}>
      <tbody>
        <tr>{rowItems}</tr>
      </tbody>
    </table>
    </ViewPortProvider>
  )
}

export default App;
