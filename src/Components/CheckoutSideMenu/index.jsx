import {XMarkIcon} from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../utils'
const CheckoutSideMenu = () =>{

const context = useContext(ShoppingCartContext)

const handleDelete = (id) => {
const filteredProducts = context.cardProducts.filter(product =>product.id != id)
context.setCardProducts(filteredProducts)

}

//add a order a la list de setorder del contexto
const handleCheckout = () =>{

  const orderToAdd = {
    date: '01.02.23',
    products: context.cardProducts,
    totalProducts : context.cardProducts.length,
    totalPrice : totalPrice(context.cardProducts)
  }

  context.setOrder([...context.order , orderToAdd])
  // se reinicia la lista ya que se guardo la ordencompra
  context.setCardProducts([])
}

    return (
    <aside className={`${context.isCheckoutSideMenu ? 'flex': 'hidden'} checkout-site-menu   flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My order</h2>
            <div>
                <XMarkIcon className='h-6 w-6 text-black '
                 onClick={()=> context.closeCheckoutSideMenu()}></XMarkIcon>
            </div>
        </div>
        <div className='px-6 overflow-y-scroll flex-1'>
        {
          context.cardProducts.map(product => (
            <OrderCard
              key={product.id} 
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              handleDelete={handleDelete}
              id={product.id}
            />
          ))
        }
      </div>

       <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>  
        <span className='font-light'>Total:</span>
        <span className='font-medium text-2xl'>${totalPrice(context.cardProducts)}</span>
        </p>
        
        <button className='w-full bg-black py-3 text-white rounded-lg' onClick={()=>handleCheckout()}>Checkout</button>
        </div>
    </aside>
)

}

export default CheckoutSideMenu 