import { useRoutes , BrowserRouter} from 'react-router-dom'
import Home from '../Home'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import MyAccount from '../MyAccount'
import NotFound from '../NotFound'
import Signln from '../Signln'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {

let routers = useRoutes ([

  {path: '/' , element: <Home/>}    ,
  {path: '/my-account' , element: <MyAccount/>}    ,
  {path: '/my-order' , element: <MyOrder/>}    ,
  {path: '/my-orders' , element: <MyOrders/>}    ,
  {path: '/*' , element: <NotFound/>}    ,
  {path: '/Sign-ln' , element: <Signln/>}    

])

return routers

}



function App() {

 return( 
  <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
  </BrowserRouter>

 )
  
}

export default App
