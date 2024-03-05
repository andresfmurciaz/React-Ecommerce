import { ShoppingCartProvider } from '../../Context'
import { useRoutes , BrowserRouter} from 'react-router-dom'
import Home from '../Home'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import MyAccount from '../MyAccount'
import NotFound from '../NotFound'
import Signln from '../Signln'
import Navbar from '../../Components/Navbar'
import './App.css'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'

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
  <ShoppingCartProvider>  
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
      {/* debe de vivir en toda la aplicacion ya que el carrito se va abrir desde cualquier parte de la paginma */}
      <CheckoutSideMenu/>
    </BrowserRouter>
  </ShoppingCartProvider>

 )
  
}

export default App
