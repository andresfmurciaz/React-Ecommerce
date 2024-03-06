import {XMarkIcon} from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import OrderCard from '../../Components/OrderCard'
const CheckoutSideMenu = () =>{

const context = useContext(ShoppingCartContext)

const handleDelete = (id) => {
const filteredProducts = context.cardProducts.filter(product =>product.id != id)
context.setCardProducts(filteredProducts)

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
        <div className='px-6 overflow-y-scroll'>
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

       
    </aside>
)

}

export default CheckoutSideMenu 