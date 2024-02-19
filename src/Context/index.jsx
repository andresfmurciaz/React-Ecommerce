import { createContext, useState } from "react";
import PropTypes from 'prop-types'
export const ShoppingCartContext = createContext()


export const ShoppingCartProvider = ({children}) => {

    //shopping Cart - increment
const [count,setCount] = useState(0)

// metodo que cambian el estadod e la variable open/close
const openProductDetail = () => setIsProductDetailOpen(true)
const closeOpenProductDetail = ()=> setIsProductDetailOpen(false)
const [isProductDetailOpen,setIsProductDetailOpen] = useState(false)

// product detail - show product
const [productToShow,setProductToShow] = useState({})



    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeOpenProductDetail,
            productToShow,
            setProductToShow
        }}>
            {/* el hijo es toda la app */}
            {children}
        </ShoppingCartContext.Provider>
       
)

}
// Es buena práctica definir PropTypes para asegurar que los componentes que utilizan este proveedor
// proporcionen correctamente sus hijos.
ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired
};