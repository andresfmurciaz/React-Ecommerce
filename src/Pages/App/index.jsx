import { useRoutes , BrowserRouter} from 'react-router-dom'
import Home from '../Home'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import MyAccount from '../MyAccount'
import NotFound from '../NotFound'
import Signln from '../Signln'
import './App.css'

const AppRoutes = () => {

let routers = useRoutes ([

  {path: '/' , element: <Home/>}    ,
  {path: '/MyAccount' , element: <MyAccount/>}    ,
  {path: '/MyOrder' , element: <MyOrder/>}    ,
  {path: '/MyOrders' , element: <MyOrders/>}    ,
  {path: '/*' , element: <NotFound/>}    ,
  {path: '/Signln' , element: <Signln/>}    

])

return routers

}



function App() {

 return( 
  <BrowserRouter>
      <AppRoutes/>
  </BrowserRouter>

 )
  
}

export default App
