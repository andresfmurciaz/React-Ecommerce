import { createContext, useState } from "react";
import PropTypes from 'prop-types'
export const ShoppingCartContext = createContext()


export const ShoppingCartProvider = ({children}) => {

const [count,setCount] = useState(0)


    return (
<ShoppingCartContext.Provider value={{
    count,
    setCount
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