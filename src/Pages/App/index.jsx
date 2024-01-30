
import Home from '../Home'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import MyAccount from '../MyAccount'
import NotFound from '../NotFound'
import Signln from '../Signln'
import './App.css'

function App() {
 return( 
  <div className='bg-red-100'> 
    <Home/>
    <MyAccount/>
    <MyOrder/>
    <MyOrders/>
    <NotFound/>
    <Signln/>
  </div>
 )
  
}

export default App
